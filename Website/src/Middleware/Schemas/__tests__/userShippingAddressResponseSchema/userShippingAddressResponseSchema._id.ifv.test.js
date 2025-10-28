// Designed by me, Implemented by AI, Verified by me
const { userShippingAddressResponseSchema } = require('../../userSchemas');
const mongoose = require('mongoose');

describe('userShippingAddressResponseSchema - _id Individual Field Validation Tests', () => {
    
    describe('_id Field Validation Tests', () => {
        test('should accept valid _id value', () => {
            // Arrange
            const validUserData = {
                _id: {
                    _id: new mongoose.Types.ObjectId("656f7c9a8b3e4f1d2a7b9c0e")
                },
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
            console.log("userShippingAddressResponseSchema - should accept valid _id value - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data._id).toBeDefined();
            expect(result.data._id._id.toString()).toBe("656f7c9a8b3e4f1d2a7b9c0e");
            expect(result.error).toBeUndefined();
        });

        test('should reject invalid _id value (string)', () => {
            // Arrange
            const invalidUserData = {
                _id: "656f7c9a8b3e4f1d2a7b9c0e",
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
            const result = userShippingAddressResponseSchema.safeParse(invalidUserData);
            console.log("userShippingAddressResponseSchema - should reject invalid _id value (string) - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBeDefined();
            expect(result.error.issues[0].message).toBeDefined();
            expect(invalidUserData._id).toBe("656f7c9a8b3e4f1d2a7b9c0e");
        });

        test('should reject invalid _id value (number)', () => {
            // Arrange
            const invalidUserData = {
                _id: 123456789,
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
            const result = userShippingAddressResponseSchema.safeParse(invalidUserData);
            console.log("userShippingAddressResponseSchema - should reject invalid _id value (number) - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBeDefined();
            expect(result.error.issues[0].message).toBeDefined();
            expect(invalidUserData._id).toBe(123456789);
        });

        test('should reject missing _id value', () => {
            // Arrange
            const invalidUserData = {
                _id: null,
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
            const result = userShippingAddressResponseSchema.safeParse(invalidUserData);
            console.log("userShippingAddressResponseSchema - should reject missing _id value - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBeDefined();
            expect(result.error.issues[0].message).toBeDefined();
            expect(invalidUserData._id).toBe(null);
        });
    });
});
