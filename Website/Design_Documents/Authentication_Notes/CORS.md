\# CORS (Cross-Origin Resource Sharing) Explanation



This document explains the concept of CORS (Cross-Origin Resource Sharing) and analyzes its implementation and implications in this Express.js authentication REST API.



\---



\## 1. Conceptual Explanation: What is CORS?



\### The Same-Origin Policy (SOP)

By default, web browsers enforce a security policy called the \*\*Same-Origin Policy (SOP)\*\*. Under SOP, a web application running in a browser is only allowed to access resources (like APIs) from the \*\*same origin\*\* that served the web application. 



An \*\*origin\*\* is defined by three components:

1\. \*\*Protocol\*\* (e.g., `http` vs. `https`)

2\. \*\*Domain/Host\*\* (e.g., `localhost` vs. `example.com`)

3\. \*\*Port\*\* (e.g., `3000` vs. `5000`)



If any of these three elements differ between the client application and the API, the request is considered a \*\*Cross-Origin request\*\*. Without CORS, the browser will block the client application from reading the response.



\### Enter CORS

\*\*Cross-Origin Resource Sharing (CORS)\*\* is an HTTP-header-based mechanism that relaxes the Same-Origin Policy. It allows servers to explicitly declare who can access their resources and how.



When a client makes a cross-origin request:

1\. \*\*Simple Requests:\*\* For certain safe requests (e.g., standard GET/POST with common content types), the browser sends the request directly and includes an `Origin` header. The server must respond with the `Access-Control-Allow-Origin` header matching the client's origin (or `\*` for all) for the browser to share the response.

2\. \*\*Preflight Requests:\*\* For potentially modifying or complex requests (e.g., JSON payloads, custom headers, or PUT/DELETE methods), the browser automatically sends an initial HTTP `OPTIONS` request (a \*\*preflight request\*\*) to the server. The server must respond with appropriate CORS headers to permit the subsequent actual request.



\---



\## 2. CORS Usage in this Repository



In this project, CORS is integrated as a global middleware using the popular Node.js `cors` package.



\### Configuration in Code

CORS is configured in the main entry point \[server.js](file:///c:/Users/saswa/OneDrive/Desktop/Expressjs-auth-REST-API-RBAC-passportjs-jwt-main/server.js):



1\. \*\*Importing the Middleware\*\* (Line 2):

&#x20;  ```javascript

&#x20;  const cors = require('cors');

&#x20;  ```

2\. \*\*Applying the Middleware Globally\*\* (Line 17):

&#x20;  ```javascript

&#x20;  app.use(cors());

&#x20;  ```



\### What does the default `cors()` call do?

Because `cors()` is called with no custom configuration object, it uses the default configuration settings:



| Setting / Header | Default Value | Description |

| :--- | :--- | :--- |

| \*\*`Access-Control-Allow-Origin`\*\* | `\*` | Allows \*\*any\*\* website/origin to send requests and access the response. |

| \*\*`Access-Control-Allow-Methods`\*\* | `GET, HEAD, PUT, PATCH, POST, DELETE` | Permits all major HTTP request methods. |

| \*\*`Access-Control-Allow-Headers`\*\* | Match client requests | Dynamically accepts whatever headers the client requests. |

| \*\*`Access-Control-Allow-Credentials`\*\* | Not Set (default `false`) | Does \*\*not\*\* permit requests to include credentials (cookies, authorization headers). |



\---



\## 3. Important Architectural Implication: CORS \& Cookie Auth



There is an important detail to note regarding how CORS interacts with the authentication mechanism in this project.



\### The Conflict:

1\. \*\*Cookie-based Auth:\*\* In \[userController.js](file:///c:/Users/saswa/OneDrive/Desktop/Expressjs-auth-REST-API-RBAC-passportjs-jwt-main/controllers/userController.js#L44), when a user logs in, the JWT token is sent back to the client and stored in an `httpOnly` cookie:

&#x20;  ```javascript

&#x20;  res.cookie('token', token, { httpOnly: true });

&#x20;  ```

&#x20;  And the protected routes read it from cookies in \[auth.js](file:///c:/Users/saswa/OneDrive/Desktop/Expressjs-auth-REST-API-RBAC-passportjs-jwt-main/middleware/auth.js#L12):

&#x20;  ```javascript

&#x20;  const token = req.cookies.token;

&#x20;  ```

2\. \*\*CORS credentials block:\*\* Browsers will \*\*never\*\* send credentials (like cookies or HTTP Authorization headers) in a cross-origin request if the server's CORS configuration returns `Access-Control-Allow-Origin: \*`.



\### How to resolve this for Production / Cross-Origin clients:

If this backend needs to support a frontend app hosted on a different origin (e.g., a React app on `http://localhost:3000`), you must explicitly allow that origin and set `credentials: true` in \[server.js](file:///c:/Users/saswa/OneDrive/Desktop/Expressjs-auth-REST-API-RBAC-passportjs-jwt-main/server.js):



```javascript

app.use(cors({

&#x20; origin: 'http://localhost:3000', // Must be explicit; cannot be '\*' when credentials are true

&#x20; credentials: true

}));

```

