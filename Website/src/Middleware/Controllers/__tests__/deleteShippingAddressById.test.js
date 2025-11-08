const {deleteShippingAddressById} = require('../shippingAddressControllers');
const User = require('../../Models/User');
const { checkUserExists } = require('../SupportFunctions/shippingAddressSupportFunctions');

jest.mock('../../Models/User');
jest.mock('../SupportFunctions/shippingAddressSupportFunctions');

describe('deleteShippingAddressById - Database Deletion Test', () => {
    test('Should successfully delete an existing shipping address from the User document', async () => {
        // Arrange - Mock all dependencies
        const mockUserId = '7ycthivdrqvl';
        const mockShippingAddressId = 'a1b2c3d4e5f6';

        const req = {
            params: {
                user_id: mockUserId,
                shipping_address_id: mockShippingAddressId
            },
            body:{
                shipping_address_id: mockShippingAddressId
            }
        };  

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        const next = jest.fn();

        const mockDeleteResponse = {
            acknowledged: true,
            modifiedCount: 1,
            upsertedId: null,
            upsertedCount: 0,
            matchedCount: 1
        }

        checkUserExists.mockResolvedValue(true);
        User.updateOne.mockResolvedValue(mockDeleteResponse);

        // Act
        
        const result = await deleteShippingAddressById(req, res, next);

        
        //console.log('Result is a promise?', result instanceof Promise);
        await result;
        //console.log('After awaiting deleteShippingAddressById');
       
        console.log('res.status.mock.calls:', res.status.mock.calls);
        console.log('res.json.mock.calls:', res.json.mock.calls);

        // Check what was called
        console.log('next called:', next.mock.calls);
        console.log('checkUserExists called:', checkUserExists.mock.calls);
        console.log('User.updateOne called:', User.updateOne.mock.calls);
        
        // Assert
        expect(next).not.toHaveBeenCalled();
        expect(checkUserExists).toHaveBeenCalledTimes(1);
        expect(User.updateOne).toHaveBeenCalledTimes(1);
        expect(User.updateOne).toHaveBeenCalledWith(
            { user_id: mockUserId },
            { $pull: { ShippingAddresses: { shipping_address_id: mockShippingAddressId } } }

        );
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockDeleteResponse);
    });

    test('Debug asyncErrorHandler behavior', async () => {
        const mockReq = { params: { user_id: 'test' }, body: { shipping_address_id: 'test' } };
        
        const mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        const mockNext = jest.fn();

        // Call the function
        const result = deleteShippingAddressById(mockReq, mockRes, mockNext);
    
        console.log('Type of result:', typeof result);
        console.log('result instanceof Promise:', result instanceof Promise);
        console.log('result.constructor.name:', result?.constructor?.name);
    
        // Try awaiting once
        const awaited = await result;
        console.log('Type of awaited:', typeof awaited);
        console.log('awaited instanceof Promise:', awaited instanceof Promise);
        console.log('awaited:', awaited);
    
        // If awaited is also a promise, await it again
        if (awaited instanceof Promise) {
            await awaited;
        }
    });
});