const { registerUserResponseSchema } = require('../../userSchemas');
const mongoose = require('mongoose');

describe('registerUserResponseSchema - date_created_at Field Tests', () => {
    test('registerUserResponseSchema - should accept valid date_created_at with correct datatype (string)', () => {
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
        expect(result.data.date_created_at).toBe("2025-10-04T12:42:04");
        expect(typeof result.data.date_created_at).toBe('string');
    });

    test('registerUserResponseSchema - should reject date_created_at with invalid datatype (number)', () => {
        // Arrange
        const testData = {
            user_id: "ab01dhiojniu",
            docType: "USER",
            date_created_at: 251004124204,
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
        expect(result.success).toBe(false);
        expect(testData.date_created_at).toBe(251004124204);
        expect(result.error.issues[0].code).toBe('invalid_type');
    });

    test('registerUserResponseSchema - should reject date_created_at with invalid format (invalid seconds)', () => {
        // Arrange
        const testData = {
            user_id: "ab01dhiojniu",
            docType: "USER",
            date_created_at: "2025-10-04T12:42:99",
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

        console.log("registerUserResponseSchema - should reject date_created_at with invalid format (invalid seconds) - result?.error?.issues ",   result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(testData.date_created_at).toBe("2025-10-04T12:42:99");
        // Checked for message and not code since code is "custom", so not specific.
        expect(result.error.issues[0].message).toBe("This date field must receive date in the format YYYY-MM-DDTHH:MM:SS");
    });

    test('registerUserResponseSchema - should reject date_created_at created with insufficient length (18 characters) ', () => {
        // Arrange
        const testData = {
            user_id: "ab01dhiojniu",
            docType: "USER",
            date_created_at: "2025-10-04T12:45:3",
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

        console.log("registerUserResponseSchema - should reject date_created_at created with insufficient length (18 characters) - result?.error?.issues ",   result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(testData.date_created_at.length).toBe(18);
        expect(testData.date_created_at).toBe("2025-10-04T12:45:3");
        expect(result.error.issues[0].code).toBe("too_small");
    });

    test('registerUserResponseSchema - should reject date_created_at created with excessive length (21 characters) ', () => {
        // Arrange
        const testData = {
            user_id: "ab01dhiojniu",
            docType: "USER",
            date_created_at: "2025-10-22T13:45:30.1",
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

        console.log("registerUserResponseSchema - should reject date_created_at created with excessive length (21 characters) - result?.error?.issues ",   result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(testData.date_created_at).toBe("2025-10-22T13:45:30.1");
        expect(testData.date_created_at.length).toBe(21);
        expect(result.error.issues[0].code).toBe("too_big");
    });

    test('registerUserResponseSchema - should reject empty date_created_at (0 characters) ', () => {
        // Arrange
        const testData = {
            user_id: "ab01dhiojniu",
            docType: "USER",
            date_created_at: "",
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

        console.log("registerUserResponseSchema - should reject empty date_created_at (0 characters) - result?.error?.issues ",   result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(testData.date_created_at).toBe("");
        expect(testData.date_created_at.length).toBe(0);
        expect(result.error.issues[0].code).toBe("too_small");
    });

    test('registerUserResponseSchema - should reject missing date_created_at (null) ', () => {
        // Arrange
        const testData = {
            user_id: "ab01dhiojniu",
            docType: "USER",
            date_created_at: null,
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

        console.log("registerUserResponseSchema - should reject missing date_created_at (null) - result?.error?.issues ",   result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(testData.date_created_at).toBe(null);
        expect(result.error.issues[0].code).toBe("invalid_type");
    });
});