const createRandomString = require('../createRandomString');
const User = require('../Models/User');
const argon2 = require('argon2');
const listOfKeys = require('../listOfKeys');
const checkForbiddenKeys = require('../checkForbiddenKeys');
const filterKeys = require('../filterKeys');
const pruneObject = require('../pruneObject');
const validatePassword  = require('../Security/validatePassword');


// CREATES A NEW USER
const registerUser = async (req, res, next) => {
    // All data is provided in the request body.
    // Since the user document (request body) is manually generated, 
    // so we don't need to use createDocument yet.

    // Get a deep copy of the request body object
    var requestBodyObjectCopy = JSON.parse(JSON.stringify(req.body));
    
    // Set the user_id for this user document
    requestBodyObjectCopy['user_id'] = createRandomString(6);
    
    // Validate the user's password
    if (validatePassword(requestBodyObjectCopy['password']) === false) {
        res.status(400).json("Could not create document due to invalid password");
        return;
    } 
    
    // Hash the user's password using argon2id. It is salted by default.
    const passwordHash = await argon2.hash(requestBodyObjectCopy['password']);
    
    // Store the hashed password in the respective user document.
    requestBodyObjectCopy['password'] = passwordHash;

    //console.log("Request Body Object Copy after setting user_id ", requestBodyObjectCopy);
    
    // Create the new User in the database
    const result = await User.create(requestBodyObjectCopy);

    console.log("User created successfully");

    res.status(201).json(result);

}

// UPDATES ANY FIELD OF THE USER DOCUMENT EXCEPT ShippingAddresses, CartItems, docType, password AND user_id
const updateUser = async(req, res, next) => {
    
    const requestBodyCopy = JSON.parse(JSON.stringify(req.body)); 
    
    const requestBodyKeys = Object.keys(requestBodyCopy);
    
    console.log("requestBodyKeys ", requestBodyKeys);
    
    var filter = {};

    const forbiddenKey = checkForbiddenKeys("updateUser", requestBodyKeys);
    
    if (forbiddenKey) {
        res.status(400).json("updateUser can't update the " + forbiddenKey + " field.");
        return;
    }

    var filterKey = filterKeys.checkFilter("updateUser", requestBodyKeys);
    

    if (!filterKey) {
        res.status(400).json("The updateUser API cannot find the requested User document to be updated using the " + filterKey + " field. Please provide the email or user_id fields' values.");
        return;
    }
   
    const updateObject = pruneObject(requestBodyCopy, [filterKey]);     
    
    filter[filterKey] = requestBodyCopy[filterKey];
    console.log("requestBodyCopy ", requestBodyCopy);
    console.log("filterKey ", filterKey);
    console.log("updateObject ", updateObject);
    console.log("filter ", filter);
    

    const updateResult = await User.findOneAndUpdate(filter, updateObject, {new: true}, {runValidators: true});

    // console.log("updateResult ", updateResult);

    res.status(201).json(updateResult);

    console.log("After update operation");
    

}

const updateUserPassword = async(req, res, next) => {
    
    console.log("In updateUserPassword ");

    // Create a deep copy of the request body
    const requestBodyCopy = JSON.parse(JSON.stringify(req.body));
    console.log("requestBodyCopy ", requestBodyCopy);

    // Get all the keys
    const requestBodyKeys = Object.keys(requestBodyCopy);
    console.log("requestBodyKeys ", requestBodyKeys);
    
    // Get the filter key (in this case, user_id or password)
    const filterKey = filterKeys.checkFilter("updateUserPassword", requestBodyKeys);
    console.log("filterKey ", filterKey);

    if (!filterKey) {
        res.status(400).json("The updateUser API cannot find the requested User document to be updated using the " + filterKey + " field. Please provide the email or user_id fields' values.");
        return;
    }

    // Create the filter used to select the User document for the update
    var filter = {};
    filter[filterKey] = requestBodyCopy[filterKey];
    console.log("filter: ", filter);

    // Get the updated password
    const updatedPassword = requestBodyCopy["password"];
    console.log("updatedPassword ", updatedPassword);

    // Validate the updated password
    if (validatePassword(updatedPassword) === false) {
        res.status(400).json("Could not create document due to invalid password");
        return;
    }
    
    // Replace the password by its equivalent argon2 hash. The hash is salted by default
    const updatedPasswordHash = await argon2.hash(updatedPassword);
    console.log("updatedPasswordHash ", updatedPasswordHash);

    // Create the hashed password's key-value pair
    const updateObject = {"password": updatedPasswordHash};
    console.log("updateObject ", updateObject);

    // Update the password in the corresponding user document
    const updateResult = await User.findOneAndUpdate(filter, updateObject, {new: true}, {runValidators: true});

    res.status(201).json(updateResult);

    console.log("After password update operation");


}

module.exports = { 
    registerUser,
    updateUser,
    updateUserPassword
};