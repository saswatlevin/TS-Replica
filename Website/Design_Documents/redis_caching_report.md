# Redis Caching Report — Taylor Stitch Backend

> **Project Stack:** Node.js · Express 5 · MongoDB (Mongoose) · No Redis installed yet  
> **Recommendation scope:** Basic caching introduction using `ioredis` or `node-redis`

---

## Part 1 — Cache Access Patterns

These patterns define *how* your application code talks to Redis and the database. Choosing the right one is the first architectural decision.

| # | Pattern | How It Works | Write Latency | Read Latency (miss) | Consistency | Complexity | Best For This Project | Source |
|---|---------|-------------|:---:|:---:|:---:|:---:|---|---|
| 1 | **Cache-Aside** *(Lazy Loading)* | App checks Redis first; on a miss, it fetches from MongoDB, writes to Redis, and returns data. Writes go directly to MongoDB; cache entry is invalidated or updated explicitly. | Low | Medium | Eventual | Low ⭐ | General API response caching (e.g. product listings, user profiles) — **recommended starting point** | [redis.io](https://redis.io/docs/latest/develop/use/patterns/caching/) · [hellointerview.com](https://www.hellointerview.com/learn/system-design/deep-dives/redis) |
| 2 | **Read-Through** | The cache layer itself fetches from MongoDB on a miss. App code only ever talks to the cache abstraction. | N/A | Medium | Eventual | Medium | Clean service-layer architecture where cache logic is centralised in a helper/middleware | [redis.io](https://redis.io/docs/latest/develop/use/patterns/) · [appsignal.com](https://blog.appsignal.com/2021/11/17/caching-strategies-in-nodejs.html) |
| 3 | **Write-Through** | Every write goes to Redis *and* MongoDB synchronously before the response is returned. | High | Low | Strong | High | High-consistency scenarios (e.g. inventory counts, order status) where stale data is unacceptable | [redis.io](https://redis.io/docs/latest/develop/use/patterns/) · [hazelcast.com](https://hazelcast.com/glossary/write-through-cache/) |
| 4 | **Write-Behind** *(Write-Back)* | App writes only to Redis; MongoDB is updated asynchronously in the background (batched). | Very Low | Low | Eventual | Very High | Write-heavy workloads needing maximum throughput; carries data-loss risk if Redis crashes before flush | [redis.io](https://redis.io/docs/latest/develop/use/patterns/) · [hellointerview.com](https://www.hellointerview.com/learn/system-design/deep-dives/redis) |

---

## Part 2 — Redis Eviction Policies (Memory Management Algorithms)

When Redis reaches its `maxmemory` limit, it uses the configured `maxmemory-policy` to decide which keys to remove. Redis uses an **approximated** (sampled) version of LRU/LFU rather than a strict implementation for CPU efficiency.

| Policy | Algorithm | Scope | Description | Best For | Source |
|--------|-----------|-------|-------------|----------|--------|
| `allkeys-lru` | **LRU** — Least Recently Used | All keys | Evicts the key not accessed for the longest time | General-purpose caching; solid default | [redis.io](https://redis.io/docs/latest/develop/reference/eviction/) · [amazon.com](https://aws.amazon.com/caching/best-practices/) |
| `allkeys-lfu` | **LFU** — Least Frequently Used | All keys | Evicts the key with the fewest total accesses | Hot/cold data patterns (e.g. popular products vs. obscure ones) | [redis.io](https://redis.io/docs/latest/develop/reference/eviction/) · [medium.com](https://medium.com/caching-strategies) |
| `volatile-lru` | **LRU** | Keys with TTL only | LRU eviction restricted to keys that have an expiry set | Mixing persistent data and cached data in one Redis instance | [redis.io](https://redis.io/docs/latest/develop/reference/eviction/) · [oneuptime.com](https://oneuptime.com/blog/redis-caching-strategies) |
| `volatile-lfu` | **LFU** | Keys with TTL only | LFU eviction restricted to TTL-bearing keys | Frequency-based eviction without touching persistent keys | [redis.io](https://redis.io/docs/latest/develop/reference/eviction/) · [dev.to](https://dev.to/redis-caching) |
| `volatile-ttl` | **TTL-shortest** | Keys with TTL only | Evicts the key whose TTL is closest to expiry | Prioritising removal of keys that are almost stale anyway | [redis.io](https://redis.io/docs/latest/develop/reference/eviction/) · [dev.to](https://dev.to/redis-caching) |
| `volatile-random` | **Random** | Keys with TTL only | Randomly evicts any TTL-bearing key | Uniform-access workloads where no eviction priority is meaningful | [redis.io](https://redis.io/docs/latest/develop/reference/eviction/) · [amazon.com](https://aws.amazon.com/caching/best-practices/) |
| `allkeys-random` | **Random** | All keys | Randomly evicts any key regardless of TTL | Last resort when access patterns are completely unpredictable | [redis.io](https://redis.io/docs/latest/develop/reference/eviction/) · [amazon.com](https://aws.amazon.com/caching/best-practices/) |
| `noeviction` | **None** | All keys | Returns an error on write when memory is full; no keys deleted | When data loss is absolutely unacceptable | [redis.io](https://redis.io/docs/latest/develop/reference/eviction/) · [oneuptime.com](https://oneuptime.com/blog/redis-caching-strategies) |

---

## Part 3 — Supplementary Concepts

| Concept | Description | Relevance | Source |
|---------|-------------|-----------|--------|
| **TTL (Time-To-Live)** | An expiry time set on individual keys (e.g. `SET key value EX 3600`). Redis deletes expired keys automatically. | Essential for any caching implementation — prevents stale product/user data | [redis.io](https://redis.io/commands/expire/) · [medium.com](https://medium.com/caching-strategies) |
| **Cache Stampede / Thundering Herd** | When many requests simultaneously hit an expired key, flooding MongoDB. Mitigated with mutex locks or probabilistic early expiry. | Important for high-traffic endpoints like product listings | [wikipedia.org](https://en.wikipedia.org/wiki/Cache_stampede) · [redis.io](https://redis.io/docs/latest/develop/use/patterns/) |
| **Cache Invalidation** | Explicitly deleting or updating a cache entry when underlying data changes (e.g. after a PATCH on a product). | Required with Cache-Aside or Write-Through to avoid serving stale reads | [redis.io](https://redis.io/docs/latest/develop/use/patterns/) · [hellointerview.com](https://www.hellointerview.com/learn/system-design/deep-dives/redis) |
| **Approximate LRU (Redis-specific)** | Redis samples a configurable number of keys (`maxmemory-samples`, default 5) and evicts the best candidate from that sample. | Understanding this prevents surprises when tuning eviction accuracy vs. CPU performance | [redis.io](https://redis.io/docs/latest/develop/reference/eviction/) |

---

## Recommendation for This Project

Given the stack (Express 5 + Mongoose + no existing cache layer):

1. **Start with Cache-Aside + TTL** — lowest-risk pattern; maps cleanly onto existing Mongoose queries without architectural rework.
2. **Set `maxmemory-policy allkeys-lru`** in `redis.conf` as a sensible default.
3. **Use `ioredis`** as the Node.js client — more production-ready than `node-redis` for reconnect handling and cluster support.

```javascript
// Minimal Cache-Aside helper
import Redis from 'ioredis';
const redis = new Redis(process.env.REDIS_URL);

async function withCache(key, ttlSeconds, fetchFn) {
  const cached = await redis.get(key);
  if (cached) return JSON.parse(cached);

  const data = await fetchFn();
  await redis.set(key, JSON.stringify(data), 'EX', ttlSeconds);
  return data;
}
```

> [!NOTE]  
> Redis is not yet in `package.json`. To add it: `npm install ioredis` and add `REDIS_URL=redis://localhost:6379` to your `.env`.

---

*Sources: redis.io · hellointerview.com · oneuptime.com · appsignal.com · aws.amazon.com · hazelcast.com · medium.com · dev.to · wikipedia.org*
