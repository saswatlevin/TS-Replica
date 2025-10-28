// Designed by me, Implemented by AI, Verified by me
const { userShippingAddressResponseSchema } = require('../../userSchemas');
const mongoose = require('mongoose');

describe('userShippingAddressResponseSchema - Upper Size Number Individual Field Validation Tests', () => {
    
    describe('Upper Size Number Field Validation Tests', () => {
        test('should accept valid upper size number value (46)', () => {
            // Arrange
            const validUserData = {
                _id: new mongoose.Types.ObjectId("656f7c9a8b3e4f1d2a7b9c0e"),
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
                __v: 0
            };

            // Act
            const result = userShippingAddressResponseSchema.safeParse(validUserData);
            console.log("userShippingAddressResponseSchema - should accept valid upper size number value (46) - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.upper_size_number).toBe(46);
            expect(result.error).toBeUndefined();
        });

        test('should accept valid upper size number value (44)', () => {
            // Arrange
            const validUserData = {
                _id: new mongoose.Types.ObjectId("656f7c9a8b3e4f1d2a7b9c0e"),
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
                __v: 0
            };

            // Act
            const result = userShippingAddressResponseSchema.safeParse(validUserData);
            console.log("userShippingAddressResponseSchema - should accept valid upper size number value (44) - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.upper_size_number).toBe(44);
            expect(result.error).toBeUndefined();
        });

        test('should accept valid upper size number value (42)', () => {
            // Arrange
            const validUserData = {
                _id: new mongoose.Types.ObjectId("656f7c9a8b3e4f1d2a7b9c0e"),
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
                __v: 0
            };

            // Act
            const result = userShippingAddressResponseSchema.safeParse(validUserData);
            console.log("userShippingAddressResponseSchema - should accept valid upper size number value (42) - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.upper_size_number).toBe(42);
            expect(result.error).toBeUndefined();
        });

        test('should accept valid upper size number value (40)', () => {
            // Arrange
            const validUserData = {
                _id: new mongoose.Types.ObjectId("656f7c9a8b3e4f1d2a7b9c0e"),
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
                __v: 0
            };

            // Act
            const result = userShippingAddressResponseSchema.safeParse(validUserData);
            console.log("userShippingAddressResponseSchema - should accept valid upper size number value (40) - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.upper_size_number).toBe(40);
            expect(result.error).toBeUndefined();
        });

        test('should accept valid upper size number value (38)', () => {
            // Arrange
            const validUserData = {
                _id: new mongoose.Types.ObjectId("656f7c9a8b3e4f1d2a7b9c0e"),
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
                __v: 0
            };

            // Act
            const result = userShippingAddressResponseSchema.safeParse(validUserData);
            console.log("userShippingAddressResponseSchema - should accept valid upper size number value (38) - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.upper_size_number).toBe(38);
            expect(result.error).toBeUndefined();
        });

        test('should accept valid upper size number value (36)', () => {
            // Arrange
            const validUserData = {
                _id: new mongoose.Types.ObjectId("656f7c9a8b3e4f1d2a7b9c0e"),
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
                __v: 0
            };

            // Act
            const result = userShippingAddressResponseSchema.safeParse(validUserData);
            console.log("userShippingAddressResponseSchema - should accept valid upper size number value (36) - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.upper_size_number).toBe(36);
            expect(result.error).toBeUndefined();
        });

        test('should reject invalid upper size number value (48)', () => {
            // Arrange
            const invalidUserData = {
                _id: new mongoose.Types.ObjectId("656f7c9a8b3e4f1d2a7b9c0e"),
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
                __v: 0
            };

            // Act
            const result = userShippingAddressResponseSchema.safeParse(invalidUserData);
            console.log("userShippingAddressResponseSchema - should reject invalid upper size number value (48) - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].message).toBe("The upper_size_number field must have any one of the following integers as a value: 46, 44, 42, 40, 38 or 36.");
            expect(invalidUserData.upper_size_number).toBe(48);
        });

        test('should reject invalid upper size number value (34)', () => {
            // Arrange
            const invalidUserData = {
                _id: new mongoose.Types.ObjectId("656f7c9a8b3e4f1d2a7b9c0e"),
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
                __v: 0
            };

            // Act
            const result = userShippingAddressResponseSchema.safeParse(invalidUserData);
            console.log("userShippingAddressResponseSchema - should reject invalid upper size number value (34) - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].message).toBe("The upper_size_number field must have any one of the following integers as a value: 46, 44, 42, 40, 38 or 36.");
            expect(invalidUserData.upper_size_number).toBe(34);
        });

        test('should reject invalid upper size number datatype (string "46")', () => {
            // Arrange
            const invalidUserData = {
                _id: new mongoose.Types.ObjectId("656f7c9a8b3e4f1d2a7b9c0e"),
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
                __v: 0
            };

            // Act
            const result = userShippingAddressResponseSchema.safeParse(invalidUserData);
            console.log("userShippingAddressResponseSchema - should reject invalid upper size number datatype (string \"46\") - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBe("invalid_type");
            expect(invalidUserData.upper_size_number).toBe("46");
        });

        test('should reject missing upper size number (null)', () => {
            // Arrange
            const invalidUserData = {
                _id: new mongoose.Types.ObjectId("656f7c9a8b3e4f1d2a7b9c0e"),
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
                __v: 0
            };

            // Act
            const result = userShippingAddressResponseSchema.safeParse(invalidUserData);
            console.log("userShippingAddressResponseSchema - should reject missing upper size number (null) - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBe("invalid_type");
            expect(invalidUserData.upper_size_number).toBe(null);
        });
    });
});
