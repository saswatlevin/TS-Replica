const { updateUserPassword } = require('../userControllers');
const User = require('../../Models/User');
const _ = require('lodash');
const argon2 = require('argon2');

// Mock all external dependencies
jest.mock('../../Models/User');
jest.mock('lodash');
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
        
        // MOCK LODASH OMIT TO RETURN THE UPDATE OBJECT (PASSWORD ONLY) WITHOUT USER_ID
        _.omit.mockReturnValue(expectedUpdateObject);

        // MOCK THE UPDATED PASSWORD'S HASH
        argon2.hash.mockResolvedValue(updatedPasswordHash);

        // MOCK THE DATABASE OPERATION TO RETURN THE UPDATED USER
        User.findOneAndUpdate.mockResolvedValue(mockUpdatedUser);

        // Act - Call the updateUser function
        await updateUserPassword(req, res, next);

        // Assert - Verify the function was called correctly
        expect(User.findOneAndUpdate).toHaveBeenCalledTimes(1);
        expect(User.findOneAndUpdate).toHaveBeenCalledWith(
            filter, 
            updateObjectWithHashedPassword, 
            {new: true}, 
            {runValidators: true}
        );
        
        // Verify the response was sent correctly
        expect(res.json).toHaveBeenCalledWith(mockUpdatedUser);
        expect(res.status).toHaveBeenCalledWith(201);
    })
});

