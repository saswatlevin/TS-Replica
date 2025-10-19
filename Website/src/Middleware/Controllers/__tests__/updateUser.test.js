const { updateUser } = require('../userControllers');
const User = require('../../Models/User');
const _ = require('lodash');

// Mock all external dependencies
jest.mock('../../Models/User');
jest.mock('lodash');

describe('updateUser - Core Functionality Tests', () => {
    test('Should successfully insert the updated user document into the database via User.findOneAndUpdate()', async () => {
       
        // Arrange - Mock all dependencies

        // CREATE A REQUEST BODY WITH THE UPDATED USER DATA
        const req = {
            body: {
                user_id: '7ycthivdrqvl',
                email: 'abc002@server.com',
                phone_number: '91123456789',
                first_name: 'ABC2',
                last_name: 'CBA2',
                user_role: 'admin',
                upper_size_number: 44,
                upper_size_letter: 'XL',
                others_size_letter: 'XL',
                email_comms_type: 'Stock notifications only',
                sms_comms: false,
            }
        };

        const filter = { user_id: req.body.user_id };

        // CREATE THE EXPECTED UPDATE OBJECT (without user_id)
        const expectedUpdateObject = {
            email: 'abc002@server.com',
            phone_number: '91123456789',
            first_name: 'ABC2',
            last_name: 'CBA2',
            user_role: 'admin',
            upper_size_number: 44,
            upper_size_letter: 'XL',
            others_size_letter: 'XL',
            email_comms_type: 'Stock notifications only',
            sms_comms: false,
        };

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
        
        // MOCK LODASH OMIT TO RETURN THE UPDATE OBJECT WITHOUT USER_ID
        _.omit.mockReturnValue(expectedUpdateObject);

        // MOCK THE DATABASE OPERATION TO RETURN THE UPDATED USER
        User.findOneAndUpdate.mockResolvedValue(mockUpdatedUser);

        // Act - Call the updateUser function
        await updateUser(req, res, next);

        // Assert - Verify the function was called correctly
        expect(User.findOneAndUpdate).toHaveBeenCalledTimes(1);
        expect(User.findOneAndUpdate).toHaveBeenCalledWith(
            filter, 
            expectedUpdateObject, 
            {new: true}, 
            {runValidators: true}
        );
        
        // Verify the response was sent correctly
        expect(res.json).toHaveBeenCalledWith(mockUpdatedUser);
        expect(res.status).toHaveBeenCalledWith(201);
    })
});

describe('updateUser - Data Transformation Tests', () => {
    let req, res, next, mockUpdatedUser, expectedUpdateObject, filter;

    beforeEach(() => {
        // Reset mocks before each test
        jest.clearAllMocks();

        // Setup common test data
        req = {
            body: {
                user_id: '7ycthivdrqvl',
                email: 'abc001@server.com',
                phone_number: '91123456789',
                first_name: 'ABC',
                last_name: 'CBA',
                user_role: 'user',
                upper_size_number: 44,
                upper_size_letter: 'XL',
                others_size_letter: 'XL',
                email_comms_type: 'One Weekly Recap',
                sms_comms: true
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
            email: 'abc002@server.com',
            phone_number: '91123456789',
            first_name: 'ABC2',
            last_name: 'CBA2',
            user_role: 'admin',
            upper_size_number: 44,
            upper_size_letter: 'XL',
            others_size_letter: 'XL',
            email_comms_type: 'Stock notifications only',
            sms_comms: false
        };
        
        filter = { user_id: req.body.user_id };

    });

    test('should generate the filter with an object containing user_id', async () => {
        
        // Arrange
        User.findOneAndUpdate.mockResolvedValue(mockUpdatedUser);

        // Act
        await updateUser(req, res, next)

        // Assert

        expect(User.findOneAndUpdate).toHaveBeenCalledTimes(1);
        
        expect(User.findOneAndUpdate).toHaveBeenCalledWith(
            expect.objectContaining(filter),
            expect.objectContaining(expectedUpdateObject), // updateObject
            expect.objectContaining({new: true}), // Return the updated document instead of the original one
            expect.objectContaining({runValidators: true}) // Run the validators on the update object
        );

    });

    test('Should create the update object by removing the user_id from the request body', async () => {
         // Arrange
         _.omit.mockReturnValue(expectedUpdateObject);

         // Act
         await updateUser(req, res, next)
 
         // Assert
         expect(_.omit).toHaveBeenCalledTimes(1);
         expect(_.omit).toHaveBeenCalledWith(
            expect.objectContaining(req.body),
            "user_id"
         );
    })
});