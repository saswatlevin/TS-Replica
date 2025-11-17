const { registerUser } = require('../userControllers');
const User = require('../../Models/User');
const argon2 = require('argon2');
const createRandomString = require('../../createRandomString');
const getCurrentDateTime = require('../../getCurrentDateTime');

jest.mock('../../Models/User');
jest.mock('argon2');
jest.mock('../../createRandomString');
jest.mock('../../getCurrentDateTime');

describe('registerUser - Database Insertion', () => {
    test('persists composed user document via User.create()', async () => {
        const mockUserId = 'mockUser1234';
        const mockTimestamp = '2025-05-10T20:00:00Z';
        const mockPasswordHash = '$argon2id$v=19$m=65536,t=3,p=4$hash';

        createRandomString.mockReturnValue(mockUserId);
        getCurrentDateTime.mockReturnValue(mockTimestamp);
        argon2.hash.mockResolvedValue(mockPasswordHash);

        const requestBody = {
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

        const mockCreatedUser = {
            _id: 'mongo_id',
            ...requestBody,
            password: mockPasswordHash,
            user_id: mockUserId,
            docType: 'USER',
            date_created_at: mockTimestamp,
            __v: 0
        };

        User.create.mockResolvedValue(mockCreatedUser);

        const req = { body: requestBody };
        const res = { json: jest.fn() };
        const next = jest.fn();

        await registerUser(req, res, next);

        expect(createRandomString).toHaveBeenCalledWith(6);
        expect(getCurrentDateTime).toHaveBeenCalledTimes(1);
        expect(argon2.hash).toHaveBeenCalledWith(requestBody.password);
        expect(User.create).toHaveBeenCalledWith(
            expect.objectContaining({
                ...requestBody,
                password: mockPasswordHash,
                user_id: mockUserId,
                docType: 'USER',
                date_created_at: mockTimestamp
            })
        );
        expect(res.json).toHaveBeenCalledWith({ result: mockCreatedUser });
        expect(next).not.toHaveBeenCalled();
    });
});

