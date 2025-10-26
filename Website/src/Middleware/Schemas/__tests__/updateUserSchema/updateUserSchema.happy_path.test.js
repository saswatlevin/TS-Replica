// AI Generated Code for Testing
const { updateUserSchema } = require('../../userSchemas');

describe('updateUserSchema - Happy Path Tests', () => {
    
    describe('Happy Path Test Cases', () => {
        test('should accept complete valid user update data - Test Case 1', () => {
            // Arrange
            const validUserData = {
                email: 'abc_d01@hostmail.com',
                phone_number: '917560847544',
                first_name: 'Arif',
                last_name: 'Khan',
                user_role: 'admin',
                upper_size_number: 40,
                upper_size_letter: 'M',
                others_size_letter: 'M',
                email_comms_type: 'I want all emails',
                sms_comms: false
            };

            // Act
            const result = updateUserSchema.safeParse(validUserData);

            // Log
            console.log('should accept complete valid user update data - Test Case 1 - result?.error?.issues', result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            //expect(result.data).toEqual(validUserData);
            expect(result.data.email).toBe('abc_d01@hostmail.com');
            expect(result.data.phone_number).toBe('917560847544');
            expect(result.data.first_name).toBe('Arif');
            expect(result.data.last_name).toBe('Khan');
            expect(result.data.user_role).toBe('admin');
            expect(result.data.upper_size_number).toBe(40);
            expect(result.data.upper_size_letter).toBe('M');
            expect(result.data.others_size_letter).toBe('M');
            expect(result.data.email_comms_type).toBe('I want all emails');
            expect(result.data.sms_comms).toBe(false);
        });

        test('should accept complete valid user update data - Test Case 2', () => {
            // Arrange
            const validUserData = {
                email: 'dca_101@hostmail.com',
                phone_number: '917560847544',
                first_name: 'Yuri',
                last_name: 'Koptev',
                user_role: 'user',
                upper_size_number: 42,
                upper_size_letter: 'L',
                others_size_letter: 'L',
                email_comms_type: 'One weekly recap',
                sms_comms: true
            };

            // Act
            const result = updateUserSchema.safeParse(validUserData);

            // Log
            console.log('should accept complete valid user update data - Test Case 2 - result?.error?.issues', result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            //expect(result.data).toEqual(validUserData);
            expect(result.data.email).toBe('dca_101@hostmail.com');
            expect(result.data.phone_number).toBe('917560847544');
            expect(result.data.first_name).toBe('Yuri');
            expect(result.data.last_name).toBe('Koptev');
            expect(result.data.user_role).toBe('user');
            expect(result.data.upper_size_number).toBe(42);
            expect(result.data.upper_size_letter).toBe('L');
            expect(result.data.others_size_letter).toBe('L');
            expect(result.data.email_comms_type).toBe('One weekly recap');
            expect(result.data.sms_comms).toBe(true);
        });
    });

    describe('Happy Path Boundary Test Cases', () => {
        test('should accept valid email with special characters', () => {
            // Arrange
            const validUserData = {
                email: 'abc_d44@hostmail.com',
                phone_number: '917560847544',
                first_name: 'Arif',
                last_name: 'Khan',
                user_role: 'admin',
                upper_size_number: 40,
                upper_size_letter: 'M',
                others_size_letter: 'M',
                email_comms_type: 'I want all emails',
                sms_comms: false
            };

            // Act
            const result = updateUserSchema.safeParse(validUserData);

            // Log
            console.log('should accept valid email with special characters - result?.error?.issues', result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.email).toBe('abc_d44@hostmail.com');
        });

        test('should accept email with minimum length (9 characters)', () => {
            // Arrange
            const validUserData = {
                email: 'ab@de.com', // Exactly 9 characters
                phone_number: '917560847544',
                first_name: 'Arif',
                last_name: 'Khan',
                user_role: 'admin',
                upper_size_number: 40,
                upper_size_letter: 'M',
                others_size_letter: 'M',
                email_comms_type: 'I want all emails',
                sms_comms: false
            };

            // Act
            const result = updateUserSchema.safeParse(validUserData);

            // Log
            console.log('should accept email with minimum length (9 characters) - result?.error?.issues', result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.email).toBe('ab@de.com');
            expect(result.data.email.length).toBe(9);
        });

        test('should accept email with maximum length (30 characters)', () => {
            // Arrange
            const validUserData = {
                email: 'abcdefghijklm@mnopqrstuvwx.com', // Exactly 30 characters
                phone_number: '917560847544',
                first_name: 'Arif',
                last_name: 'Khan',
                user_role: 'admin',
                upper_size_number: 40,
                upper_size_letter: 'M',
                others_size_letter: 'M',
                email_comms_type: 'I want all emails',
                sms_comms: false
            };

            // Act
            const result = updateUserSchema.safeParse(validUserData);

            // Log
            console.log('should accept email with maximum length (30 characters) - result?.error?.issues', result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.email).toBe('abcdefghijklm@mnopqrstuvwx.com');
            expect(result.data.email.length).toBe(30);
        });

        test('should accept phone number with minimum length (8 digits)', () => {
            // Arrange
            const validUserData = {
                email: 'abc_d01@hostmail.com',
                phone_number: '68340021', // Exactly 8 digits (valid mobile number)
                first_name: 'Arif',
                last_name: 'Khan',
                user_role: 'admin',
                upper_size_number: 40,
                upper_size_letter: 'M',
                others_size_letter: 'M',
                email_comms_type: 'I want all emails',
                sms_comms: false
            };

            // Act
            const result = updateUserSchema.safeParse(validUserData);

            // Log
            console.log('should accept phone number with minimum length (8 digits) - result?.error?.issues', result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.phone_number).toBe('68340021');
            expect(result.data.phone_number.length).toBe(8);
        });

        test('should accept phone number with maximum length (12 digits)', () => {
            // Arrange
            const validUserData = {
                email: 'abc_d01@hostmail.com',
                phone_number: '917560847544', // Exactly 12 digits
                first_name: 'Arif',
                last_name: 'Khan',
                user_role: 'admin',
                upper_size_number: 40,
                upper_size_letter: 'M',
                others_size_letter: 'M',
                email_comms_type: 'I want all emails',
                sms_comms: false
            };

            // Act
            const result = updateUserSchema.safeParse(validUserData);

            // Log
            console.log('should accept phone number with maximum length (12 digits) - result?.error?.issues', result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.phone_number).toBe('917560847544');
            expect(result.data.phone_number.length).toBe(12);
        });

        test('should accept first name with single quote', () => {
            // Arrange
            const validUserData = {
                email: 'abc_d01@hostmail.com',
                phone_number: '917560847544',
                first_name: "Ya'el", // Contains single quote
                last_name: 'Khan',
                user_role: 'admin',
                upper_size_number: 40,
                upper_size_letter: 'M',
                others_size_letter: 'M',
                email_comms_type: 'I want all emails',
                sms_comms: false
            };

            // Act
            const result = updateUserSchema.safeParse(validUserData);

            // Log
            console.log('should accept first name with single quote - result?.error?.issues', result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.first_name).toBe("Ya'el");
        });

        test('should accept first name with minimum length (1 character)', () => {
            // Arrange
            const validUserData = {
                email: 'abc_d01@hostmail.com',
                phone_number: '917560847544',
                first_name: 'A', // Exactly 1 character
                last_name: 'Khan',
                user_role: 'admin',
                upper_size_number: 40,
                upper_size_letter: 'M',
                others_size_letter: 'M',
                email_comms_type: 'I want all emails',
                sms_comms: false
            };

            // Act
            const result = updateUserSchema.safeParse(validUserData);

            // Log
            console.log('should accept first name with minimum length (1 character) - result?.error?.issues', result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.first_name).toBe('A');
            expect(result.data.first_name.length).toBe(1);
        });

        test('should accept first name with maximum length (100 characters)', () => {
            // Arrange
            const validUserData = {
                email: 'abc_d01@hostmail.com',
                phone_number: '917560847544',
                first_name: "AbCde-FgHiJkL'mNoPqRsTuVwXyZ-aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkL'mNoPqRsTuVwXyZiuyhjklopopmnbghyt", // Exactly 100 characters
                last_name: 'Khan',
                user_role: 'admin',
                upper_size_number: 40,
                upper_size_letter: 'M',
                others_size_letter: 'M',
                email_comms_type: 'I want all emails',
                sms_comms: false
            };

            // Act
            const result = updateUserSchema.safeParse(validUserData);

            // Log
            console.log('should accept first name with maximum length (100 characters) - result?.error?.issues', result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.first_name).toBe("AbCde-FgHiJkL'mNoPqRsTuVwXyZ-aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkL'mNoPqRsTuVwXyZiuyhjklopopmnbghyt");
            expect(result.data.first_name.length).toBe(100);
        });

        test('should accept last name with hyphen', () => {
            // Arrange
            const validUserData = {
                email: 'abc_d01@hostmail.com',
                phone_number: '917560847544',
                first_name: 'Arif',
                last_name: 'Zaghari-Ratcliffe', // Contains hyphen
                user_role: 'admin',
                upper_size_number: 40,
                upper_size_letter: 'M',
                others_size_letter: 'M',
                email_comms_type: 'I want all emails',
                sms_comms: false
            };

            // Act
            const result = updateUserSchema.safeParse(validUserData);

            // Log
            console.log('should accept last name with hyphen - result?.error?.issues', result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.last_name).toBe('Zaghari-Ratcliffe');
        });

        test('should accept last name with minimum length (1 character)', () => {
            // Arrange
            const validUserData = {
                email: 'abc_d01@hostmail.com',
                phone_number: '917560847544',
                first_name: 'Arif',
                last_name: 'B', // Exactly 1 character
                user_role: 'admin',
                upper_size_number: 40,
                upper_size_letter: 'M',
                others_size_letter: 'M',
                email_comms_type: 'I want all emails',
                sms_comms: false
            };

            // Act
            const result = updateUserSchema.safeParse(validUserData);

            // Log
            console.log('should accept last name with minimum length (1 character) - result?.error?.issues', result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.last_name).toBe('B');
            expect(result.data.last_name.length).toBe(1);
        });

        test('should accept last name with maximum length (100 characters)', () => {
            // Arrange
            const validUserData = {
                email: 'abc_d01@hostmail.com',
                phone_number: '917560847544',
                first_name: 'Arif',
                last_name: "AbCde-FgHiJkL'mNoPqRsTuVwXyZ-aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkL'mNoPqRsTuVwXyZiuyhjklopopmnbghyt", // Exactly 100 characters
                user_role: 'admin',
                upper_size_number: 40,
                upper_size_letter: 'M',
                others_size_letter: 'M',
                email_comms_type: 'I want all emails',
                sms_comms: false
            };

            // Act
            const result = updateUserSchema.safeParse(validUserData);

            // Log
            console.log('should accept last name with maximum length (100 characters) - result?.error?.issues', result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.last_name).toBe("AbCde-FgHiJkL'mNoPqRsTuVwXyZ-aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkL'mNoPqRsTuVwXyZiuyhjklopopmnbghyt");
            expect(result.data.last_name.length).toBe(100);
        });
    });
});
