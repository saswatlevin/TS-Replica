const mongoose = require('mongoose');
const { registerUserResponseSchema } = require('../../userSchemas');

describe('registerUserResponseSchema - Upper Size Number Field Validation Tests', () => {
    test('registerUserResponseSchema - should accept valid upper_size_number (46)', () => {
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
            upper_size_number: 46,
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

        // Assert
        expect(result.success).toBe(true);
        expect(result.data.upper_size_number).toBe(46);
    });

    test('registerUserResponseSchema - should accept valid upper_size_number (44)', () => {
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
            upper_size_number: 44,
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

        // Assert
        expect(result.success).toBe(true);
        expect(result.data.upper_size_number).toBe(44);
    });

    test('registerUserResponseSchema - should accept valid upper_size_number (42)', () => {
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
            upper_size_number: 42,
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

        // Assert
        expect(result.success).toBe(true);
        expect(result.data.upper_size_number).toBe(42);
    });

    test('registerUserResponseSchema - should accept valid upper_size_number (40)', () => {
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

        // Assert
        expect(result.success).toBe(true);
        expect(result.data.upper_size_number).toBe(40);
    });

    test('registerUserResponseSchema - should accept valid upper_size_number (38)', () => {
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
            upper_size_number: 38,
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

        // Assert
        expect(result.success).toBe(true);
        expect(result.data.upper_size_number).toBe(38);
    });

    test('registerUserResponseSchema - should accept valid upper_size_number (36)', () => {
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
            upper_size_number: 36,
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

        // Assert
        expect(result.success).toBe(true);
        expect(result.data.upper_size_number).toBe(36);
    });

    test('registerUserResponseSchema - should reject invalid upper_size_number (48 - out of range)', () => {
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
            upper_size_number: 48,
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

        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].message).toBe('The upper_size_number field must have any one of the following integers as a value: 46, 44, 42, 40, 38 or 36.');
        expect(testData.upper_size_number).toBe(48);
    });

    test('registerUserResponseSchema - should reject invalid upper_size_number (34 - out of range)', () => {
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
            upper_size_number: 34,
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

        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].message).toBe('The upper_size_number field must have any one of the following integers as a value: 46, 44, 42, 40, 38 or 36.');
        expect(testData.upper_size_number).toBe(34);
    });

    test('registerUserResponseSchema - should reject invalid upper_size_number datatype (string)', () => {
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
            upper_size_number: "46",
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

        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('invalid_type');
        expect(testData.upper_size_number).toBe("46");
    });

    test('registerUserResponseSchema - should reject missing upper_size_number (null)', () => {
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
            upper_size_number: null,
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

        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('invalid_type');
        expect(testData.upper_size_number).toBe(null);
    });
});