const { searchUsersByName } = require('../userControllers');
const User = require('../../Models/User');

jest.mock('../../Models/User');

describe('searchUsersByName - Database Retrieval Test', () => {

    test('should successfully retrieve users from database via User.find()', async () => {
        // Arrange - Mock all dependencies
        
        // MOCK THE REQUEST, RESPONSE AND NEXT FUNCTIONS
        const req = {
            body: {
                first_name: 'ABC2',
                last_name: 'CBA2'
            }
        };

        const res = { 
            json: jest.fn(), 
            status: jest.fn().mockReturnThis() 
        };

        const next = jest.fn();

        const foundUsers = [
            {
                _id: 'mongo_id_1',
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
            },
            {
                _id: 'mongo_id_2',
                user_id: '8ycthivdrqvl',
                docType: 'USER',
                date_created_at: '2025-01-02T00:00:00Z',
                email: 'abc003@server.com',
                password: '$argon2id$hash2',
                phone_number: '91123456788',
                first_name: 'ABC2',
                last_name: 'CBA2',
                user_role: 'user',
                upper_size_number: 42,
                upper_size_letter: 'L',
                others_size_letter: 'M',
                email_comms_type: 'One weekly recap',
                sms_comms: true,
                ShippingAddresses: [],
                CartItems: [],
                __v: 0
            }
        ];
        
        const searchCriteria = req.body;

        // MOCK THE DATABASE OPERATION TO RETURN THE FOUND USERS
        User.find.mockResolvedValue(foundUsers);
        
        // Act
        await searchUsersByName(req, res, next);

        // Assert
        expect(User.find).toHaveBeenCalledTimes(1);
        expect(User.find).toHaveBeenCalledWith(expect.objectContaining(searchCriteria));

        // VERIFY THAT THE RESPONSE WAS SENT CORRECTLY
        expect(res.json).toHaveBeenCalledWith(foundUsers);
        expect(res.status).toHaveBeenCalledWith(201);
  
    })
});
