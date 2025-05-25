const createRandomString = require('../createRandomString');
const User = require('../Models/User');

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
    
    
    console.log("Request Body Object Copy after setting user_id ", requestBodyObjectCopy);
    
    const result = await User.create(requestBodyObjectCopy);

    res.status(201).json(result);

}

module.exports = { 
    createUser
};