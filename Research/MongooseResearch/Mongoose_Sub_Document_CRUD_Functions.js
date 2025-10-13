// ========================================
// MONGOOSE SUB-DOCUMENT CRUD OPERATIONS
// ========================================

const mongoose = require('mongoose');

// Define schemas with sub-documents
const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  zipCode: String
});

const commentSchema = new mongoose.Schema({
  text: String,
  author: String,
  createdAt: { type: Date, default: Date.now }
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: addressSchema,  // Single sub-document
  comments: [commentSchema]  // Array of sub-documents
});

const User = mongoose.model('User', userSchema);


// ========================================
// 1. CREATE Sub-Documents
// ========================================

// CREATE - Adding sub-documents to arrays

// Method 1a: push() - Adds sub-document(s) to the end
// Syntax: parentDoc.subdocArray.push(subdoc)
// Parameters: subdoc - Object | Document - Sub-document to add
// Return Type: Number - New length of array

async function addCommentWithPush() {
  const user = await User.findOne({ email: 'john@example.com' });
  
  user.comments.push({
    text: 'Great post!',
    author: 'Alice'
  });
  
  await user.save();  // Must save parent document
  console.log(user.comments); // Returns updated array
}

// Method 1b: $push with findOneAndUpdate - Adds in a single atomic operation
// Syntax: Model.findOneAndUpdate(filter, { $push: { array: item } }, options)
// Parameters: filter - Object, $push operator with array and item, options - Object
// Return Type: Promise<Document | null>

async function addCommentWithQueryPush() {
  const user = await User.findOneAndUpdate(
    { email: 'john@example.com' },  // filter
    { 
      $push: { 
        comments: {
          text: 'Great post!',
          author: 'Alice'
        }
      }
    },
    { new: true }  // return updated document
  );
  
  console.log(user.comments); // No separate save() needed!
}

// Method 1c: $push multiple items at once with $each
async function addMultipleComments() {
  const user = await User.findOneAndUpdate(
    { email: 'john@example.com' },
    { 
      $push: { 
        comments: {
          $each: [
            { text: 'First comment', author: 'Bob' },
            { text: 'Second comment', author: 'Charlie' }
          ]
        }
      }
    },
    { new: true }
  );
  
  console.log(user.comments);
}

// Method 1d: $push with positioning modifiers
async function addCommentWithPosition() {
  const user = await User.findOneAndUpdate(
    { email: 'john@example.com' },
    { 
      $push: { 
        comments: {
          $each: [{ text: 'New comment', author: 'David' }],
          $position: 0  // Insert at beginning (like unshift)
        }
      }
    },
    { new: true }
  );
  
  console.log(user.comments);
}

// Method 2: unshift() - Adds sub-document(s) to the beginning
// Syntax: parentDoc.subdocArray.unshift(subdoc)
// Parameters: subdoc - Object | Document - Sub-document to add
// Return Type: Number - New length of array

async function addCommentWithUnshift() {
  const user = await User.findOne({ email: 'john@example.com' });
  
  user.comments.unshift({
    text: 'First comment',
    author: 'Bob'
  });
  
  await user.save();
  console.log(user.comments);
}

// Method 3: addToSet() - Adds if not already present (no duplicates)
// Syntax: parentDoc.subdocArray.addToSet(subdoc)
// Parameters: subdoc - Object | Document - Sub-document to add
// Return Type: Array<Document> - Updated sub-document array

async function addCommentUnique() {
  const user = await User.findOne({ email: 'john@example.com' });
  
  user.comments.addToSet({
    text: 'Unique comment',
    author: 'Charlie'
  });
  
  await user.save();
  console.log(user.comments);
}

// Method 4: create() - Creates sub-document without adding to array
// Syntax: parentDoc.subdocArray.create(subdoc)
// Parameters: subdoc - Object - Sub-document data
// Return Type: Document - Created sub-document (not saved)

async function createSubDocument() {
  const user = await User.findOne({ email: 'john@example.com' });
  
  const newComment = user.comments.create({
    text: 'Created comment',
    author: 'David'
  });
  
  // Must manually push and save
  user.comments.push(newComment);
  await user.save();
  console.log(newComment);
}

// CREATE single embedded sub-document
async function createSingleSubDoc() {
  const user = await User.findOne({ email: 'john@example.com' });
  
  user.address = {
    street: '123 Main St',
    city: 'New York',
    zipCode: '10001'
  };
  
  await user.save();
  console.log(user.address);
}


// ========================================
// 2. READ Sub-Documents
// ========================================

// Method 1: id() - Find sub-document by _id
// Syntax: parentDoc.subdocArray.id(id)
// Parameters: id - String | ObjectId - Sub-document ID
// Return Type: Document | null

async function findSubDocumentById() {
  const user = await User.findOne({ email: 'john@example.com' });
  
  const commentId = user.comments[0]._id;
  const comment = user.comments.id(commentId);
  
  console.log(comment); // Returns matching sub-document or null
}

// Method 2: Direct array access
async function accessSubDocuments() {
  const user = await User.findOne({ email: 'john@example.com' });
  
  // Access by index
  const firstComment = user.comments[0];
  console.log(firstComment);
  
  // Access single embedded sub-doc
  console.log(user.address.city);
  
  // Iterate through array
  user.comments.forEach(comment => {
    console.log(comment.text);
  });
}

// Method 3: Array methods (find, filter, etc.)
async function filterSubDocuments() {
  const user = await User.findOne({ email: 'john@example.com' });
  
  // Using find
  const comment = user.comments.find(c => c.author === 'Alice');
  console.log(comment);
  
  // Using filter
  const aliceComments = user.comments.filter(c => c.author === 'Alice');
  console.log(aliceComments);
}

// Method 4: Query with dot notation (for finding parent docs)
async function querySubDocFields() {
  // Find users with specific sub-document values
  const users = await User.find({ 'address.city': 'New York' });
  console.log(users);
  
  // Find users with sub-doc in array matching criteria
  const usersWithComment = await User.find({ 
    'comments.author': 'Alice' 
  });
  console.log(usersWithComment);
}


// ========================================
// 3. UPDATE Sub-Documents
// ========================================

// Method 1: Direct assignment and save
// Syntax: subdoc.field = value; await parent.save()
// Parameters: N/A - Direct property modification
// Return Type: Promise<Document> - Saved parent document

async function updateSubDocDirect() {
  const user = await User.findOne({ email: 'john@example.com' });
  
  // Update single embedded sub-doc
  user.address.city = 'Los Angeles';
  user.address.zipCode = '90001';
  
  // Update array sub-doc
  const comment = user.comments.id(someCommentId);
  if (comment) {
    comment.text = 'Updated comment text';
  }
  
  await user.save();
  console.log(user);
}

// Method 2: set() - Sets sub-document properties
// Syntax: subdoc.set(updates)
// Parameters: updates - Object - Properties to update
// Return Type: Document - The sub-document

async function updateWithSet() {
  const user = await User.findOne({ email: 'john@example.com' });
  
  user.address.set({
    city: 'Chicago',
    zipCode: '60601'
  });
  
  await user.save();
  console.log(user.address);
}

// Method 3: Update using findOneAndUpdate with $ positional operator
// Syntax: Model.findOneAndUpdate(filter, update, options)
// Parameters: filter - Object, update - Object with $ operators, options - Object
// Return Type: Promise<Document | null>

async function updateSubDocWithQuery() {
  // Update first matching sub-document in array
  const user = await User.findOneAndUpdate(
    { 
      email: 'john@example.com',
      'comments.author': 'Alice'
    },
    {
      $set: { 'comments.$.text': 'Updated via query' }
    },
    { new: true }
  );
  
  console.log(user);
}

// Method 4: Update with arrayFilters (update multiple matching)
// Syntax: Model.findOneAndUpdate(filter, update, { arrayFilters: [...] })
// Parameters: arrayFilters - Array of filter conditions
// Return Type: Promise<Document | null>

async function updateMultipleSubDocs() {
  const user = await User.findOneAndUpdate(
    { email: 'john@example.com' },
    {
      $set: { 'comments.$[elem].text': 'Bulk updated' }
    },
    {
      arrayFilters: [{ 'elem.author': 'Alice' }],
      new: true
    }
  );
  
  console.log(user);
}

// Method 5: Update single embedded sub-doc with findOneAndUpdate
async function updateEmbeddedSubDoc() {
  const user = await User.findOneAndUpdate(
    { email: 'john@example.com' },
    {
      $set: {
        'address.city': 'Boston',
        'address.zipCode': '02101'
      }
    },
    { new: true }
  );
  
  console.log(user.address);
}


// ========================================
// 4. DELETE Sub-Documents
// ========================================

// Method 1: pull() - Removes sub-documents matching condition
// Syntax: parentDoc.subdocArray.pull(condition)
// Parameters: condition - Object | ObjectId - Match criteria or ID
// Return Type: Array<Document> - Updated array

async function removeWithPull() {
  const user = await User.findOne({ email: 'john@example.com' });
  
  // Remove by ID
  user.comments.pull(someCommentId);
  
  // Remove by condition
  user.comments.pull({ author: 'Alice' });
  
  await user.save();
  console.log(user.comments);
}

// Method 2: remove() or deleteOne() - Removes specific sub-document
// Syntax: subdoc.remove() or subdoc.deleteOne()
// Parameters: None
// Return Type: Document - The removed sub-document

async function removeSubDocWithRemove() {
  const user = await User.findOne({ email: 'john@example.com' });
  
  const comment = user.comments.id(someCommentId);
  if (comment) {
    comment.remove();  // or comment.deleteOne()
    await user.save();
  }
  
  console.log(user.comments);
}

// Method 3: splice() - Removes by index
// Syntax: parentDoc.subdocArray.splice(index, count)
// Parameters: index - Number, count - Number (how many to remove)
// Return Type: Array<Document> - Removed sub-documents

async function removeWithSplice() {
  const user = await User.findOne({ email: 'john@example.com' });
  
  // Remove first comment
  user.comments.splice(0, 1);
  
  await user.save();
  console.log(user.comments);
}

// Method 4: Using findOneAndUpdate with $pull
// Syntax: Model.findOneAndUpdate(filter, { $pull: {...} }, options)
// Parameters: filter - Object, update with $pull operator, options - Object
// Return Type: Promise<Document | null>

async function removeWithQuery() {
  const user = await User.findOneAndUpdate(
    { email: 'john@example.com' },
    {
      $pull: { 
        comments: { author: 'Alice' }
      }
    },
    { new: true }
  );
  
  console.log(user.comments);
}

// Method 5: pop() - Removes first or last sub-document
// Syntax: Model.findOneAndUpdate(filter, { $pop: {...} })
// Parameters: 1 for last, -1 for first
// Return Type: Promise<Document | null>

async function removeWithPop() {
  // Remove last comment
  const user = await User.findOneAndUpdate(
    { email: 'john@example.com' },
    { $pop: { comments: 1 } },  // 1 = last, -1 = first
    { new: true }
  );
  
  console.log(user.comments);
}

// Method 6: Remove single embedded sub-document
async function removeSingleSubDoc() {
  const user = await User.findOne({ email: 'john@example.com' });
  
  user.address = undefined;  // or null
  
  await user.save();
  console.log(user.address);  // undefined
}

// Method 7: Using $unset to remove single embedded sub-doc
async function removeEmbeddedWithUnset() {
  const user = await User.findOneAndUpdate(
    { email: 'john@example.com' },
    { $unset: { address: '' } },
    { new: true }
  );
  
  console.log(user.address);  // undefined
}


// ========================================
// COMPARISON TABLE
// ========================================

/*
┌─────────────────────┬──────────────────┬─────────────────────────┬──────────────┐
│ Operation           │ Method           │ Use Case                │ Needs save() │
├─────────────────────┼──────────────────┼─────────────────────────┼──────────────┤
│ CREATE              │ push()           │ Add to end              │ Yes          │
│                     │ unshift()        │ Add to beginning        │ Yes          │
│                     │ addToSet()       │ Add unique only         │ Yes          │
│                     │ create()         │ Create without adding   │ Yes          │
├─────────────────────┼──────────────────┼─────────────────────────┼──────────────┤
│ READ                │ id()             │ Find by _id             │ No           │
│                     │ Array methods    │ Filter/find/map         │ No           │
│                     │ Dot notation     │ Query parent docs       │ No           │
├─────────────────────┼──────────────────┼─────────────────────────┼──────────────┤
│ UPDATE              │ Direct assign    │ Simple updates          │ Yes          │
│                     │ set()            │ Multiple properties     │ Yes          │
│                     │ $ positional     │ Update first match      │ No           │
│                     │ arrayFilters     │ Update multiple         │ No           │
├─────────────────────┼──────────────────┼─────────────────────────┼──────────────┤
│ DELETE              │ pull()           │ Remove by condition     │ Yes          │
│                     │ remove()         │ Remove specific doc     │ Yes          │
│                     │ splice()         │ Remove by index         │ Yes          │
│                     │ $pull            │ Remove via query        │ No           │
│                     │ $pop             │ Remove first/last       │ No           │
└─────────────────────┴──────────────────┴─────────────────────────┴──────────────┘

Key Notes:
- Methods on parent document require save() to persist changes
- Query-based methods (findOneAndUpdate) don't require separate save()
- Sub-documents have their own _id by default
- Always validate sub-document exists before operations to avoid errors
*/