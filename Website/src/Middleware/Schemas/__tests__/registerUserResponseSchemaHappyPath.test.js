// Designed by me, Implemented by AI, Verified by me
const { registerUserResponseSchema } = require('../userSchemas');
const mongoose = require('mongoose');

describe('registerUserResponseSchema - Happy Path Tests', () => {
    
    describe('Basic Happy Path Test Cases', () => {
        test('should accept complete valid user registration data with admin role', () => {
            // Arrange
            const validUserData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T14:52:36",
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
            const result = registerUserResponseSchema.safeParse(validUserData);

            //console.log("registerUserResponseSchema - should accept complete valid user registration data with admin role' - result?.error?.issues ",   result?.error?.issues);

            //console.log("validUserData ", validUserData);

            //console.log("result?.data ", result?.data);

            // Assert
            expect(result.success).toBe(true);
            expect(result.error).toBeUndefined();
        });

       test('should accept complete valid user registration data with user role', () => {
            // Arrange
            const validUserData = {
                user_id: "mn9i1asdfgvc",
                docType: "USER",
                date_created_at: "2025-10-24T11:45:04",
                email: "dca_101@hostmail.com",
                password: "$argon2id$v=19$m=65536,t=3,p=4$JysnBuZt/shJJ5zu99+tSw$ZuaSU6gMbJqHgVRXHaSN8Il7VsN2gPJSjTDBogGkt5I",
                phone_number: "917560847544",
                first_name: "Yuri",
                last_name: "Koptev",
                user_role: "user",
                upper_size_number: 42,
                upper_size_letter: "L",
                others_size_letter: "L",
                email_comms_type: "One weekly recap",
                sms_comms: true,
                ShippingAddresses: [],
                CartItems: [],
                _id: new mongoose.Types.ObjectId("656f7c9a8b3e4f1d2a7b9c0e"),
                __v: 0
            };

            // Act
            const result = registerUserResponseSchema.safeParse(validUserData);

            console.log("registerUserResponseSchema - should accept complete valid user registration data with user role' - result?.error?.issues ",   result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.error).toBeUndefined();
        });
    });

    describe('Happy Path Boundary Test Cases', () => {
        test('should accept valid date boundary value (59:59 seconds)', () => {
            // Arrange
            const validUserData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:59:59",
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
            const result = registerUserResponseSchema.safeParse(validUserData);

            console.log("registerUserResponseSchema - should accept valid date boundary value (59:59 seconds)' - result?.error?.issues ",   result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.date_created_at).toBe("2025-10-04T12:59:59");
            expect(result.error).toBeUndefined();
        });

        test('should accept valid email with special characters', () => {
            // Arrange
            const validUserData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:42:04",
                email: "abc_d44@hostmail.com",
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
            const result = registerUserResponseSchema.safeParse(validUserData);

            console.log("registerUserResponseSchema - should accept valid email with special characters' - result?.error?.issues ",   result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.email).toBe("abc_d44@hostmail.com");
            expect(result.error).toBeUndefined();
        });

        test('should accept email at minimum length boundary (9 characters)', () => {
            // Arrange
            const validUserData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:42:04",
                email: "ab@de.com",
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
            const result = registerUserResponseSchema.safeParse(validUserData);

            console.log("registerUserResponseSchema - should accept email at minimum length boundary (9 characters)' - result?.error?.issues ",   result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.email).toBe("ab@de.com");
            expect(result.data.email.length).toBe(9);
            expect(result.error).toBeUndefined();
        });

        test('should accept email at maximum length boundary (30 characters)', () => {
            // Arrange
            const validUserData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:42:04",
                email: "abcdefghijklm@mnopqrstuvwx.com",
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
            const result = registerUserResponseSchema.safeParse(validUserData);

            console.log("registerUserResponseSchema - should accept email at maximum length boundary (30 characters)' - result?.error?.issues ",   result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.email).toBe("abcdefghijklm@mnopqrstuvwx.com");
            expect(result.data.email.length).toBe(30);
            expect(result.error).toBeUndefined();
        });

        test('should accept phone number at minimum length boundary (8 digits)', () => {
            // Arrange
            const validUserData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:42:04",
                email: "abc_d01@hostmail.com",
                password: "$argon2id$v=19$m=65536,t=3,p=4$JysnBuZt/shJJ5zu99+tSw$ZuaSU6gMbJqHgVRXHaSN8Il7VsN2gPJSjTDBogGkt5I",
                phone_number: "68340021",
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
            const result = registerUserResponseSchema.safeParse(validUserData);

            console.log("registerUserResponseSchema - should accept phone number at minimum length boundary (8 digits)' - result?.error?.issues ",   result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.phone_number).toBe("68340021");
            expect(result.data.phone_number.length).toBe(8);
            expect(result.error).toBeUndefined();
        });

        test('should accept phone number at maximum length boundary (12 digits)', () => {
            // Arrange
            const validUserData = {
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
            const result = registerUserResponseSchema.safeParse(validUserData);

            console.log("registerUserResponseSchema - should accept phone number at maximum length boundary (12 digits)' - result?.error?.issues ",   result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.phone_number).toBe("917560847544");
            expect(result.data.phone_number.length).toBe(12);
            expect(result.error).toBeUndefined();
        });

        test('should accept first name with special characters (apostrophe)', () => {
            // Arrange
            const validUserData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:42:04",
                email: "abc_d01@hostmail.com",
                password: "$argon2id$v=19$m=65536,t=3,p=4$JysnBuZt/shJJ5zu99+tSw$ZuaSU6gMbJqHgVRXHaSN8Il7VsN2gPJSjTDBogGkt5I",
                phone_number: "917560847544",
                first_name: "Ya'el",
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
            const result = registerUserResponseSchema.safeParse(validUserData);

            console.log("registerUserResponseSchema - should accept first name with special characters (apostrophe)' - result?.error?.issues ",   result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.first_name).toBe("Ya'el");
            expect(result.error).toBeUndefined();
        });

        test('should accept first name at minimum length boundary (1 character)', () => {
            // Arrange
            const validUserData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:42:04",
                email: "abc_d01@hostmail.com",
                password: "$argon2id$v=19$m=65536,t=3,p=4$JysnBuZt/shJJ5zu99+tSw$ZuaSU6gMbJqHgVRXHaSN8Il7VsN2gPJSjTDBogGkt5I",
                phone_number: "917560847544",
                first_name: "A",
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
            const result = registerUserResponseSchema.safeParse(validUserData);

            console.log("registerUserResponseSchema - should accept first name at minimum length boundary (1 character)' - result?.error?.issues ",   result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.first_name).toBe("A");
            expect(result.data.first_name.length).toBe(1);
            expect(result.error).toBeUndefined();
        });

        test('should accept first name at maximum length boundary (100 characters)', () => {
            // Arrange
            const validUserData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:42:04",
                email: "abc_d01@hostmail.com",
                password: "$argon2id$v=19$m=65536,t=3,p=4$JysnBuZt/shJJ5zu99+tSw$ZuaSU6gMbJqHgVRXHaSN8Il7VsN2gPJSjTDBogGkt5I",
                phone_number: "917560847544",
                first_name: "AbCde-FgHiJkL'mNoPqRsTuVwXyZ-aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkL'mNoPqRsTuVwXyZiuyhjklopopmnbghyt",
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
            const result = registerUserResponseSchema.safeParse(validUserData);

            console.log("registerUserResponseSchema - should accept first name at maximum length boundary (100 characters)' - result?.error?.issues ",   result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.first_name).toBe("AbCde-FgHiJkL'mNoPqRsTuVwXyZ-aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkL'mNoPqRsTuVwXyZiuyhjklopopmnbghyt");
            expect(result.data.first_name.length).toBe(100);
            expect(result.error).toBeUndefined();
        });

        test('should accept last name with special characters (hyphen)', () => {
            // Arrange
            const validUserData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:42:04",
                email: "abc_d01@hostmail.com",
                password: "$argon2id$v=19$m=65536,t=3,p=4$JysnBuZt/shJJ5zu99+tSw$ZuaSU6gMbJqHgVRXHaSN8Il7VsN2gPJSjTDBogGkt5I",
                phone_number: "917560847544",
                first_name: "Arif",
                last_name: "Zaghari-Ratcliffe",
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
            const result = registerUserResponseSchema.safeParse(validUserData);

            console.log("registerUserResponseSchema - should accept last name with special characters (hyphen)' - result?.error?.issues ",   result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.last_name).toBe("Zaghari-Ratcliffe");
            expect(result.error).toBeUndefined();
        });

        test('should accept last name at minimum length boundary (1 character)', () => {
            // Arrange
            const validUserData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:42:04",
                email: "abc_d01@hostmail.com",
                password: "$argon2id$v=19$m=65536,t=3,p=4$JysnBuZt/shJJ5zu99+tSw$ZuaSU6gMbJqHgVRXHaSN8Il7VsN2gPJSjTDBogGkt5I",
                phone_number: "917560847544",
                first_name: "Arif",
                last_name: "B",
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
            const result = registerUserResponseSchema.safeParse(validUserData);

            console.log("registerUserResponseSchema - should accept last name at minimum length boundary (1 character)' - result?.error?.issues ",   result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.last_name).toBe("B");
            expect(result.data.last_name.length).toBe(1);
            expect(result.error).toBeUndefined();
        });

        test('should accept last name at maximum length boundary (100 characters)', () => {
            // Arrange
            const validUserData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:42:04",
                email: "abc_d01@hostmail.com",
                password: "$argon2id$v=19$m=65536,t=3,p=4$JysnBuZt/shJJ5zu99+tSw$ZuaSU6gMbJqHgVRXHaSN8Il7VsN2gPJSjTDBogGkt5I",
                phone_number: "917560847544",
                first_name: "Arif",
                last_name: "AbCde-FgHiJkL'mNoPqRsTuVwXyZ-aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkL'mNoPqRsTuVwXyZiuyhjklopopmnbghyt",
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
            const result = registerUserResponseSchema.safeParse(validUserData);

            console.log("registerUserResponseSchema - should accept last name at maximum length boundary (100 characters)' - result?.error?.issues ",   result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.last_name).toBe("AbCde-FgHiJkL'mNoPqRsTuVwXyZ-aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkL'mNoPqRsTuVwXyZiuyhjklopopmnbghyt");
            expect(result.data.last_name.length).toBe(100);
            expect(result.error).toBeUndefined();
        });
    });
});
