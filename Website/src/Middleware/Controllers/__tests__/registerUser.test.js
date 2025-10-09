const { registerUser } = require('../userControllers');
const User = require('../../Models/User');
const argon2 = require('argon2');
const createRandomString = require('../../createRandomString');
const getCurrentDateTime = require('../../getCurrentDateTime');

// Mock dependencies
jest.mock('../../Models/User');
jest.mock('argon2');
jest.mock('../../createRandomString');
jest.mock('../../getCurrentDateTime');

describe('registerUser - Database Insertion Test', () => {
    test('should successfully insert user into database via User.create()', async () => {
        // Arrange - Mock all dependencies
        const mockHashedPassword = '$argon2id$v=19$m=65536,t=3,p=4$test';
        const mockUserId = '7ycthivdrqvl';
        const mockDateTime = '2025-05-10T20:00:00Z';
        
        argon2.hash.mockResolvedValue(mockHashedPassword);
        createRandomString.mockReturnValue(mockUserId);
        getCurrentDateTime.mockReturnValue(mockDateTime);
        
        const mockCreatedUser = {
            _id: 'mongo_id',
            user_id: mockUserId,
            docType: 'USER',
            date_created_at: mockDateTime,
            email: 'abc001@server.com',
            password: mockHashedPassword,
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
            CartItems: [],
            __v: 0
        };
        User.create.mockResolvedValue(mockCreatedUser);

        const req = {
            body: {
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
            }
        };
        const res = { json: jest.fn() };

        // Act - Call the function
        await registerUser(req, res, jest.fn());

        // Assert - Verify User.create() was called with complete user document
        expect(User.create).toHaveBeenCalledTimes(1);
        expect(User.create).toHaveBeenCalledWith(
            expect.objectContaining({
                user_id: mockUserId,
                docType: 'USER',
                date_created_at: mockDateTime,
                email: 'abc001@server.com',
                password: mockHashedPassword,
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
            })
        );
        expect(res.json).toHaveBeenCalledWith({ result: mockCreatedUser });
    });
});

describe('registerUser - Data Transformation Tests', () => {
    let req, res, next;

    beforeEach(() => {
        // Reset mocks before each test
        jest.clearAllMocks();

        // Setup common test data
        req = {
            body: {
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
            }
        };
        res = { json: jest.fn() };
        next = jest.fn();
    });

    test('should generate 12-char user_id via createRandomString(6)', async () => {
        // Arrange
        const mockUserId = '7ycthivdrqvl';
        createRandomString.mockReturnValue(mockUserId);
        argon2.hash.mockResolvedValue('$argon2id$hash');
        getCurrentDateTime.mockReturnValue('2025-05-10T20:00:00Z');
        User.create.mockResolvedValue({ user_id: mockUserId });

        // Act
        await registerUser(req, res, next);

        // Assert
        expect(createRandomString).toHaveBeenCalledWith(6);
        expect(User.create).toHaveBeenCalledWith(
            expect.objectContaining({ user_id: mockUserId })
        );
    });

    test('should set docType to "USER"', async () => {
        // Arrange
        createRandomString.mockReturnValue('7ycthivdrqvl');
        argon2.hash.mockResolvedValue('$argon2id$hash');
        getCurrentDateTime.mockReturnValue('2025-05-10T20:00:00Z');
        User.create.mockResolvedValue({ docType: 'USER' });

        // Act
        await registerUser(req, res, next);

        // Assert
        expect(User.create).toHaveBeenCalledWith(
            expect.objectContaining({ docType: 'USER' })
        );
    });

    test('should set date_created_at to current ISO8601 timestamp', async () => {
        // Arrange
        const mockDateTime = '2025-05-10T20:00:00Z';
        createRandomString.mockReturnValue('7ycthivdrqvl');
        argon2.hash.mockResolvedValue('$argon2id$hash');
        getCurrentDateTime.mockReturnValue(mockDateTime);
        User.create.mockResolvedValue({ date_created_at: mockDateTime });

        // Act
        await registerUser(req, res, next);

        // Assert
        expect(getCurrentDateTime).toHaveBeenCalledTimes(1);
        expect(User.create).toHaveBeenCalledWith(
            expect.objectContaining({ date_created_at: mockDateTime })
        );
    });

    test('should hash password with argon2 before storage', async () => {
        // Arrange
        const plainPassword = 'SecurePass123!';
        const mockHashedPassword = '$argon2id$v=19$m=65536,t=3,p=4$test';
        createRandomString.mockReturnValue('7ycthivdrqvl');
        argon2.hash.mockResolvedValue(mockHashedPassword);
        getCurrentDateTime.mockReturnValue('2025-05-10T20:00:00Z');
        User.create.mockResolvedValue({ password: mockHashedPassword });

        // Act
        await registerUser(req, res, next);

        // Assert
        expect(argon2.hash).toHaveBeenCalledTimes(1);
        expect(argon2.hash).toHaveBeenCalledWith(plainPassword);
        expect(User.create).toHaveBeenCalledWith(
            expect.objectContaining({ password: mockHashedPassword })
        );
    });

    test('should NOT store plain-text password', async () => {
        // Arrange
        const plainPassword = 'SecurePass123!';
        const mockHashedPassword = '$argon2id$v=19$m=65536,t=3,p=4$test';
        createRandomString.mockReturnValue('7ycthivdrqvl');
        argon2.hash.mockResolvedValue(mockHashedPassword);
        getCurrentDateTime.mockReturnValue('2025-05-10T20:00:00Z');
        User.create.mockResolvedValue({ password: mockHashedPassword });

        // Act
        await registerUser(req, res, next);

        // Assert - Verify plain password is NOT passed to User.create
        const createCallArg = User.create.mock.calls[0][0];
        expect(createCallArg.password).not.toBe(plainPassword);
        expect(createCallArg.password).toBe(mockHashedPassword);
    });
});

