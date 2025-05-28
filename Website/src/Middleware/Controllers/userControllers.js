const createRandomString = require('../createRandomString');
const User = require('../Models/User');
var passwordValidator = require('password-validator');
const passwordSchema = require('../Security/PasswordSchemas/passwordSchema');
const argon2 = require('argon2');
const listOfKeys = require('../listOfKeys');
const checkForbiddenKeys = require('../checkForbiddenKeys');
const filterKeys = require('../filterKeys');
const pruneObject = require('../pruneObject');


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
    if (passwordSchema.validate(requestBodyObjectCopy['password']) === false) {
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

module.exports = { 
    registerUser,
    updateUser
};