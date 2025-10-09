const { registerUser } = require('../userControllers');
const User = require('../../Models/User');
const argon2 = require('argon2');
const createRandomString = require('../../createRandomString');
const getCurrentDateTime = require('../../getCurrentDateTime');

// Mock dependencies
jest.mock('../../Models/User');
jest.mock('argon2');
jest.mock('../../createRandomString');
jest.mock('../../getCurrentDateTime');

describe('registerUser - Database Insertion Test', () => {
    test('should successfully insert user into database via User.create()', async () => {
        // Arrange - Mock all dependencies
        const mockHashedPassword = '$argon2id$v=19$m=65536,t=3,p=4$test';
        const mockUserId = '7ycthivdrqvl';
        const mockDateTime = '2025-05-10T20:00:00Z';
        
        argon2.hash.mockResolvedValue(mockHashedPassword);
        createRandomString.mockReturnValue(mockUserId);
        getCurrentDateTime.mockReturnValue(mockDateTime);
        
        const mockCreatedUser = {
            _id: 'mongo_id',
            user_id: mockUserId,
            docType: 'USER',
            date_created_at: mockDateTime,
            email: 'abc001@server.com',
            password: mockHashedPassword,
            phone_number: '0123456789',
            first_name: 'ABC',
            last_name: 'CBA',
            user_role: 'user',
            upper_size_number: 44,
            upper_size_letter: 'XL',
            others_size_letter: 'XL',
            email_comms_type: 'One Weekly Recap',
            sms_comms: true,
            ShippingAddresses: [],
            CartItems: [],
            __v: 0
        };
        User.create.mockResolvedValue(mockCreatedUser);

        const req = {
            body: {
                email: 'abc001@server.com',
                password: 'SecurePass123!',
                phone_number: '0123456789',
                first_name: 'ABC',
                last_name: 'CBA',
                user_role: 'user',
                upper_size_number: 44,
                upper_size_letter: 'XL',
                others_size_letter: 'XL',
                email_comms_type: 'One Weekly Recap',
                sms_comms: true,
                ShippingAddresses: [],
                CartItems: []
            }
        };
        const res = { json: jest.fn() };

        // Act - Call the function
        await registerUser(req, res, jest.fn());

        // Assert - Verify User.create() was called with complete user document
        expect(User.create).toHaveBeenCalledTimes(1);
        expect(User.create).toHaveBeenCalledWith(
            expect.objectContaining({
                user_id: mockUserId,
                docType: 'USER',
                date_created_at: mockDateTime,
                email: 'abc001@server.com',
                password: mockHashedPassword,
                phone_number: '0123456789',
                first_name: 'ABC',
                last_name: 'CBA',
                user_role: 'user',
                upper_size_number: 44,
                upper_size_letter: 'XL',
                others_size_letter: 'XL',
                email_comms_type: 'One Weekly Recap',
                sms_comms: true,
                ShippingAddresses: [],
                CartItems: []
            })
        );
        expect(res.json).toHaveBeenCalledWith({ result: mockCreatedUser });
    });
});

