const { userRequestSchema } = require('../../userSchemas');
const mongoose = require('mongoose');

describe('userRequestSchema - password Field Tests', () => {
    test('userRequestSchema - should accept valid password with correct format', () => {
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
            CartItems: []
        };
        
        // Act
        const result = userRequestSchema.safeParse(testData);
        
        console.log("userRequestSchema - should accept valid password with correct format - result?.error?.issues ",   result?.error?.issues);

        // Assert
        expect(result.success).toBe(true);
        expect(result.data.password).toBe("Soyuz@1966#USSR");
        expect(typeof result.data.password).toBe('string');
    });

    test('userRequestSchema - should reject password with insufficient length (11 characters)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            password: "Soyuz@1966#",
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
            CartItems: []
        };
        
        // Act
        const result = userRequestSchema.safeParse(testData);

        console.log("userRequestSchema - should reject password with insufficient length (11 characters) - result?.error?.issues ",   result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(testData.password).toBe("Soyuz@1966#");
        expect(testData.password.length).toBe(11);
        expect(result.error.issues[0].code).toBe('too_small');
    });

    test('userRequestSchema - should reject password with excessive length (31 characters)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            password: "Soyuz@1966#USSRA123456789012345",
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
            CartItems: []
        };
        
        // Act
        const result = userRequestSchema.safeParse(testData);
        
        console.log("userRequestSchema - should reject password with excessive length (31 characters) - result?.error?.issues ",   result?.error?.issues);
        // Assert
        expect(result.success).toBe(false);
        expect(testData.password).toBe("Soyuz@1966#USSRA123456789012345");
        expect(testData.password.length).toBe(31);
        expect(result.error.issues[0].code).toBe('too_big');
    });

    test('userRequestSchema - should reject empty password (0 characters)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            password: "",
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
            CartItems: []
        };
        
        // Act
        const result = userRequestSchema.safeParse(testData);
        
        console.log("userRequestSchema - should reject empty password (0 characters) - result?.error?.issues ",   result?.error?.issues);
        // Assert
        expect(result.success).toBe(false);
        expect(testData.password).toBe("");
        expect(testData.password.length).toBe(0);
        expect(result.error.issues[0].code).toBe('too_small');
    });
    
    test('userRequestSchema - should reject missing password (null value)', () => {
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
            CartItems: []
        };
        
        // Act
        const result = userRequestSchema.safeParse(testData);
        
        console.log("userRequestSchema - should reject missing password (null value) - result?.error?.issues ",   result?.error?.issues);
        // Assert
        expect(result.success).toBe(false);
        expect(testData.password).toBe(null);
        expect(result.error.issues[0].code).toBe('invalid_type');
    });
});