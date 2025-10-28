// Designed by me, Implemented by AI, Verified by me
const { userShippingAddressResponseSchema } = require('../../userSchemas');
const mongoose = require('mongoose');

describe('userShippingAddressResponseSchema - First Name Individual Field Validation Tests', () => {
    
    describe('First Name Field Validation Tests', () => {
        test('should accept valid first name datatype', () => {
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
            console.log("userShippingAddressResponseSchema - should accept valid first name datatype - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.first_name).toBe("Arif");
            expect(result.error).toBeUndefined();
        });

        test('should reject invalid first name datatype (number)', () => {
            // Arrange
            const invalidUserData = {
                _id: new mongoose.Types.ObjectId("656f7c9a8b3e4f1d2a7b9c0e"),
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
                __v: 0
            };

            // Act
            const result = userShippingAddressResponseSchema.safeParse(invalidUserData);
            console.log("userShippingAddressResponseSchema - should reject invalid first name datatype (number) - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBe("invalid_type");
            expect(invalidUserData.first_name).toBe(123);
        });

        test('should reject invalid first name value (format with underscore)', () => {
            // Arrange
            const invalidUserData = {
                _id: new mongoose.Types.ObjectId("656f7c9a8b3e4f1d2a7b9c0e"),
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
                __v: 0
            };

            // Act
            const result = userShippingAddressResponseSchema.safeParse(invalidUserData);
            console.log("userShippingAddressResponseSchema - should reject invalid first name value (format with underscore) - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBe("invalid_string");
            expect(invalidUserData.first_name).toBe("Ari_f");
        });

        test('should reject empty first name', () => {
            // Arrange
            const invalidUserData = {
                _id: new mongoose.Types.ObjectId("656f7c9a8b3e4f1d2a7b9c0e"),
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
                __v: 0
            };

            // Act
            const result = userShippingAddressResponseSchema.safeParse(invalidUserData);
            console.log("userShippingAddressResponseSchema - should reject empty first name - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBe("too_small");
            expect(invalidUserData.first_name.length).toBe(0);
            expect(invalidUserData.first_name).toBe("");
        });

        test('should reject invalid first name length (above maximum 100 characters)', () => {
            // Arrange
            const invalidUserData = {
                _id: new mongoose.Types.ObjectId("656f7c9a8b3e4f1d2a7b9c0e"),
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:42:04",
                email: "abc_d01@hostmail.com",
                password: "$argon2id$v=19$m=65536,t=3,p=4$JysnBuZt/shJJ5zu99+tSw$ZuaSU6gMbJqHgVRXHaSN8Il7VsN2gPJSjTDBogGkt5I",
                phone_number: "917560847544",
                first_name: "AbCde-FgHiJkL'mNoPqRsTuVwXyZ-aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkL'mNoPqRsTuVwXyZiuyhjklopopmnbghyta",
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
            const result = userShippingAddressResponseSchema.safeParse(invalidUserData);
            console.log("userShippingAddressResponseSchema - should reject invalid first name length (above maximum 100 characters) - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBe("too_big");
            expect(invalidUserData.first_name.length).toBe(101);
            expect(invalidUserData.first_name).toBe("AbCde-FgHiJkL'mNoPqRsTuVwXyZ-aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkL'mNoPqRsTuVwXyZiuyhjklopopmnbghyta");
        });

        test('should reject missing first name (null)', () => {
            // Arrange
            const invalidUserData = {
                _id: new mongoose.Types.ObjectId("656f7c9a8b3e4f1d2a7b9c0e"),
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
                __v: 0
            };

            // Act
            const result = userShippingAddressResponseSchema.safeParse(invalidUserData);
            console.log("userShippingAddressResponseSchema - should reject missing first name (null) - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBe("invalid_type");
            expect(invalidUserData.first_name).toBe(null);
        });
    });
});
