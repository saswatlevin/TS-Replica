const { registerUser } = require('../userControllers');
const User = require('../../Models/User');
const connectToDB = require('../../connectToDB');
const mongoose = require('mongoose');
require('dotenv').config();

describe('registerUser Integration Test', () => {
    // Connect to database before all tests
    beforeAll(async () => {
        await connectToDB();
    });

    // Close database connection after all tests
    afterAll(async () => {
        await mongoose.connection.close();
    });

    test('should successfully insert a single user into the database', async () => {
        // Arrange - Create request body with test user data
        const testUserData = {
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
        };

        const req = {
            body: testUserData
        };

        const res = {
            json: jest.fn()
        };

        const next = jest.fn();

        // Act - Call registerUser to insert user into database
        await registerUser(req, res, next);

        // Assert - Verify the response was sent
        expect(res.json).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith(
            expect.objectContaining({
                result: expect.any(Object)
            })
        );

        // Assert - Verify the user was actually inserted into the database
        const insertedUser = await User.findOne({ email: testUserData.email });
        expect(insertedUser).not.toBeNull();
        expect(insertedUser).toBeTruthy();

        // Assert - Verify the inserted user has correct properties
        expect(insertedUser.email).toBe(testUserData.email);
        expect(insertedUser.phone_number).toBe(testUserData.phone_number);
        expect(insertedUser.first_name).toBe(testUserData.first_name);
        expect(insertedUser.last_name).toBe(testUserData.last_name);
        expect(insertedUser.user_role).toBe(testUserData.user_role);
        expect(insertedUser.upper_size_number).toBe(testUserData.upper_size_number);
        expect(insertedUser.upper_size_letter).toBe(testUserData.upper_size_letter);
        expect(insertedUser.others_size_letter).toBe(testUserData.others_size_letter);
        expect(insertedUser.email_comms_type).toBe(testUserData.email_comms_type);
        expect(insertedUser.sms_comms).toBe(testUserData.sms_comms);

        // Assert - Verify system-generated fields
        expect(insertedUser.user_id).toBeDefined();
        expect(insertedUser.user_id).toHaveLength(12); // createRandomString(6) generates 12 chars
        expect(insertedUser.docType).toBe('USER');
        expect(insertedUser.date_created_at).toBeDefined();
        expect(insertedUser.date_created_at).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/); // ISO8601 format

        // Assert - Verify password was hashed (not stored as plain text)
        expect(insertedUser.password).not.toBe(testUserData.password);
        expect(insertedUser.password).toContain('$argon2id$'); // argon2 hash format
    });
});

