// ========================================
// 1. create() - Creates and saves one or more documents
// ========================================

// Syntax: Model.create(doc(s), [options])

// Parameters:
// - doc(s): Object | Array<Object> - Document(s) to create
// - options: Object (optional) - Configuration options

// Return Type: Promise<Document> | Promise<Array<Document>>

// Example Model
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

// Example 1: Create a single document
async function createSingleUser() {
  const user = await User.create({
    name: 'John Doe',
    email: 'john@example.com',
    age: 30
  });
  console.log(user); // Returns the created document with _id
}

// Example 2: Create multiple documents
async function createMultipleUsers() {
  const users = await User.create([
    { name: 'Alice', email: 'alice@example.com', age: 25 },
    { name: 'Bob', email: 'bob@example.com', age: 35 }
  ]);
  console.log(users); // Returns array of created documents
}


// ========================================
// 2. findOneAndUpdate() - Finds a document and updates it
// ========================================

// Syntax: Model.findOneAndUpdate(filter, update, [options])

// Parameters:
// - filter: Object - Criteria to find the document
// - update: Object - Update operations to apply
// - options: Object (optional) - Configuration options
//   * new: Boolean - If true, return modified document (default: false)
//   * upsert: Boolean - Create document if not found (default: false)
//   * runValidators: Boolean - Run schema validators (default: false)
//   * select: String/Object - Fields to return
//   * sort: Object - Sort order if multiple docs match

// Return Type: Promise<Document | null>

// Example 1: Basic update
async function updateUser() {
  const user = await User.findOneAndUpdate(
    { email: 'john@example.com' },  // filter
    { age: 31 },                     // update
    { new: true }                    // return updated document
  );
  console.log(user); // Returns updated document or null if not found
}

// Example 2: Update with operators
async function updateWithOperators() {
  const user = await User.findOneAndUpdate(
    { name: 'Alice' },
    { $inc: { age: 1 }, $set: { email: 'newemail@example.com' } },
    { new: true, runValidators: true }
  );
  console.log(user);
}

// Example 3: Upsert (create if not exists)
async function upsertUser() {
  const user = await User.findOneAndUpdate(
    { email: 'charlie@example.com' },
    { name: 'Charlie', email: 'charlie@example.com', age: 28 },
    { new: true, upsert: true }
  );
  console.log(user); // Creates new document if not found
}


// ========================================
// 3. findOne() - Finds a single document
// ========================================

// Syntax: Model.findOne(filter, [projection], [options])

// Parameters:
// - filter: Object - Criteria to find the document
// - projection: String/Object (optional) - Fields to include/exclude
// - options: Object (optional) - Query options
//   * lean: Boolean - Return plain JavaScript object
//   * populate: String/Object - Populate referenced documents
//   * select: String/Object - Field selection
//   * sort: Object - Sort order

// Return Type: Promise<Document | null>

// Example 1: Basic find
async function findUser() {
  const user = await User.findOne({ email: 'john@example.com' });
  console.log(user); // Returns document or null
}

// Example 2: With projection (field selection)
async function findUserWithProjection() {
  // Include only name and email
  const user = await User.findOne(
    { email: 'john@example.com' },
    'name email'  // projection string
  );
  console.log(user); // { name: '...', email: '...' }
}

// Example 3: With options
async function findUserWithOptions() {
  const user = await User.findOne(
    { age: { $gte: 25 } },
    null,
    { sort: { age: -1 }, lean: true }
  );
  console.log(user); // Returns plain JS object, sorted by age descending
}

// Example 4: Exclude fields
async function findUserExcludeFields() {
  const user = await User.findOne(
    { name: 'Alice' },
    { age: 0 }  // exclude age field
  );
  console.log(user);
}


// ========================================
// 4. find() - Finds multiple documents
// ========================================

// Syntax: Model.find(filter, [projection], [options])

// Parameters:
// - filter: Object - Criteria to find documents
// - projection: String/Object (optional) - Fields to include/exclude
// - options: Object (optional) - Query options
//   * limit: Number - Maximum number of documents
//   * skip: Number - Number of documents to skip
//   * sort: Object - Sort order
//   * lean: Boolean - Return plain JavaScript objects
//   * populate: String/Object - Populate referenced documents

// Return Type: Promise<Array<Document>>

// Example 1: Find all documents
async function findAllUsers() {
  const users = await User.find({});
  console.log(users); // Returns array of all users
}

// Example 2: Find with filter
async function findUsersByAge() {
  const users = await User.find({ age: { $gte: 30 } });
  console.log(users); // Returns users aged 30 or older
}

// Example 3: With pagination and sorting
async function findUsersWithPagination() {
  const users = await User.find(
    {},
    null,
    { 
      skip: 10,           // Skip first 10
      limit: 5,           // Return 5 documents
      sort: { age: -1 }   // Sort by age descending
    }
  );
  console.log(users);
}

// Example 4: Find with projection
async function findUsersWithProjection() {
  const users = await User.find(
    { age: { $lt: 40 } },
    'name email',  // Only return name and email
    { sort: { name: 1 } }
  );
  console.log(users);
}

// Example 5: Chaining query methods
async function findWithChaining() {
  const users = await User
    .find({ age: { $gte: 25 } })
    .select('name email')
    .sort({ name: 1 })
    .limit(10)
    .lean()
    .exec();
  console.log(users);
}


// ========================================
// COMPARISON TABLE
// ========================================

/*
┌──────────────────────┬─────────────┬──────────────────┬─────────────┐
│ Function             │ Purpose     │ Return Type      │ Creates Doc │
├──────────────────────┼─────────────┼──────────────────┼─────────────┤
│ create()             │ Create      │ Doc or Array     │ Yes         │
│ findOneAndUpdate()   │ Find+Update │ Doc or null      │ Optional    │
│ findOne()            │ Find        │ Doc or null      │ No          │
│ find()               │ Find Many   │ Array of Docs    │ No          │
└──────────────────────┴─────────────┴──────────────────┴─────────────┘
*/