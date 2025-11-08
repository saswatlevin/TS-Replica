const {searchShippingAddress} = require('../shippingAddressControllers');
const User = require('../../Models/User');
const { checkUserExists, checkIsEmptyObject } = require('../SupportFunctions/shippingAddressSupportFunctions');
const _ = require('lodash');

// Mock dependencies
jest.mock('../../Models/User');
jest.mock('../SupportFunctions/shippingAddressSupportFunctions');
jest.mock('lodash');

describe('searchShippingAddress', () => {
    test('searchShippingAddress - Database Search Test', async () => {
        // Arrange - Mock all dependencies
        const mockUserId = '7ycthivdrqvl';
        const mockShippingAddressId = 'a1b2c3d4e5f6';

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
        //checkIsEmptyObject.mockReturnValue(false);

        _.cloneDeep.mockReturnValue(req.body);
        
        const mockShippingAddressSearchQuery = {
            "ShippingAddresses.$.address_type_id": req.body.address_type_id,
            "ShippingAddresses.$.company_name": req.body.company_name,
            "ShippingAddresses.$.address": req.body.address,
            "ShippingAddresses.$.apartment": req.body.apartment,
            "ShippingAddresses.$.city": req.body.city,
            "ShippingAddresses.$.administrative_division": req.body.administrative_division,
            "ShippingAddresses.$.country": req.body.country,
            "ShippingAddresses.$.postal_area": req.body.postal_area,
            "ShippingAddresses.$.phone_number": req.body.phone_number            
        };

        const mockSearchResult = [
            req.body, 

            {
                 _id: 'mongo_id',
                shipping_address_id: "1h89jklopqdf",
                address_type_id: '2',
                company_name: 'Another Test Company, Inc',
                address: '241 Test St',
                apartment: 'Apt 5B',
                city: 'New York',
                administrative_division: 'NY',
                country: 'USA',
                postal_area: '10002',
                phone_number: '12026550123'
            }

        ];

        User.aggregate.mockResolvedValue(mockSearchResult);
        
        //console.log('Before calling searchShippingAddress');

        // Act
        
        await searchShippingAddress(req, res, next);
        //console.log('After calling searchShippingAddress');
        //console.log('checkIsEmptyObject calls:', checkIsEmptyObject.mock.calls);
        //console.log('next called with:', next.mock.calls);
        
        

        // Assert
        expect(checkIsEmptyObject).toHaveBeenCalledTimes(2); // Called with req and req.body
        expect(checkUserExists).toHaveBeenCalledTimes(1);
        expect(User.aggregate).toHaveBeenCalledTimes(1);
        expect(mockSearchResult.length).toBe(2);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockSearchResult);
    });    
});