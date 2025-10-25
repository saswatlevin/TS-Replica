const mongoose = require('mongoose');
const { userRequestSchema } = require('../../userSchemas');

describe('userRequestSchema - __v Field Tests', () => {
    test('userRequestSchema - should accept valid __v value', () => {
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
        
        console.log("userRequestSchema - should accept valid __v value result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.__v).toBe(0);
    });

    test('userRequestSchema - should reject __v with invalid datatype (empty string)', () => {
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
        
        console.log("userRequestSchema - should reject __v with invalid datatype (empty string) result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('invalid_type');
        expect(testData.__v).toBe("");
    });

    test('userRequestSchema - should reject missing __v value (null)', () => {
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
        
        console.log("userRequestSchema - should reject missing __v value (null) result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('invalid_type');
        expect(testData.__v).toBe(null);
    });
});
