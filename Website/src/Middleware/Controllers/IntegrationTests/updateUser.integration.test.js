const { updateUser, registerUser } = require('../userControllers');
const User = require('../../Models/User');
const connectToDB = require('../../connectToDB');
const mongoose = require('mongoose');
require('dotenv').config();

describe('updateUser Integration Test', () => {
    let testUserId = null;

    // Connect to database and create a test user before all tests
    beforeAll(async () => {
        // Connect to database
        await connectToDB();

        // Create a test user that will be updated
        const testUserData = {
            email: 'update.test@example.com',
            password: 'TestPassword123!',
            phone_number: '1234567890',
            first_name: 'Update',
            last_name: 'Test',
            user_role: 'user',
            upper_size_number: 42,
            upper_size_letter: 'L',
            others_size_letter: 'L',
            email_comms_type: 'One Weekly Recap',
            sms_comms: true,
            ShippingAddresses: [],
            CartItems: []
        };

        const req = {
            body: testUserData
        };

        const res = {
            json: jest.fn((data) => {
                if (data.result && data.result.user_id) {
                    testUserId = data.result.user_id;
                }
                return res;
            })
        };

        const next = jest.fn();

        // Register the user
        await registerUser(req, res, next);

        // If registration didn't set testUserId, find it from the database
        if (!testUserId) {
            const createdUser = await User.findOne({ email: testUserData.email });
            if (createdUser) {
                testUserId = createdUser.user_id;
            }
        }
    });

    // Close database connection after all tests
    afterAll(async () => {
        await mongoose.connection.close();
    });

    test('should successfully update a user document that is already present in the database', async () => {
        // Arrange - Create request body with update data
        const updateData = {
            last_name: 'CBA_D',
            user_role: 'admin'
        };

        // Include user_id in the request body for the update
        const req = {
            body: {
                user_id: testUserId,
                ...updateData
            }
        };

        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis()
        };

        const next = jest.fn();

        // Act - Call updateUser to update the user in the database
        await updateUser(req, res, next);

        // Assert - Verify the response was sent
        expect(res.json).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(expect.any(Object));

        // Assert - Verify the user was actually updated in the database
        const updatedUser = await User.findOne({ user_id: testUserId });
        expect(updatedUser).not.toBeNull();
        expect(updatedUser).toBeTruthy();

        // Assert - Verify the updated fields
        expect(updatedUser.last_name).toBe(updateData.last_name);
        expect(updatedUser.user_role).toBe(updateData.user_role);

        // Assert - Verify other fields remain unchanged
        expect(updatedUser.email).toBe('update.test@example.com');
        expect(updatedUser.first_name).toBe('Update');
        expect(updatedUser.user_id).toBe(testUserId);
        expect(updatedUser.docType).toBe('USER');
    });
});

