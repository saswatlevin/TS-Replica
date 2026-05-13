const createRandomString = require('../createRandomString');
const User = require('../Models/User');
const argon2 = require('argon2');
const _ = require('lodash');
const getCurrentDateTime = require('../getCurrentDateTime');
const asyncErrorHandler = require('../ErrorHandlers/asyncErrorHandler');
const { checkIsEmptyObject, checkUserExists, checkUserValueExists, checkUserPasswordValueExists, checkDuplicateUserEmailExists, checkDuplicateUserPhoneNumberExists } = require('./SupportFunctions/shippingAddressSupportFunctions');
const EmptyRequestBodyError = require('../OperationalErrors/EmptyRequestBodyError');
const ResourceNotFoundError = require('../OperationalErrors/ResourceNotFoundError');
const RedundantUpdateError = require('../OperationalErrors/RedundantUpdateError');
const DuplicateDocumentError = require('../OperationalErrors/DuplicateDocumentError');

// CREATES A NEW USER
const registerUser = asyncErrorHandler( async (req, res, next) => {

    console.log("In registerUser");

    const email = req.body.email;
    const phone_number = req.body.phone_number;

    console.log("Checking if the request body is empty");
    if(checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError("Could not create a new user since the request body is empty");
        throw empty_request_body_error;
    }

    console.log("Checking if a user with the same email already exists or not");
    if (await checkDuplicateUserEmailExists(req) === true) {
        const duplicate_document_error = new DuplicateDocumentError(`Cannot create this user as a user with this email: ${email} already exists.`);
        throw duplicate_document_error;
    }

    console.log("Checking if a user with the same phone_number already exists or not");
    if (await checkDuplicateUserPhoneNumberExists(req) === true) {
        const duplicate_document_error = new DuplicateDocumentError(`Cannot create this user as a user with this phone number: ${phone_number} already exists.`);
        throw duplicate_document_error;
    }

    const request_body_deep_clone = JSON.parse(JSON.stringify(req.body));
    console.log("request_body_deep_clone ", request_body_deep_clone);

    const user_id = createRandomString(6);
    console.log("Generated user_id ", user_id);

    const doc_type = 'USER';

    // Get the current date-time
    const date_created_at = getCurrentDateTime();
    console.log("date_created_at ", date_created_at);
    
    // Hash the user's password using argon2id. It is salted by default.
    const password_hash = await argon2.hash(request_body_deep_clone['password']);
    console.log("password_hash ", password_hash);

    // Replace the password in the request body deep clone with the hashed password
    request_body_deep_clone['password'] = password_hash;

    const user_object = {
        user_id: user_id,
        docType: doc_type,
        date_created_at: date_created_at,
        ...request_body_deep_clone,
        total_item_total: 0,
        total_discount_amount: 0,
        total_discounted_total: 0,
        total_discount_percentage: 0,
        total_payable_amount: 0
    };

    console.log("user_object after adding all generated data ", user_object);

    // Create the new User in the database
    const result = await User.create(user_object);

    console.log("create operation result ", result);

    res.status(201).json({result: result});

    console.log("===END OF registerUser===");

});

// UPDATES ANY FIELD OF THE USER DOCUMENT EXCEPT ShippingAddresses, CartItems, docType, password AND user_id
const updateUser = asyncErrorHandler( async(req, res, next) => {

    console.log("In updateUser");

    const user_id = req.params.user_id;
    console.log("user_id ", user_id);

    console.log("Checking if the request_body is empty");
    if(checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError(`Could not update the user with ${user_id} since the request body is empty.`);
        throw empty_request_body_error;
    }

    console.log("Checking if the user exists");
    if (await checkUserExists(req) === false) {
        const user_not_found_error = new ResourceNotFoundError(`Could not update the user with user_id ${user_id} since that user does not exist.`);
        throw user_not_found_error;
    }

    console.log("Checking if the user already contains updated values");
    if (await checkUserValueExists(req) === true) {
        const redundant_update_error = new RedundantUpdateError(`Cannot update the user with user_id ${user_id} since it already contains the updated values`);
        throw redundant_update_error;
    }


    const request_body_deep_clone = JSON.parse(JSON.stringify(req.body));
    console.log("request_body_deep_clone ", request_body_deep_clone);

    var filter = {user_id: user_id};

    console.log("filter ", filter);

    //const update_object = _.omit(request_body_deep_clone, 'user_id');
    //console.log("update_object in updateUser ", update_object);

    const result = await User.findOneAndUpdate
        (
            filter, 
            request_body_deep_clone, 
            { new: true }, 
            { runValidators: true }
        ).lean();
    
    console.log("result ", result);

    res.status(200).json(result);

    console.log("===END OF updateUser===");


});

// UPDATES A USER'S PASSWORD
const updateUserPassword = asyncErrorHandler( async(req, res, next) => {

    console.log("In updateUserPassword ");
    
    const user_id = req.params.user_id;

    console.log("Checking if the request_body is empty");
    if (checkIsEmptyObject(req) === true){
        const empty_request_body_error = new EmptyRequestBodyError(`Could not update the password of the user with ${user_id} since the request body is empty.`);
        throw empty_request_body_error;
    }

    console.log("Checking if the user exists or not");
    if(await checkUserExists(req) === false) {
        const user_not_found_error = new ResourceNotFoundError(`Could not update the password of the user with ${user_id} since it does not exist`);
        throw user_not_found_error;
    }


    console.log("Checking if the user already contains the updated password");
    if (await checkUserPasswordValueExists(req) === true) {
        const redundant_update_error = new RedundantUpdateError(`Cannot update the password of the user with ${user_id} since it has already been updated.`);
        throw redundant_update_error;
    }

    const request_body_deep_clone = JSON.parse(JSON.stringify(req.body));
    console.log("request_body_deep_clone ", request_body_deep_clone);


    var filter = {user_id: user_id};
    console.log("filter ", filter);

    const updated_password = request_body_deep_clone["password"];
    console.log("updated_password ", updated_password);


    const updated_password_hash = await argon2.hash(updated_password);
    console.log("updated_password_hash ", updated_password_hash);


    const update_object = { "password": updated_password_hash };
    console.log("update_object ", update_object);


    const result = await User.findOneAndUpdate(filter, update_object, { new: true }, { runValidators: true }).lean();

    console.log("result ", result);

    res.status(200).json(result);

    console.log("===END OF updateUserPassword===");
});

// GETS ONE USER
const getUserById = asyncErrorHandler( async(req, res, next) => {
    console.log("In getUserById ");

    console.log("Checking if the request body is empty or not");
    if(checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError("Could not find the user since the request body is empty");
        throw empty_request_body_error;
    }

    const request_body_deep_clone = JSON.parse(JSON.stringify(req.body));
    console.log("request_body_deep_clone ", request_body_deep_clone);

    const result = await User.findOne(request_body_deep_clone).lean();
    console.log("result ", result);

    res.status(201).json(result);

    console.log("===END OF getUserById===");
});

const searchUsersByName = asyncErrorHandler( async(req, res, next) => {
    console.log("In searchUser ");

    console.log("Checking if the request body is empty ot not");
    if(checkIsEmptyObject(req) === true) {
        const empty_request_body_error = new EmptyRequestBodyError("Could not find the user since the request body is empty");
        throw empty_request_body_error;
    }

    const request_body_deep_clone = JSON.parse(JSON.stringify(req.body));
    console.log("request_body_deep_clone ", request_body_deep_clone);

    const result = await User.find(request_body_deep_clone).lean();
    console.log("result ", result);

    res.status(201).json(result);

    console.log("===END OF searchUsersByName===");

});

module.exports = {
    registerUser,
    updateUser,
    updateUserPassword,
    getUserById,
    searchUsersByName
};