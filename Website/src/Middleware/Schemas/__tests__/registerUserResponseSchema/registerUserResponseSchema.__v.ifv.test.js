const mongoose = require('mongoose');
const { registerUserResponseSchema } = require('../../userSchemas');

describe('registerUserResponseSchema - __v Field Tests', () => {
    test('registerUserResponseSchema - should accept valid __v value', () => {
        // Arrange
        const testData = {
            user_id: "ab01dhiojniu",
            docType: "USER",
            date_created_at: "2025-10-04T12:42:04",
            email: "abc_d01@hostmail.com",
            password: "$argon2id$v=19$m=65536,t=3,p=4$JysnBuZt/shJJ5zu99+tSw$ZuaSU6gMbJqHgVRXHaSN8Il7VsN2gPJSjTDBogGkt5I",
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
            _id: new mongoose.Types.ObjectId("656f7c9a8b3e4f1d2a7b9c0e"),
            __v: 0
        };
        
        // Act
        const result = registerUserResponseSchema.safeParse(testData);
        
        console.log("registerUserResponseSchema - should accept valid __v value result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.__v).toBe(0);
    });

    test('registerUserResponseSchema - should reject __v with invalid datatype (empty string)', () => {
        // Arrange
        const testData = {
            user_id: "ab01dhiojniu",
            docType: "USER",
            date_created_at: "2025-10-04T12:42:04",
            email: "abc_d01@hostmail.com",
            password: "$argon2id$v=19$m=65536,t=3,p=4$JysnBuZt/shJJ5zu99+tSw$ZuaSU6gMbJqHgVRXHaSN8Il7VsN2gPJSjTDBogGkt5I",
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
            _id: new mongoose.Types.ObjectId("656f7c9a8b3e4f1d2a7b9c0e"),
            __v: ""
        };
        
        // Act
        const result = registerUserResponseSchema.safeParse(testData);
        
        console.log("registerUserResponseSchema - should reject __v with invalid datatype (empty string) result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('invalid_type');
        expect(testData.__v).toBe("");
    });

    test('registerUserResponseSchema - should reject missing __v value (null)', () => {
        // Arrange
        const testData = {
            user_id: "ab01dhiojniu",
            docType: "USER",
            date_created_at: "2025-10-04T12:42:04",
            email: "abc_d01@hostmail.com",
            password: "$argon2id$v=19$m=65536,t=3,p=4$JysnBuZt/shJJ5zu99+tSw$ZuaSU6gMbJqHgVRXHaSN8Il7VsN2gPJSjTDBogGkt5I",
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
            _id: new mongoose.Types.ObjectId("656f7c9a8b3e4f1d2a7b9c0e"),
            __v: null
        };
        
        // Act
        const result = registerUserResponseSchema.safeParse(testData);
        
        console.log("registerUserResponseSchema - should reject missing __v value (null) result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('invalid_type');
        expect(testData.__v).toBe(null);
    });
});
