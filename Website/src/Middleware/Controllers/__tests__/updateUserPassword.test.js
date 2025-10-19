const { updateUserPassword } = require('../userControllers');
const User = require('../../Models/User');
const _ = require('lodash');
const argon2 = require('argon2');

// Mock all external dependencies
jest.mock('../../Models/User');
jest.mock('argon2');

describe('updateUserPassword - Core Functionality Tests', () => {
    test('Should successfully insert the updated user\'s password into the respective user document in the database via User.findOneAndUpdate()', async () => {
       
        // Arrange - Mock all dependencies

        // CREATE A REQUEST BODY WITH THE UPDATED USER DATA
        const req = {
            body: {
                user_id: '7ycthivdrqvl',
                password: 'Abc@12345600',
            }
        };

        const filter = { user_id: req.body.user_id };

        // CREATE THE EXPECTED UPDATE OBJECT (without user_id)
        const expectedUpdateObject = {
            password: 'Abc@12345600'
        };

        // CREATE THE UPDATE OBJECT WITH THE HASHED PASSWORD
        const updateObjectWithHashedPassword = {
            password: '$argon2id$hash'
        };

        // UPDATED PASSWORD HASH
        const updatedPasswordHash = "$argon2id$hash";

        // MOCK THE UPDATED USER DOCUMENT THAT WILL BE RETURNED
        const mockUpdatedUser = {
            _id: 'mongo_id',
            user_id: '7ycthivdrqvl',
            docType: 'USER',
            date_created_at: '2025-01-01T00:00:00Z',
            email: 'abc002@server.com',
            password: '$argon2id$hash',
            phone_number: '91123456789',
            first_name: 'ABC2',
            last_name: 'CBA2',
            user_role: 'admin',
            upper_size_number: 44,
            upper_size_letter: 'XL',
            others_size_letter: 'XL',
            email_comms_type: 'Stock notifications only',
            sms_comms: false,
            ShippingAddresses: [],
            CartItems: [],
            __v: 0
        };

        // THE RESPONSE BODY IS CREATED AS A JSON OBJECT WITH A JEST FUNCTION
        const res = { 
            json: jest.fn(),
            status: jest.fn().mockReturnThis()
        };

        // THE NEXT FUNCTION IS CREATED AS A JEST FUNCTION
        const next = jest.fn();

        // MOCK THE UPDATED PASSWORD'S HASH
        argon2.hash.mockResolvedValue(updatedPasswordHash);

        // MOCK THE DATABASE OPERATION TO RETURN THE UPDATED USER
        User.findOneAndUpdate.mockResolvedValue(mockUpdatedUser);

        // Act
        await updateUserPassword(req, res, next);

        // Assert
        // VERIFY THAT THE DATABASE OPERATION WAS CALLED CORRECTLY
        expect(User.findOneAndUpdate).toHaveBeenCalledTimes(1);
        expect(User.findOneAndUpdate).toHaveBeenCalledWith(
            filter, 
            updateObjectWithHashedPassword, 
            {new: true}, 
            {runValidators: true}
        );
        
        // VERIFY THAT THE RESPONSE WAS SENT CORRECTLY
        expect(res.json).toHaveBeenCalledWith(mockUpdatedUser);
        expect(res.status).toHaveBeenCalledWith(201);
    })
});

describe('updateUserPassword - Data Transformation Tests', () => {
    let req, res, next, mockUpdatedUser, expectedUpdateObject, updateObjectWithHashedPassword, filter;

    beforeEach(() => {
        // Reset mocks before each test
        jest.clearAllMocks();

        // Setup common test data
        req = {
            body: {
                user_id: '7ycthivdrqvl',
                password: 'Abc@12345600'
            }
        };

        res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis()
        };

        next = jest.fn();

        mockUpdatedUser = {
            _id: 'mongo_id',
            user_id: '7ycthivdrqvl',
            docType: 'USER',
            date_created_at: '2025-01-01T00:00:00Z',
            email: 'abc001@server.com',
            password: '$argon2id$hash',
            phone_number: '91123456789',
            first_name: 'ABC',
            last_name: 'CBA',
            user_role: 'user',
            upper_size_number: 44,
            upper_size_letter: 'XL',
            others_size_letter: 'XL',
            email_comms_type: 'One Weekly Recap',
            sms_comms: false,
            ShippingAddresses: [],
            CartItems: [],
            __v: 0
        };

        expectedUpdateObject = {
            password: 'Abc@12345600'
        };

        updateObjectWithHashedPassword = {
            password: '$argon2id$hash'
        };
        
        filter = { user_id: req.body.user_id };

    });

    test('Should generate the filter with an object containing user_id', async () => {
        
        // Arrange
        User.findOneAndUpdate.mockResolvedValue(mockUpdatedUser);

        // Act
        await updateUserPassword(req, res, next)

        // Assert
        expect(User.findOneAndUpdate).toHaveBeenCalledTimes(1);
        expect(User.findOneAndUpdate).toHaveBeenCalledWith(
            expect.objectContaining(filter),
            expect.objectContaining(updateObjectWithHashedPassword), // updateObject
            expect.objectContaining({new: true}), // Return the updated document instead of the original one
            expect.objectContaining({runValidators: true}) // Run the validators on the update object
        );

    });

    test('Should create the password update object by removing the user_id from the request body', async () => {
         // Arrange
         // NOTHING NEEDS TO BE ARRANGED HERE

         // Act
         await updateUserPassword(req, res, next);
 
         // Assert
         expect(User.findOneAndUpdate).toHaveBeenCalledTimes(1);
         expect(User.findOneAndUpdate).toHaveBeenCalledWith(
            expect.objectContaining(filter),
            expect.objectContaining(updateObjectWithHashedPassword), // The update object with the hashed password.
            expect.objectContaining({new: true}), // Return the updated document instead of the original one
            expect.objectContaining({runValidators: true}) // Run the validators on the update object
         );
    }); 

    test('Should check if the updated password has been successfully hashed', async () => {
        // Arrange
        argon2.hash.mockResolvedValue(updateObjectWithHashedPassword);

        // Act
        await updateUserPassword(req, res, next);

        // Assert
        expect(argon2.hash).toHaveBeenCalledTimes(1);
        expect(argon2.hash).toHaveBeenCalledWith(req.body.password);
    });
    
    test('Should check whether the updated password is successfully sent as a response with status code 201', async () => {
        // Arrange
        // NOTHING NEEDS TO BE ARRANGED HERE

        // Act
        await updateUserPassword(req, res, next);

        // Assert
        // VERIFY THAT THE RESPONSE WAS SENT CORRECTLY
        expect(res.json).toHaveBeenCalledWith(mockUpdatedUser);
        expect(res.status).toHaveBeenCalledWith(201);

    });
});