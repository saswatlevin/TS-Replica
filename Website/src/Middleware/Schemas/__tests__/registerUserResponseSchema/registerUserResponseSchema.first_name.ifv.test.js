const mongoose = require('mongoose');
const { registerUserResponseSchema } = require('../../userSchemas');

describe('registerUserResponseSchema - First Name Field Validation Tests', () => {
    test('registerUserResponseSchema - should accept valid first_name datatype', () => {
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

        console.log("registerUserResponseSchema - should accept valid first_name datatype - result?.error?.issues ",   result?.error?.issues);
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.first_name).toBe("Arif");
    });

    test('registerUserResponseSchema - should reject invalid first_name datatype (number)', () => {
        // Arrange
        const testData = {
            user_id: "ab01dhiojniu",
            docType: "USER",
            date_created_at: "2025-10-04T12:42:04",
            email: "abc_d01@hostmail.com",
            password: "$argon2id$v=19$m=65536,t=3,p=4$JysnBuZt/shJJ5zu99+tSw$ZuaSU6gMbJqHgVRXHaSN8Il7VsN2gPJSjTDBogGkt5I",
            phone_number: "917560847544",
            first_name: 123,
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

        console.log("registerUserResponseSchema - should reject invalid first_name datatype (number) - result?.error?.issues ",   result?.error?.issues);
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('invalid_type');
        expect(testData.first_name).toBe(123);
    });

    test('registerUserResponseSchema - should reject invalid first_name format (underscore)', () => {
        // Arrange
        const testData = {
            user_id: "ab01dhiojniu",
            docType: "USER",
            date_created_at: "2025-10-04T12:42:04",
            email: "abc_d01@hostmail.com",
            password: "$argon2id$v=19$m=65536,t=3,p=4$JysnBuZt/shJJ5zu99+tSw$ZuaSU6gMbJqHgVRXHaSN8Il7VsN2gPJSjTDBogGkt5I",
            phone_number: "917560847544",
            first_name: "Ari_f",
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

        console.log("registerUserResponseSchema - should reject invalid first_name format (underscore) - result?.error?.issues ",   result?.error?.issues);
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('invalid_string');
        expect(testData.first_name).toBe("Ari_f");
    });

    test('registerUserResponseSchema - should reject empty first_name', () => {
        // Arrange
        const testData = {
            user_id: "ab01dhiojniu",
            docType: "USER",
            date_created_at: "2025-10-04T12:42:04",
            email: "abc_d01@hostmail.com",
            password: "$argon2id$v=19$m=65536,t=3,p=4$JysnBuZt/shJJ5zu99+tSw$ZuaSU6gMbJqHgVRXHaSN8Il7VsN2gPJSjTDBogGkt5I",
            phone_number: "917560847544",
            first_name: "",
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

        console.log("registerUserResponseSchema - should reject empty first_name - result?.error?.issues ",   result?.error?.issues);
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('too_small');
        expect(testData.first_name).toBe("");
    });

    test('registerUserResponseSchema - should reject first_name with excessive length (101 characters)', () => {
        // Arrange
        const testData = {
            user_id: "ab01dhiojniu",
            docType: "USER",
            date_created_at: "2025-10-04T12:42:04",
            email: "abc_d01@hostmail.com",
            password: "$argon2id$v=19$m=65536,t=3,p=4$JysnBuZt/shJJ5zu99+tSw$ZuaSU6gMbJqHgVRXHaSN8Il7VsN2gPJSjTDBogGkt5I",
            phone_number: "917560847544",
            first_name:"AbCde-FgHiJkL'mNoPqRsTuVwXyZ-aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkL'mNoPqRsTuVwXyZiuyhjklopopmnbghyta",
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

        console.log("registerUserResponseSchema - should reject first_name with excessive length (101 characters) - result?.error?.issues ",   result?.error?.issues);
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('too_big');
        expect(testData.first_name).toBe("AbCde-FgHiJkL'mNoPqRsTuVwXyZ-aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkL'mNoPqRsTuVwXyZiuyhjklopopmnbghyta");
        expect(testData.first_name.length).toBe(101);
    });

    test('registerUserResponseSchema - should reject missing first_name', () => {
        // Arrange
        const testData = {
            user_id: "ab01dhiojniu",
            docType: "USER",
            date_created_at: "2025-10-04T12:42:04",
            email: "abc_d01@hostmail.com",
            password: "$argon2id$v=19$m=65536,t=3,p=4$JysnBuZt/shJJ5zu99+tSw$ZuaSU6gMbJqHgVRXHaSN8Il7VsN2gPJSjTDBogGkt5I",
            phone_number: "917560847544",
            first_name: null,
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

        console.log("registerUserResponseSchema - should reject missing first_name - result?.error?.issues ",   result?.error?.issues);
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('invalid_type');
        expect(testData.first_name).toBe(null);
    });
});