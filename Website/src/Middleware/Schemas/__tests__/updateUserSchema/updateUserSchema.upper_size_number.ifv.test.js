const mongoose = require('mongoose');
const { updateUserSchema } = require('../../userSchemas');

describe('updateUserSchema - Upper Size Number Field Validation Tests', () => {
    test('updateUserSchema - should accept valid upper_size_number (46)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            phone_number: "917560847544",
            first_name: "Arif",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: 46,
            upper_size_letter: "M",
            others_size_letter: "M",
            email_comms_type: "I want all emails",
            sms_comms: false
        };
        
        // Act
        const result = updateUserSchema.safeParse(testData);

        // Assert
        expect(result.success).toBe(true);
        expect(result.data.upper_size_number).toBe(46);
    });

    test('updateUserSchema - should accept valid upper_size_number (44)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            phone_number: "917560847544",
            first_name: "Arif",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: 44,
            upper_size_letter: "M",
            others_size_letter: "M",
            email_comms_type: "I want all emails",
            sms_comms: false
        };
        
        // Act
        const result = updateUserSchema.safeParse(testData);

        // Assert
        expect(result.success).toBe(true);
        expect(result.data.upper_size_number).toBe(44);
    });

    test('updateUserSchema - should accept valid upper_size_number (42)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            phone_number: "917560847544",
            first_name: "Arif",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: 42,
            upper_size_letter: "M",
            others_size_letter: "M",
            email_comms_type: "I want all emails",
            sms_comms: false
        };
        
        // Act
        const result = updateUserSchema.safeParse(testData);

        // Assert
        expect(result.success).toBe(true);
        expect(result.data.upper_size_number).toBe(42);
    });

    test('updateUserSchema - should accept valid upper_size_number (40)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            phone_number: "917560847544",
            first_name: "Arif",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: 40,
            upper_size_letter: "M",
            others_size_letter: "M",
            email_comms_type: "I want all emails",
            sms_comms: false
        };
        
        // Act
        const result = updateUserSchema.safeParse(testData);

        // Assert
        expect(result.success).toBe(true);
        expect(result.data.upper_size_number).toBe(40);
    });

    test('updateUserSchema - should accept valid upper_size_number (38)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            phone_number: "917560847544",
            first_name: "Arif",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: 38,
            upper_size_letter: "M",
            others_size_letter: "M",
            email_comms_type: "I want all emails",
            sms_comms: false
        };
        
        // Act
        const result = updateUserSchema.safeParse(testData);

        // Assert
        expect(result.success).toBe(true);
        expect(result.data.upper_size_number).toBe(38);
    });

    test('updateUserSchema - should accept valid upper_size_number (36)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            phone_number: "917560847544",
            first_name: "Arif",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: 36,
            upper_size_letter: "M",
            others_size_letter: "M",
            email_comms_type: "I want all emails",
            sms_comms: false
        };
        
        // Act
        const result = updateUserSchema.safeParse(testData);

        // Assert
        expect(result.success).toBe(true);
        expect(result.data.upper_size_number).toBe(36);
    });

    test('updateUserSchema - should reject invalid upper_size_number (48 - out of range)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            phone_number: "917560847544",
            first_name: "Arif",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: 48,
            upper_size_letter: "M",
            others_size_letter: "M",
            email_comms_type: "I want all emails",
            sms_comms: false
        };
        
        // Act
        const result = updateUserSchema.safeParse(testData);

        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].message).toBe('The upper_size_number field must have any one of the following integers as a value: 46, 44, 42, 40, 38 or 36.');
        expect(testData.upper_size_number).toBe(48);
    });

    test('updateUserSchema - should reject invalid upper_size_number (34 - out of range)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            phone_number: "917560847544",
            first_name: "Arif",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: 34,
            upper_size_letter: "M",
            others_size_letter: "M",
            email_comms_type: "I want all emails",
            sms_comms: false
        };
        
        // Act
        const result = updateUserSchema.safeParse(testData);

        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].message).toBe('The upper_size_number field must have any one of the following integers as a value: 46, 44, 42, 40, 38 or 36.');
        expect(testData.upper_size_number).toBe(34);
    });

    test('updateUserSchema - should reject invalid upper_size_number datatype (string)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            phone_number: "917560847544",
            first_name: "Arif",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: "46",
            upper_size_letter: "M",
            others_size_letter: "M",
            email_comms_type: "I want all emails",
            sms_comms: false
        };
        
        // Act
        const result = updateUserSchema.safeParse(testData);

        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('invalid_type');
        expect(testData.upper_size_number).toBe("46");
    });

    test('updateUserSchema - should reject missing upper_size_number (null)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            phone_number: "917560847544",
            first_name: "Arif",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: null,
            upper_size_letter: "M",
            others_size_letter: "M",
            email_comms_type: "I want all emails",
            sms_comms: false
        };
        
        // Act
        const result = updateUserSchema.safeParse(testData);

        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('invalid_type');
        expect(testData.upper_size_number).toBe(null);
    });
});