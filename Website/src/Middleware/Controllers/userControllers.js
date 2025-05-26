const createRandomString = require('../createRandomString');
const User = require('../Models/User');
var passwordValidator = require('password-validator');
const passwordSchema = require('../Security/PasswordSchemas/passwordSchema');
const argon2 = require('argon2');

// const userObject = require('../preComputedObjects');
// const createDocument = require('../createDocument');
// const mongoose = require('mongoose');

const createUser = async (req, res, next) => {
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

    res.status(201).json(result);

}

module.exports = { 
    createUser
};