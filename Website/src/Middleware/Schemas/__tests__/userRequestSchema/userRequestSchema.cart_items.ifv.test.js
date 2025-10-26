const mongoose = require('mongoose');
const { userRequestSchema } = require('../../userSchemas');

describe('userRequestSchema - CartItems Field Tests', () => {
    test('userRequestSchema - should accept valid CartItems with empty array', () => {
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
        
        console.log("userRequestSchema - should accept valid CartItems with empty array result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(true);
        expect(Array.isArray(result.data.CartItems)).toBe(true);
        expect(result.data.CartItems.length).toBe(0);
    });

    test('userRequestSchema - should reject missing CartItems (null)', () => {
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
            CartItems: null
        };
        
        // Act
        const result = userRequestSchema.safeParse(testData);
        
        console.log("userRequestSchema - should reject missing CartItems (null) result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('invalid_type');
        expect(testData.CartItems).toBe(null);
    });
});