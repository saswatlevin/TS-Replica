// Designed by me, Implemented by AI, Verified by me
const { userShippingAddressResponseSchema } = require('../../userSchemas');
const mongoose = require('mongoose');

describe('userShippingAddressResponseSchema - Others Size Letter Individual Field Validation Tests', () => {
    
    describe('Others Size Letter Field Validation Tests', () => {
        test('should accept valid others size letter value (XXL)', () => {
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
                others_size_letter: "XXL",
                email_comms_type: "I want all emails",
                sms_comms: false,
                ShippingAddresses: [],
                CartItems: [],
                __v: 0
            };

            // Act
            const result = userShippingAddressResponseSchema.safeParse(validUserData);
            console.log("userShippingAddressResponseSchema - should accept valid others size letter value (XXL) - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.others_size_letter).toBe("XXL");
            expect(result.error).toBeUndefined();
        });

        test('should accept valid others size letter value (XL)', () => {
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
                others_size_letter: "XL",
                email_comms_type: "I want all emails",
                sms_comms: false,
                ShippingAddresses: [],
                CartItems: [],
                __v: 0
            };

            // Act
            const result = userShippingAddressResponseSchema.safeParse(validUserData);
            console.log("userShippingAddressResponseSchema - should accept valid others size letter value (XL) - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.others_size_letter).toBe("XL");
            expect(result.error).toBeUndefined();
        });

        test('should accept valid others size letter value (L)', () => {
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
                others_size_letter: "L",
                email_comms_type: "I want all emails",
                sms_comms: false,
                ShippingAddresses: [],
                CartItems: [],
                __v: 0
            };

            // Act
            const result = userShippingAddressResponseSchema.safeParse(validUserData);
            console.log("userShippingAddressResponseSchema - should accept valid others size letter value (L) - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.others_size_letter).toBe("L");
            expect(result.error).toBeUndefined();
        });

        test('should accept valid others size letter value (M)', () => {
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
            console.log("userShippingAddressResponseSchema - should accept valid others size letter value (M) - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.others_size_letter).toBe("M");
            expect(result.error).toBeUndefined();
        });

        test('should accept valid others size letter value (S)', () => {
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
                others_size_letter: "S",
                email_comms_type: "I want all emails",
                sms_comms: false,
                ShippingAddresses: [],
                CartItems: [],
                __v: 0
            };

            // Act
            const result = userShippingAddressResponseSchema.safeParse(validUserData);
            console.log("userShippingAddressResponseSchema - should accept valid others size letter value (S) - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.others_size_letter).toBe("S");
            expect(result.error).toBeUndefined();
        });

        test('should accept valid others size letter value (XS)', () => {
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
                others_size_letter: "XS",
                email_comms_type: "I want all emails",
                sms_comms: false,
                ShippingAddresses: [],
                CartItems: [],
                __v: 0
            };

            // Act
            const result = userShippingAddressResponseSchema.safeParse(validUserData);
            console.log("userShippingAddressResponseSchema - should accept valid others size letter value (XS) - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.others_size_letter).toBe("XS");
            expect(result.error).toBeUndefined();
        });

        test('should reject invalid others size letter value (XXXL)', () => {
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
                upper_size_number: 40,
                upper_size_letter: "M",
                others_size_letter: "XXXL",
                email_comms_type: "I want all emails",
                sms_comms: false,
                ShippingAddresses: [],
                CartItems: [],
                __v: 0
            };

            // Act
            const result = userShippingAddressResponseSchema.safeParse(invalidUserData);
            console.log("userShippingAddressResponseSchema - should reject invalid others size letter value (XXXL) - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBe("invalid_enum_value");
            //expect(result.error.issues[0].message).toBeDefined();
            expect(invalidUserData.others_size_letter).toBe("XXXL");
        });

        test('should reject invalid others size letter value (XXS)', () => {
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
                upper_size_number: 40,
                upper_size_letter: "M",
                others_size_letter: "XXS",
                email_comms_type: "I want all emails",
                sms_comms: false,
                ShippingAddresses: [],
                CartItems: [],
                __v: 0
            };

            // Act
            const result = userShippingAddressResponseSchema.safeParse(invalidUserData);
            console.log("userShippingAddressResponseSchema - should reject invalid others size letter value (XXS) - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBe("invalid_enum_value");
            //expect(result.error.issues[0].message).toBeDefined();
            expect(invalidUserData.others_size_letter).toBe("XXS");
        });

        test('should reject invalid others size letter datatype (2615)', () => {
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
                upper_size_number: 40,
                upper_size_letter: "M",
                others_size_letter: 2615,
                email_comms_type: "I want all emails",
                sms_comms: false,
                ShippingAddresses: [],
                CartItems: [],
                __v: 0
            };

            // Act
            const result = userShippingAddressResponseSchema.safeParse(invalidUserData);
            console.log("userShippingAddressResponseSchema - should reject invalid others size letter datatype (2615) - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBe("invalid_type");
            //expect(result.error.issues[0].message).toBeDefined();
            expect(invalidUserData.others_size_letter).toBe(2615);
        });

        test('should reject empty others size letter', () => {
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
                upper_size_number: 40,
                upper_size_letter: "M",
                others_size_letter: "",
                email_comms_type: "I want all emails",
                sms_comms: false,
                ShippingAddresses: [],
                CartItems: [],
                __v: 0
            };

            // Act
            const result = userShippingAddressResponseSchema.safeParse(invalidUserData);
            console.log("userShippingAddressResponseSchema - should reject empty others size letter - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBe("invalid_enum_value");
            //expect(result.error.issues[0].message).toBeDefined();
            expect(invalidUserData.others_size_letter).toBe("");
        });

        test('should reject missing others size letter', () => {
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
                upper_size_number: 40,
                upper_size_letter: "M",
                others_size_letter: null,
                email_comms_type: "I want all emails",
                sms_comms: false,
                ShippingAddresses: [],
                CartItems: [],
                __v: 0
            };

            // Act
            const result = userShippingAddressResponseSchema.safeParse(invalidUserData);
            console.log("userShippingAddressResponseSchema - should reject missing others size letter - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBe("invalid_type");
            //expect(result.error.issues[0].message).toBeDefined();
            expect(invalidUserData.others_size_letter).toBe(null);
        });
    });
});
