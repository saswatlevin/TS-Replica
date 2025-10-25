const { userRequestSchema } = require('../../userSchemas');
const mongoose = require('mongoose');

describe('userRequestSchema - password Field Tests', () => {
    test('userRequestSchema - should accept valid password hash with correct format', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            password: "Soyuz@1966#USSR",
            phone_number: "917560847544",
            first_name: "Arif",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: 40,
            upper_size_letter: "M",
            others_size_letter: "M",
            email_comms_type: "I want all emails",
            sms_comms: false,
            ShippingAddresses: [],
            CartItems: [],
        };
        
        // Act
        const result = userRequestSchema.safeParse(testData);
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.password).toBe("Soyuz@1966#USSR");
        expect(typeof result.data.password).toBe('string');
    });

    test('userRequestSchema - should reject password hash with insufficient length (below 97 characters)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            password: "Soyuz@1966#USSR",
            phone_number: "917560847544",
            first_name: "Arif",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: 40,
            upper_size_letter: "M",
            others_size_letter: "M",
            email_comms_type: "I want all emails",
            sms_comms: false,
            ShippingAddresses: [],
            CartItems: [],
        };
        
        // Act
        const result = userRequestSchema.safeParse(testData);
        
        // Assert
        expect(result.success).toBe(false);
        expect(testData.password).toBe("Soyuz@1966#USSR");
        expect(result.error.issues[0].code).toBe('too_small');
    });

    test('userRequestSchema - should reject password hash with excessive length (above 97 characters)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            password: "Soyuz@1966#USSRA",
            phone_number: "917560847544",
            first_name: "Arif",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: 40,
            upper_size_letter: "M",
            others_size_letter: "M",
            email_comms_type: "I want all emails",
            sms_comms: false,
            ShippingAddresses: [],
            CartItems: [],
        };
        
        // Act
        const result = userRequestSchema.safeParse(testData);
        
        // Assert
        expect(result.success).toBe(false);
        expect(testData.password).toBe("Soyuz@1966#USSRA");
        expect(result.error.issues[0].code).toBe('too_big');
    });

    test('userRequestSchema - should reject missing password hash (null value)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            password: null,
            phone_number: "917560847544",
            first_name: "Arif",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: 40,
            upper_size_letter: "M",
            others_size_letter: "M",
            email_comms_type: "I want all emails",
            sms_comms: false,
            ShippingAddresses: [],
            CartItems: [],
        };
        
        // Act
        const result = userRequestSchema.safeParse(testData);
        
        // Assert
        expect(result.success).toBe(false);
        expect(testData.password).toBe(null);
        expect(result.error.issues[0].code).toBe('invalid_type');
    });
});