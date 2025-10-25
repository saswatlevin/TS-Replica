const { userRequestSchema } = require('../../userSchemas');
const mongoose = require('mongoose');

describe('userRequestSchema - email Field Tests', () => {
    test('userRequestSchema - should accept valid email with correct datatype (string)', () => {
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
        console.log("userRequestSchema - should accept valid email with correct datatype (string) - result?.error?.issues ",   result?.error?.issues);
        // Assert
        expect(result.success).toBe(true);
        expect(typeof result.data.email).toBe('string');
        expect(result.data.email).toBe("abc_d01@hostmail.com");
    });

    test('userRequestSchema - should reject email with invalid datatype (number)', () => {
        // Arrange
        const testData = {
            email: 100,
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
        console.log("userRequestSchema - should reject email with invalid datatype (number) - result?.error?.issues ",   result?.error?.issues);
        // Assert
        expect(result.success).toBe(false);
        expect(testData.email).toBe(100);
        expect(result.error.issues[0].code).toBe('invalid_type');
    });

    test('userRequestSchema - should reject email with invalid format (missing @ symbol)', () => {
        // Arrange
        const testData = {
            email: "abc_d01hostmail.com",
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
        console.log("userRequestSchema - should reject email with invalid format (missing @ symbol) - result?.error?.issues ",   result?.error?.issues);
        // Assert
        expect(result.success).toBe(false);
        expect(testData.email).toBe("abc_d01hostmail.com");
        expect(result.error.issues[0].message).toBe('The email field should contain a valid email.');
    });

    test('userRequestSchema - should reject email with insufficient length (8 characters)', () => {
        // Arrange
        const testData = {
            email: "a@bc.com",
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
        console.log("userRequestSchema - should reject email with insufficient length (8 characters) - result?.error?.issues ",   result?.error?.issues);
        // Assert
        expect(result.success).toBe(false);
        expect(testData.email).toBe("a@bc.com");
        expect(testData.email.length).toBe(8);
        expect(result.error.issues[0].code).toBe('too_small');
    });

    test('userRequestSchema - should reject email with excessive length (31 characters)', () => {
        // Arrange
        const testData = {
            email: "abcdefghijklm@mnopqrstuvwxa.com",
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
        console.log("userRequestSchema - should reject email with excessive length (31 characters) - result?.error?.issues ",   result?.error?.issues);
        // Assert
        expect(result.success).toBe(false);
        expect(testData.email).toBe("abcdefghijklm@mnopqrstuvwxa.com");
        expect(testData.email.length).toBe(31);
        expect(result.error.issues[0].code).toBe('too_big');
    });

    test('userRequestSchema - should reject empty email (0 characters)', () => {
        // Arrange
        const testData = {
            email: "",
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
        console.log("userRequestSchema - should reject empty email (0 characters) - result?.error?.issues ",   result?.error?.issues);
        // Assert
        expect(result.success).toBe(false);
        expect(testData.email).toBe("");
        expect(result.error.issues[0].code).toBe('too_small');
    });

    test('userRequestSchema - should reject missing email (null value)', () => {
        // Arrange
        const testData = {
            email: null,
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
        console.log("userRequestSchema - should reject missing email (null value) - result?.error?.issues ",   result?.error?.issues);
        // Assert
        expect(result.success).toBe(false);
        expect(testData.email).toBe(null);
        expect(result.error.issues[0].code).toBe('invalid_type');
    });
});