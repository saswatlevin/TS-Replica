// AI Generated Code for Testing
const { createShippingAddress } = require('../shippingAddressControllers');
const User = require('../../Models/User');
const { checkUserExists, checkIsEmptyObject } = require('../SupportFunctions/shippingAddressSupportFunctions');
const createRandomString = require('../../createRandomString');

// Mock dependencies
jest.mock('../../Models/User');
jest.mock('../SupportFunctions/shippingAddressSupportFunctions');
jest.mock('../../createRandomString');

describe('createShippingAddress - Database Insertion Test', () => {
    test('Should successfully insert a new shipping address into the User document', async () => {
        // Arrange - Mock all dependencies
        const mockUserId = '7ycthivdrqvl';
        const mockShippingAddressId = 'a1b2c3d4e5f6';
        
        const req = {
            params: {
                user_id: mockUserId
            },
            body: {
                address_type_id: 'home',
                company_name: 'Test Company',
                address: '123 Main St',
                apartment: 'Apt 4B',
                city: 'San Francisco',
                administrative_division: 'CA',
                country: 'USA',
                postal_area: '94102',
                phone_number: '1234567890'
            }
        };

        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis()
        };

        const next = jest.fn();

        // Mock support functions
        checkIsEmptyObject.mockReturnValue(false);
        checkUserExists.mockResolvedValue(true);
        createRandomString.mockReturnValue(mockShippingAddressId);

        // Expected shipping address with shipping_address_id added
        const expectedShippingAddress = {
            ...req.body,
            shipping_address_id: mockShippingAddressId
        };

        // Mock the updated User document that will be returned
        const mockUpdatedUser = {
            _id: 'mongo_id',
            user_id: mockUserId,
            docType: 'USER',
            date_created_at: '2025-01-01T00:00:00Z',
            email: 'test@example.com',
            ShippingAddresses: [expectedShippingAddress],
            CartItems: []
        };

        // Mock the database operation - lean() is chained on findOneAndUpdate
        const mockLean = jest.fn().mockResolvedValue(mockUpdatedUser);
        User.findOneAndUpdate.mockReturnValue({
            lean: mockLean
        });

        // Act - Call the function
        await createShippingAddress(req, res, next);

        // Assert - Verify User.findOneAndUpdate was called with correct parameters
        expect(User.findOneAndUpdate).toHaveBeenCalledTimes(1);
        expect(User.findOneAndUpdate).toHaveBeenCalledWith(
            { user_id: mockUserId },
            { $push: { ShippingAddresses: expectedShippingAddress } },
            { new: true }
        );
        
        // Verify .lean() was called on the result
        //expect(mockLean).toHaveBeenCalledTimes(1);
        
        // Verify the response was sent correctly
        //expect(res.status).toHaveBeenCalledWith(201);
        //expect(res.json).toHaveBeenCalledWith(mockUpdatedUser);
    });
});


