const {updateShippingAddress} = require('../shippingAddressControllers');
const User = require('../../Models/User');
const { checkUserExists, checkIsEmptyObject, checkShippingAddressExists } = require('../SupportFunctions/shippingAddressSupportFunctions');


// Mock dependencies
jest.mock('../../Models/User');
jest.mock('../SupportFunctions/shippingAddressSupportFunctions');   

describe('updateShippingAddress - Database Insertion Test', () => {
    test('Should successfully update an existing shipping address in the User document', async () => {
        // Arrange - Mock all dependencies
        const mockUserId = '7ycthivdrqvl';
        const mockShippingAddressId = 'a1b2c3d4e5f6';  
        
        const req = {
            params: {
                user_id: mockUserId,
                shipping_address_id: mockShippingAddressId
            },
            body :{
                address_type_id: '1',
                company_name: 'Updated Company',
                address: '456 Updated St',
                apartment: 'Apt 9C',
                city: 'Los Angeles',
                administrative_division: 'CA',
                country: 'USA',
                postal_area: '90001',
                phone_number: '0987654321'
            }
        };

        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis()
        };

        const next = jest.fn();

        checkIsEmptyObject.mockReturnValue(false);
        checkUserExists.mockResolvedValue(true);
        checkShippingAddressExists.mockResolvedValue(true);

        const mockUpdateResponse = {
            acknowledged: true,
            modifiedCount: 1,
            upsertedId: null,
            upsertedCount: 0,
            matchedCount: 1
        }

        const mockShippingAddressSelector = {
            user_id: mockUserId,
            'ShippingAddresses.shipping_address_id': mockShippingAddressId
        }

        const mockShippingAddressUpdateRequest = {
            "ShippingAddresses.$.address_type_id": req.body.address_type_id,
            "ShippingAddresses.$.company_name": req.body.company_name,
            "ShippingAddresses.$.address": req.body.address,
            "ShippingAddresses.$.apartment": req.body.apartment,
            "ShippingAddresses.$.city": req.body.city,
            "ShippingAddresses.$.administrative_division": req.body.administrative_division,
            "ShippingAddresses.$.country": req.body.country,
            "ShippingAddresses.$.postal_area": req.body.postal_area,
            "ShippingAddresses.$.phone_number": req.body.phone_number            
        }

        // Mock the database operation - lean() is chained on findOneAndUpdate
        const mockLean = jest.fn().mockResolvedValue(mockUpdateResponse);
        User.updateOne.mockReturnValue({
                    lean: mockLean
        });

        // Act - Call the function
        await updateShippingAddress(req, res, next);
        // Assert - Verify User.findOneAndUpdate was called with correct parameters
        expect(User.updateOne).toHaveBeenCalledTimes(1);
        expect(User.updateOne).toHaveBeenCalledWith(
            mockShippingAddressSelector,
            { $set: mockShippingAddressUpdateRequest }
        );

        // Verify the response was sent correctly
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockUpdateResponse);
    });
});