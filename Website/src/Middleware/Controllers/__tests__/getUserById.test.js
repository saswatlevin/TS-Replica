const { getUserById } = require('../userControllers');
const User = require('../../Models/User');

jest.mock('../../Models/User');

describe('getUserById - Database Retrieval Test', () => {

    test('should successfully retrieve user from database via User.findOne()', async () => {
        // Arrange - Mock all dependencies
        
        // mMOCK THE REQUEST, RESPONSE AND NEXT FUNCTIONS
        const req = {body: {user_id: '7ycthivdrqvl'} };

        const res = { 
            json: jest.fn(), 
            status: jest.fn().mockReturnThis() 
        };

        const next = jest.fn();

        const foundUser = {
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
        
        const user_id = req.body.user_id;

        // MOCK THE DATABASE OPERATION TO RETURN THE FOUND USER
        // CHECK THAT THE REQUEST BODY CONTAINS ONLY THE USER ID
        User.findOne.mockResolvedValue(foundUser);
        
        // Act
        await getUserById(req, res, next);

        // Assert
        expect(User.findOne).toHaveBeenCalledTimes(1);
        expect(User.findOne).toHaveBeenCalledWith(expect.objectContaining({user_id: user_id}));

        // VERIFY THAT THE RESPONSE WAS SENT CORRECTLY
        expect(res.json).toHaveBeenCalledWith(foundUser);
        expect(res.status).toHaveBeenCalledWith(201);
  
    })
});