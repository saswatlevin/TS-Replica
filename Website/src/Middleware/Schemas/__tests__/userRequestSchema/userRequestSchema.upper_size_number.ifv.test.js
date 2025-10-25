const mongoose = require('mongoose');
const { userRequestSchema } = require('../../userSchemas');

describe('userRequestSchema - Upper Size Number Field Validation Tests', () => {
    test('userRequestSchema - should accept valid upper_size_number (46)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            password: "Soyuz@1966#USSR",
            phone_number: "917560847544",
            first_name: "Arif",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: 46,
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
        expect(result.data.upper_size_number).toBe(46);
    });

    test('userRequestSchema - should accept valid upper_size_number (44)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            password: "Soyuz@1966#USSR",
            phone_number: "917560847544",
            first_name: "Arif",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: 44,
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
        expect(result.data.upper_size_number).toBe(44);
    });

    test('userRequestSchema - should accept valid upper_size_number (42)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            password: "Soyuz@1966#USSR",
            phone_number: "917560847544",
            first_name: "Arif",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: 42,
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
        expect(result.data.upper_size_number).toBe(42);
    });

    test('userRequestSchema - should accept valid upper_size_number (40)', () => {
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
        expect(result.data.upper_size_number).toBe(40);
    });

    test('userRequestSchema - should accept valid upper_size_number (38)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            password: "Soyuz@1966#USSR",
            phone_number: "917560847544",
            first_name: "Arif",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: 38,
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
        expect(result.data.upper_size_number).toBe(38);
    });

    test('userRequestSchema - should accept valid upper_size_number (36)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            password: "Soyuz@1966#USSR",
            phone_number: "917560847544",
            first_name: "Arif",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: 36,
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
        expect(result.data.upper_size_number).toBe(36);
    });

    test('userRequestSchema - should reject invalid upper_size_number (48 - out of range)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            password: "Soyuz@1966#USSR",
            phone_number: "917560847544",
            first_name: "Arif",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: 48,
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
        expect(result.error.issues[0].message).toBe('The upper_size_number field must have any one of the following integers as a value: 46, 44, 42, 40, 38 or 36.');
        expect(testData.upper_size_number).toBe(48);
    });

    test('userRequestSchema - should reject invalid upper_size_number (34 - out of range)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            password: "Soyuz@1966#USSR",
            phone_number: "917560847544",
            first_name: "Arif",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: 34,
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
        expect(result.error.issues[0].message).toBe('The upper_size_number field must have any one of the following integers as a value: 46, 44, 42, 40, 38 or 36.');
        expect(testData.upper_size_number).toBe(34);
    });

    test('userRequestSchema - should reject invalid upper_size_number datatype (string)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            password: "Soyuz@1966#USSR",
            phone_number: "917560847544",
            first_name: "Arif",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: "46",
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
        expect(result.error.issues[0].code).toBe('invalid_type');
        expect(testData.upper_size_number).toBe("46");
    });

    test('userRequestSchema - should reject missing upper_size_number (null)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            password: "Soyuz@1966#USSR",
            phone_number: "917560847544",
            first_name: "Arif",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: null,
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
        expect(result.error.issues[0].code).toBe('invalid_type');
        expect(testData.upper_size_number).toBe(null);
    });
});