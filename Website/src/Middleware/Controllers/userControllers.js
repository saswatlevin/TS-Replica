const createRandomString = require('../createRandomString');
const User = require('../Models/User');
const argon2 = require('argon2');
const _ = require('lodash');
const getCurrentDateTime = require('../getCurrentDateTime');

// CREATES A NEW USER
const registerUser = async (req, res, next) => {
    
    console.log("In registerUser");
    //console.log("req.body ", req.body);
    // All data is provided in the request body.
    // Since the user document (request body) is manually generated, 
    // so we don't need to use createDocument yet.

    // Get a deep copy of the request body object
    var requestBodyObjectCopy = JSON.parse(JSON.stringify(req.body));
    
    // Set the user_id for this user document
    requestBodyObjectCopy['user_id'] = createRandomString(6);

    // Set the docType for this user document
    requestBodyObjectCopy['docType'] = 'USER';

    // Get the current date-time
    const dateCreatedAt = getCurrentDateTime();

    // Set the date_created_at for this user document
    requestBodyObjectCopy['date_created_at'] = dateCreatedAt;
    
    // Hash the user's password using argon2id. It is salted by default.
    const passwordHash = await argon2.hash(requestBodyObjectCopy['password']);
    
    // Store the hashed password in the respective user document.
    requestBodyObjectCopy['password'] = passwordHash;

    //console.log("Request Body Object Copy after setting user_id ", requestBodyObjectCopy);
    
    // Create the new User in the database
    const result = await User.create(requestBodyObjectCopy);

    console.log("create operation result ", result);

    res.json({
       result: result
    });

    console.log("After create operation");
    
}

// UPDATES ANY FIELD OF THE USER DOCUMENT EXCEPT ShippingAddresses, CartItems, docType, password AND user_id
const updateUser = async(req, res, next) => {
    
    console.log("In updateUser");

    // Making a deep copy of the request body isn't necessary since 
    // the schemaValidator already returns a deep copy of the validated request body
    const requestBody = req.body;  
    console.log("requestBody ", requestBody);

    // The filter will always be the user_id.
    var filter = {};
    filter['user_id'] = requestBody['user_id'];

    console.log("filter in updateUser ", filter);

    // Remove the user_id from the request body to create the update object.
    const updateObject = _.omit(requestBody, 'user_id');

    console.log("updateObject in updateUser ", updateObject);

    const updateResult = await User.findOneAndUpdate(filter, updateObject, {new: true}, {runValidators: true});

    console.log("updateResult ", updateResult);

    res.status(201).json(updateResult);

    console.log("After update operation");
    

}

// UPDATES A USER'S PASSWORD
const updateUserPassword = async(req, res, next) => {
    
    console.log("In updateUserPassword ");

    // Deep copy no longer needed since we already have one from the schema validator
    const requestBody = req.body
    console.log("requestBody ", requestBody);


    // Create the filter used to select the User document for the update
    var filter = {};
    filter['user_id'] = requestBody['user_id'];
    console.log("filter: ", filter);

    // Get the updated password
    const updatedPassword = requestBody["password"];
    console.log("updatedPassword ", updatedPassword);
    
    // Replace the password by its equivalent argon2 hash. The hash is salted by default
    const updatedPasswordHash = await argon2.hash(updatedPassword);
    console.log("updatedPasswordHash ", updatedPasswordHash);

    // Create the hashed password's key-value pair
    const updateObject = {"password": updatedPasswordHash};
    console.log("updateObject ", updateObject);

    // Update the password in the corresponding user document
    const updateResult = await User.findOneAndUpdate(filter, updateObject, {new: true}, {runValidators: true});

    console.log("updatePassword result ", updateResult);

    res.status(201).json(updateResult);

    console.log("After password update operation");
};

// GETS ONE USER
const getUserById = async(req, res, next) => {
    console.log("In getUserById ");
    
    const requestBody = req.body;

    const result = await User.findOne(requestBody);
    
    console.log("findOne operation result ", result);

    res.status(201).json(result);

    console.log("After findOne operation ");
} 

const searchUsersByName = async (req, res, next) => {
    console.log("In searchUser ");
    const requestBody = req.body;

    const result = await User.find(requestBody);
    
    console.log("find operation result ", result);

    res.status(201).json(result);
    
    console.log("After find operation ");

}

/* const objectIdTest = async (req, res, next) => {

    
    const requestBody = req.body;
    const result = await User.findOne(requestBody);
    console.log(result['_id']);
    validateRequest(objectIdSchema, {"_id": new mongoose.Types.ObjectId('683703f4cb260c2c22ee0ce')});

    res.send(result);
} */

module.exports = { 
    registerUser,
    updateUser,
    updateUserPassword,
    getUserById,
    searchUsersByName
};