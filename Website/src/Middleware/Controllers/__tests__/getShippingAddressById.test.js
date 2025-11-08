const {getShippingAddressById} = require('../shippingAddressControllers');
const User = require('../../Models/User');
const { checkUserExists, checkIsEmptyObject } = require('../SupportFunctions/shippingAddressSupportFunctions');

// Mock dependencies
jest.mock('../../Models/User');
jest.mock('../SupportFunctions/shippingAddressSupportFunctions');

describe('getShippingAddressById - Database Search Test', () => {
    test('getShippingAddressById - Database Search Test', async () => {
        
        // Arrange - Mock all dependencies
        const mockUserId = '7ycthivdrqvl';
        const mockShippingAddressId = 'a1b2c3dhyuio';

        const req = {
            params: {
                user_id: mockUserId,
                shipping_address_id: mockShippingAddressId
            },

            body: {
                _id: 'mongo_id',
                shipping_address_id: mockShippingAddressId,
                address_type_id: '1',
                company_name: 'Test Company',
                address: '123 Test St',
                apartment: 'Apt 4B',
                city: 'New York',
                administrative_division: 'NY',
                country: 'USA',
                postal_area: '10001',
                phone_number: '12025550123'
            }
        };

        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis() 
        };

        const next = jest.fn();

        checkIsEmptyObject.mockReturnValue(false);
        checkUserExists.mockReturnValue(true);

        const mockResult = [ 
            req.body
        ];

        User.aggregate.mockResolvedValue(mockResult);

        // Act
        await getShippingAddressById(req, res, next);

        // Assert
        expect(checkIsEmptyObject).toHaveBeenCalledTimes(1);
        expect(checkUserExists).toHaveBeenCalledTimes(1);
        expect(User.aggregate).toHaveBeenCalledTimes(1);
        expect(mockResult.length).toBe(1);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockResult[0]);

    });
})