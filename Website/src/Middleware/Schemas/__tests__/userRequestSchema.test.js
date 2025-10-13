// AI Generated Code for Testing
const { userRequestSchema } = require('../userSchemas');

describe('userRequestSchema - Positive Path Tests', () => {
    
    describe('Complete Valid User Data', () => {
        test('should accept complete valid user registration data', () => {
            // Arrange
            const validUserData = {
                email: 'john.doe@example.com',
                password: 'SecurePass123!',
                phone_number: '14155552671',
                first_name: 'John',
                last_name: 'Doe',
                user_role: 'user',
                upper_size_number: 42,
                upper_size_letter: 'L',
                lower_size_number: 32,
                others_size_letter: 'M',
                email_comms_type: 'I want all emails',
                sms_comms: true,
                ShippingAddresses: [],
                CartItems: []
            };

            // Act
            const result = userRequestSchema.safeParse(validUserData);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data).toEqual(validUserData);
            expect(result.error).toBeUndefined();
        });

        test('should accept valid data with admin role', () => {
            // Arrange
            const validAdminData = {
                email: 'admin@example.com',
                password: 'AdminPass123!',
                phone_number: '14155552671',
                first_name: 'Admin',
                last_name: 'User',
                user_role: 'admin',
                upper_size_number: 44,
                upper_size_letter: 'XL',
                lower_size_number: 34,
                others_size_letter: 'L',
                email_comms_type: 'One weekly recap',
                sms_comms: false,
                ShippingAddresses: [],
                CartItems: []
            };

            // Act
            const result = userRequestSchema.safeParse(validAdminData);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.user_role).toBe('admin');
        });
    });

    describe('Valid Enum Values', () => {
        test('should accept all valid user_role enum values', () => {
            const validRoles = ['user', 'admin'];

            validRoles.forEach(role => {
                const userData = {
                    email: 'test@example.com',
                    password: 'ValidPass123!',
                    phone_number: '14155552671',
                    first_name: 'Test',
                    last_name: 'User',
                    user_role: role,
                    upper_size_number: 40,
                    upper_size_letter: 'M',
                    lower_size_number: 32,
                    others_size_letter: 'M',
                    email_comms_type: 'I want all emails',
                    sms_comms: true,
                    ShippingAddresses: [],
                    CartItems: []
                };

                const result = userRequestSchema.safeParse(userData);
                expect(result.success).toBe(true);
            });
        });

        test('should accept all valid upper_size_letter enum values', () => {
            const validSizes = ['XXL', 'XL', 'L', 'M', 'S', 'XS'];

            validSizes.forEach(size => {
                const userData = {
                    email: 'test@example.com',
                    password: 'ValidPass123!',
                    phone_number: '14155552671',
                    first_name: 'Test',
                    last_name: 'User',
                    user_role: 'user',
                    upper_size_number: 40,
                    upper_size_letter: size,
                    lower_size_number: 32,
                    others_size_letter: 'M',
                    email_comms_type: 'I want all emails',
                    sms_comms: true,
                    ShippingAddresses: [],
                    CartItems: []
                };

                const result = userRequestSchema.safeParse(userData);
                expect(result.success).toBe(true);
            });
        });

        test('should accept all valid others_size_letter enum values', () => {
            const validSizes = ['XXL', 'XL', 'L', 'M', 'S', 'XS'];

            validSizes.forEach(size => {
                const userData = {
                    email: 'test@example.com',
                    password: 'ValidPass123!',
                    phone_number: '14155552671',
                    first_name: 'Test',
                    last_name: 'User',
                    user_role: 'user',
                    upper_size_number: 40,
                    upper_size_letter: 'M',
                    lower_size_number: 32,
                    others_size_letter: size,
                    email_comms_type: 'I want all emails',
                    sms_comms: true,
                    ShippingAddresses: [],
                    CartItems: []
                };

                const result = userRequestSchema.safeParse(userData);
                expect(result.success).toBe(true);
            });
        });

        test('should accept all valid email_comms_type enum values', () => {
            const validCommsTypes = [
                'I want all emails',
                'One weekly recap',
                'Stock notifications only',
                'Never / Unsubscribe'
            ];

            validCommsTypes.forEach(commsType => {
                const userData = {
                    email: 'test@example.com',
                    password: 'ValidPass123!',
                    phone_number: '14155552671',
                    first_name: 'Test',
                    last_name: 'User',
                    user_role: 'user',
                    upper_size_number: 40,
                    upper_size_letter: 'M',
                    lower_size_number: 32,
                    others_size_letter: 'M',
                    email_comms_type: commsType,
                    sms_comms: true,
                    ShippingAddresses: [],
                    CartItems: []
                };

                const result = userRequestSchema.safeParse(userData);
                expect(result.success).toBe(true);
            });
        });
    });

    describe('Valid Numeric Values', () => {
        test('should accept all valid upper_size_number values', () => {
            const validSizeNumbers = [46, 44, 42, 40, 38, 36];

            validSizeNumbers.forEach(sizeNum => {
                const userData = {
                    email: 'test@example.com',
                    password: 'ValidPass123!',
                    phone_number: '14155552671',
                    first_name: 'Test',
                    last_name: 'User',
                    user_role: 'user',
                    upper_size_number: sizeNum,
                    upper_size_letter: 'M',
                    lower_size_number: 32,
                    others_size_letter: 'M',
                    email_comms_type: 'I want all emails',
                    sms_comms: true,
                    ShippingAddresses: [],
                    CartItems: []
                };

                const result = userRequestSchema.safeParse(userData);
                expect(result.success).toBe(true);
            });
        });

        test('should accept all valid lower_size_number values', () => {
            const validLowerSizes = [38, 36, 35, 34, 33, 32, 31, 30, 29, 28];

            validLowerSizes.forEach(sizeNum => {
                const userData = {
                    email: 'test@example.com',
                    password: 'ValidPass123!',
                    phone_number: '14155552671',
                    first_name: 'Test',
                    last_name: 'User',
                    user_role: 'user',
                    upper_size_number: 40,
                    upper_size_letter: 'M',
                    lower_size_number: sizeNum,
                    others_size_letter: 'M',
                    email_comms_type: 'I want all emails',
                    sms_comms: true,
                    ShippingAddresses: [],
                    CartItems: []
                };

                const result = userRequestSchema.safeParse(userData);
                expect(result.success).toBe(true);
            });
        });
    });

    describe('Valid String Formats', () => {
        test('should accept valid email formats', () => {
            const validEmails = [
                'user@example.com',
                'user123@example.com',
                'user1@example1.com'
            ];

            validEmails.forEach(email => {
                const userData = {
                    email: email,
                    password: 'ValidPass123!',
                    phone_number: '14155552671',
                    first_name: 'Test',
                    last_name: 'User',
                    user_role: 'user',
                    upper_size_number: 40,
                    upper_size_letter: 'M',
                    lower_size_number: 32,
                    others_size_letter: 'M',
                    email_comms_type: 'I want all emails',
                    sms_comms: true,
                    ShippingAddresses: [],
                    CartItems: []
                };

                const result = userRequestSchema.safeParse(userData);
                expect(result.success).toBe(true);
            });
        });

        test('should accept names with hyphens and apostrophes', () => {
            const validNames = [
                { first: "Mary-Jane", last: "Watson" },
                { first: "O'Brien", last: "Smith" },
                { first: "Jean-Pierre", last: "D'Angelo" },
                { first: "Anne", last: "O'Connell-Smith" }
            ];

            validNames.forEach(({ first, last }) => {
                const userData = {
                    email: 'test@example.com',
                    password: 'ValidPass123!',
                    phone_number: '14155552671',
                    first_name: first,
                    last_name: last,
                    user_role: 'user',
                    upper_size_number: 40,
                    upper_size_letter: 'M',
                    lower_size_number: 32,
                    others_size_letter: 'M',
                    email_comms_type: 'I want all emails',
                    sms_comms: true,
                    ShippingAddresses: [],
                    CartItems: []
                };

                const result = userRequestSchema.safeParse(userData);
                expect(result.success).toBe(true);
            });
        });

        test('should accept valid password with different special characters', () => {
            const validPasswords = [
                'ValidPass123!',
                'SecurePass456@',
                'MyPassword789#',
                'TestPass012$',
                'Pass.Word345 '
            ];

            validPasswords.forEach(password => {
                const userData = {
                    email: 'test@example.com',
                    password: password,
                    phone_number: '14155552671',
                    first_name: 'Test',
                    last_name: 'User',
                    user_role: 'user',
                    upper_size_number: 40,
                    upper_size_letter: 'M',
                    lower_size_number: 32,
                    others_size_letter: 'M',
                    email_comms_type: 'I want all emails',
                    sms_comms: true,
                    ShippingAddresses: [],
                    CartItems: []
                };

                const result = userRequestSchema.safeParse(userData);
                expect(result.success).toBe(true);
            });
        });
    });

    describe('Boundary Values (Valid)', () => {
        test('should accept minimum valid password length (12 characters)', () => {
            const userData = {
                email: 'test@example.com',
                password: 'ValidPass01!', // Exactly 12 characters
                phone_number: '14155552671',
                first_name: 'T',
                last_name: 'U',
                user_role: 'user',
                upper_size_number: 40,
                upper_size_letter: 'M',
                lower_size_number: 32,
                others_size_letter: 'M',
                email_comms_type: 'I want all emails',
                sms_comms: true,
                ShippingAddresses: [],
                CartItems: []
            };

            const result = userRequestSchema.safeParse(userData);
            expect(result.success).toBe(true);
        });

        test('should accept maximum valid password length (30 characters)', () => {
            const userData = {
                email: 'test@example.com',
                password: 'ValidPass123!MaxLengthTest30', // Exactly 30 characters
                phone_number: '14155552671',
                first_name: 'Test',
                last_name: 'User',
                user_role: 'user',
                upper_size_number: 40,
                upper_size_letter: 'M',
                lower_size_number: 32,
                others_size_letter: 'M',
                email_comms_type: 'I want all emails',
                sms_comms: true,
                ShippingAddresses: [],
                CartItems: []
            };

            const result = userRequestSchema.safeParse(userData);
            expect(result.success).toBe(true);
        });

        test('should accept minimum valid name length (1 character)', () => {
            const userData = {
                email: 'test@example.com',
                password: 'ValidPass123!',
                phone_number: '14155552671',
                first_name: 'A',
                last_name: 'B',
                user_role: 'user',
                upper_size_number: 40,
                upper_size_letter: 'M',
                lower_size_number: 32,
                others_size_letter: 'M',
                email_comms_type: 'I want all emails',
                sms_comms: true,
                ShippingAddresses: [],
                CartItems: []
            };

            const result = userRequestSchema.safeParse(userData);
            expect(result.success).toBe(true);
        });

        test('should accept maximum valid name length (100 characters)', () => {
            const longName = 'A'.repeat(100); // Exactly 100 characters

            const userData = {
                email: 'test@example.com',
                password: 'ValidPass123!',
                phone_number: '14155552671',
                first_name: longName,
                last_name: longName,
                user_role: 'user',
                upper_size_number: 40,
                upper_size_letter: 'M',
                lower_size_number: 32,
                others_size_letter: 'M',
                email_comms_type: 'I want all emails',
                sms_comms: true,
                ShippingAddresses: [],
                CartItems: []
            };

            const result = userRequestSchema.safeParse(userData);
            expect(result.success).toBe(true);
        });

        test('should accept minimum valid phone number length (8 digits)', () => {
            const userData = {
                email: 'test@example.com',
                password: 'ValidPass123!',
                phone_number: '12345678', // Exactly 8 digits
                first_name: 'Test',
                last_name: 'User',
                user_role: 'user',
                upper_size_number: 40,
                upper_size_letter: 'M',
                lower_size_number: 32,
                others_size_letter: 'M',
                email_comms_type: 'I want all emails',
                sms_comms: true,
                ShippingAddresses: [],
                CartItems: []
            };

            const result = userRequestSchema.safeParse(userData);
            expect(result.success).toBe(true);
        });

        test('should accept maximum valid phone number length (12 digits)', () => {
            const userData = {
                email: 'test@example.com',
                password: 'ValidPass123!',
                phone_number: '917560847544', // Exactly 12 digits
                first_name: 'Test',
                last_name: 'User',
                user_role: 'user',
                upper_size_number: 40,
                upper_size_letter: 'M',
                lower_size_number: 32,
                others_size_letter: 'M',
                email_comms_type: 'I want all emails',
                sms_comms: true,
                ShippingAddresses: [],
                CartItems: []
            };

            const result = userRequestSchema.safeParse(userData);
            expect(result.success).toBe(true);
        });
    });

    describe('Boolean and Array Fields', () => {
        test('should accept sms_comms as true', () => {
            const userData = {
                email: 'test@example.com',
                password: 'ValidPass123!',
                phone_number: '14155552671',
                first_name: 'Test',
                last_name: 'User',
                user_role: 'user',
                upper_size_number: 40,
                upper_size_letter: 'M',
                lower_size_number: 32,
                others_size_letter: 'M',
                email_comms_type: 'I want all emails',
                sms_comms: true,
                ShippingAddresses: [],
                CartItems: []
            };

            const result = userRequestSchema.safeParse(userData);
            expect(result.success).toBe(true);
            expect(result.data.sms_comms).toBe(true);
        });

        test('should accept sms_comms as false', () => {
            const userData = {
                email: 'test@example.com',
                password: 'ValidPass123!',
                phone_number: '14155552671',
                first_name: 'Test',
                last_name: 'User',
                user_role: 'user',
                upper_size_number: 40,
                upper_size_letter: 'M',
                lower_size_number: 32,
                others_size_letter: 'M',
                email_comms_type: 'I want all emails',
                sms_comms: false,
                ShippingAddresses: [],
                CartItems: []
            };

            const result = userRequestSchema.safeParse(userData);
            expect(result.success).toBe(true);
            expect(result.data.sms_comms).toBe(false);
        });

        test('should accept empty ShippingAddresses array', () => {
            const userData = {
                email: 'test@example.com',
                password: 'ValidPass123!',
                phone_number: '14155552671',
                first_name: 'Test',
                last_name: 'User',
                user_role: 'user',
                upper_size_number: 40,
                upper_size_letter: 'M',
                lower_size_number: 32,
                others_size_letter: 'M',
                email_comms_type: 'I want all emails',
                sms_comms: true,
                ShippingAddresses: [],
                CartItems: []
            };

            const result = userRequestSchema.safeParse(userData);
            expect(result.success).toBe(true);
            expect(result.data.ShippingAddresses).toEqual([]);
        });

        test('should accept empty CartItems array', () => {
            const userData = {
                email: 'test@example.com',
                password: 'ValidPass123!',
                phone_number: '14155552671',
                first_name: 'Test',
                last_name: 'User',
                user_role: 'user',
                upper_size_number: 40,
                upper_size_letter: 'M',
                lower_size_number: 32,
                others_size_letter: 'M',
                email_comms_type: 'I want all emails',
                sms_comms: true,
                ShippingAddresses: [],
                CartItems: []
            };

            const result = userRequestSchema.safeParse(userData);
            expect(result.success).toBe(true);
            expect(result.data.CartItems).toEqual([]);
        });
    });
});

