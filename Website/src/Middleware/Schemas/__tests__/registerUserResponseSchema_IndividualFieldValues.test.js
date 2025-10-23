const { registerUserResponseSchema } = require('../userSchemas');
const mongoose = require('mongoose');

describe('registerUserResponseSchema - Individual Field Value Tests', () => {
    
    describe('user_id Field Tests', () => {
        test('should accept valid user_id with correct datatype (string)', () => {
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

            console.log("registerUserResponseSchema - should accept valid user_id with correct datatype (string) - result?.error?.issues ",   result?.error?.issues);
            
            // Assert
            expect(result.success).toBe(true);
            expect(typeof result.data.user_id).toBe('string');
            expect(result.data.user_id).toBe("ab01dhiojniu");
        });

        test('should reject user_id with integer datatype', () => {
            // Arrange
            const testData = {
                user_id: 123456789012,
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
            const result = registerUserResponseSchema.safeParse(testData)
            console.log("registerUserResponseSchema - should reject user_id with integer datatype - result?.error?.issues ",   result?.error?.issues);
            
            // Assert
            expect(testData.user_id).toBe(123456789012);
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBe('invalid_type');
        });
        
        test('should reject user_id with invalid format (underscore) ', () => {
            // Arrange
            const testData = {
                user_id: "ab01dhiojni_",
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
            const result = registerUserResponseSchema.safeParse(testData)
            console.log("registerUserResponseSchema - should reject user_id with invalid format (underscore) - result?.error?.issues ",   result?.error?.issues);
            
            // Assert
            expect(result.success).toBe(false);
            expect(testData.user_id).toBe("ab01dhiojni_");
            expect(result.error.issues[0].code).toBe('invalid_string');
        });

        test('should reject user_id with insufficient length (11 characters) ', () => {
            // Arrange
            const testData = {
                user_id: "ab01dhiojni",
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
            const result = registerUserResponseSchema.safeParse(testData)
            console.log("registerUserResponseSchema - should reject user_id with insufficient length (11 characters) - result?.error?.issues ",   result?.error?.issues);
            
            // Assert
            expect(result.success).toBe(false);
            expect(testData.user_id).toBe("ab01dhiojni");
            expect(testData.user_id.length).toBe(11);
            expect(result.error.issues[0].code).toBe('too_small');
        });

        test('should reject user_id with excessive length (13 characters) ', () => {
            // Arrange
            const testData = {
                user_id: "ab01dhiojnius",
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
            const result = registerUserResponseSchema.safeParse(testData)
            console.log("registerUserResponseSchema - should reject user_id with excessive length (13 characters) - result?.error?.issues ",   result?.error?.issues);
            
            // Assert
            expect(result.success).toBe(false);
            expect(testData.user_id).toBe("ab01dhiojnius");
            expect(testData.user_id.length).toBe(13);
            expect(result.error.issues[0].code).toBe('too_big');
        });

        test('should reject empty user_id (0 characters) ', () => {
            // Arrange
            const testData = {
                user_id: "",
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
            const result = registerUserResponseSchema.safeParse(testData)
            console.log("registerUserResponseSchema - should reject empty user_id (0 characters) - result?.error?.issues ",   result?.error?.issues);
            
            // Assert
            expect(result.success).toBe(false);
            expect(testData.user_id).toBe("");
            expect(testData.user_id.length).toBe(0);
            expect(result.error.issues[0].code).toBe('too_small');
        });

        test('should reject missing user_id (null value) ', () => {
            // Arrange
            const testData = {
                user_id: null,
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
            const result = registerUserResponseSchema.safeParse(testData)
            console.log("registerUserResponseSchema - should reject missing user_id (null value) - result?.error?.issues ",   result?.error?.issues);
            
            // Assert
            expect(result.success).toBe(false);
            expect(testData.user_id).toBe(null);
            expect(result.error.issues[0].code).toBe('invalid_type');
        });
    });

    describe('date_created_at Field Tests', () => {
        test('should accept valid date_created_at with correct datatype (string)', () => {
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

        test('should reject date_created_at with invalid datatype (number)', () => {
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

        test('should reject date_created_at with invalid format (invalid seconds)', () => {
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

        test('should reject date_created_at created with insufficient length (18 characters) ', () => {
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

        test('should reject date_created_at created with excessive length (21 characters) ', () => {
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

        test('should reject empty date_created_at (0 characters) ', () => {
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

        test('should reject missing date_created_at (null) ', () => {
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

    describe('email Field Tests', () => {
        test('should accept valid email with correct datatype (string)', () => {
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
            console.log("registerUserResponseSchema - should accept valid email with correct datatype (string) - result?.error?.issues ",   result?.error?.issues);
            // Assert
            expect(result.success).toBe(true);
            expect(typeof result.data.email).toBe('string');
            expect(result.data.email).toBe("abc_d01@hostmail.com");
        });

        test('should reject email with invalid datatype (number)', () => {
            // Arrange
            const testData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:42:04",
                email: 100,
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
            console.log("registerUserResponseSchema - should reject email with invalid datatype (number) - result?.error?.issues ",   result?.error?.issues);
            // Assert
            expect(result.success).toBe(false);
            expect(testData.email).toBe(100);
            expect(result.error.issues[0].code).toBe('invalid_type');
        });

        test('should reject email with invalid format (missing @ symbol)', () => {
            // Arrange
            const testData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:42:04",
                email: "abc_d01hostmail.com",
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
            console.log("registerUserResponseSchema - should reject email with invalid format (missing @ symbol) - result?.error?.issues ",   result?.error?.issues);
            // Assert
            expect(result.success).toBe(false);
            expect(testData.email).toBe("abc_d01hostmail.com");
            expect(result.error.issues[0].message).toBe('The email field should contain a valid email.');
        });

        test('should reject email with insufficient length (8 characters)', () => {
            // Arrange
            const testData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:42:04",
                email: "a@bc.com",
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
            console.log("registerUserResponseSchema - should reject email with insufficient length (8 characters) - result?.error?.issues ",   result?.error?.issues);
            // Assert
            expect(result.success).toBe(false);
            expect(testData.email).toBe("a@bc.com");
            expect(testData.email.length).toBe(8);
            expect(result.error.issues[0].code).toBe('too_small');
        });

        test('should reject email with excessive length (31 characters)', () => {
            // Arrange
            const testData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:42:04",
                email: "abcdefghijklm@mnopqrstuvwxa.com",
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
            console.log("registerUserResponseSchema - should reject email with excessive length (31 characters) - result?.error?.issues ",   result?.error?.issues);
            // Assert
            expect(result.success).toBe(false);
            expect(testData.email).toBe("abcdefghijklm@mnopqrstuvwxa.com");
            expect(testData.email.length).toBe(31);
            expect(result.error.issues[0].code).toBe('too_big');
        });

        test('should reject empty email (0 characters)', () => {
            // Arrange
            const testData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:42:04",
                email: "",
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
            console.log("registerUserResponseSchema - should reject empty email (0 characters) - result?.error?.issues ",   result?.error?.issues);
            // Assert
            expect(result.success).toBe(false);
            expect(testData.email).toBe("");
            expect(result.error.issues[0].code).toBe('too_small');
        });

        test('should reject missing email (null value)', () => {
            // Arrange
            const testData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:42:04",
                email: null,
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
            console.log("registerUserResponseSchema - should reject missing email (null value) - result?.error?.issues ",   result?.error?.issues);
            // Assert
            expect(result.success).toBe(false);
            expect(testData.email).toBe(null);
            expect(result.error.issues[0].code).toBe('invalid_type');
        });
    });

    describe('password Field Tests', () => {
        test('should accept valid password hash with correct format', () => {
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
            expect(result.data.password).toBe("$argon2id$v=19$m=65536,t=3,p=4$JysnBuZt/shJJ5zu99+tSw$ZuaSU6gMbJqHgVRXHaSN8Il7VsN2gPJSjTDBogGkt5I");
            expect(typeof result.data.password).toBe('string');
        });

        test('should reject password hash with insufficient length (below 97 characters)', () => {
            // Arrange
            const testData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:42:04",
                email: "abc_d01@hostmail.com",
                password: "$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNo",
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
            expect(testData.password).toBe("$argon2id$v=19$m=65536,t=3,p=4$GhjKlMnOpQrStUvWxYZa$AbCDefGhIjKlMnOpQrStUvWxYZaBcDeFgHiJkLmNo");
            expect(result.error.issues[0].code).toBe('too_small');
        });

        test('should reject password hash with excessive length (above 97 characters)', () => {
            // Arrange
            const testData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:42:04",
                email: "abc_d01@hostmail.com",
                password: "$argon2id$v=19$m=65536,t=3,p=4$JysnBuZt/shJJ5zu99+tSw$ZuaSU6gMbJqHgVRXHaSN8Il7VsN2gPJSjTDBogGkt5IA",
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
            expect(testData.password).toBe("$argon2id$v=19$m=65536,t=3,p=4$JysnBuZt/shJJ5zu99+tSw$ZuaSU6gMbJqHgVRXHaSN8Il7VsN2gPJSjTDBogGkt5IA");
            expect(result.error.issues[0].code).toBe('too_big');
        });

        test('should reject missing password hash (null value)', () => {
            // Arrange
            const testData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:42:04",
                email: "abc_d01@hostmail.com",
                password: null,
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
            expect(testData.password).toBe(null);
            expect(result.error.issues[0].code).toBe('invalid_type');
        });
    });

    describe('phone_number Field Tests', () => {
        test('should accept valid phone_number with correct datatype (string)', () => {
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

            console.log("registerUserResponseSchema - should accept valid phone number with correct datatype (string) - result?.error?.issues ",   result?.error?.issues);
            
            // Assert
            expect(result.success).toBe(true);
            expect(typeof result.data.phone_number).toBe('string');
            expect(result.data.phone_number).toBe("917560847544");
        });

        test('should reject phone_number with invalid datatype (integer)', () => {
            // Arrange
            const testData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:42:04",
                email: "abc_d01@hostmail.com",
                password: "$argon2id$v=19$m=65536,t=3,p=4$JysnBuZt/shJJ5zu99+tSw$ZuaSU6gMbJqHgVRXHaSN8Il7VsN2gPJSjTDBogGkt5I",
                phone_number: 917560847544,
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

            console.log("registerUserResponseSchema - should reject phone_number with invalid datatype (integer) - result?.error?.issues ",   result?.error?.issues);
            
            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBe('invalid_type');
            expect(testData.phone_number).toBe(917560847544);
        });

        test('should reject phone_number with invalid format', () => {
            // Arrange
            const testData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:42:04",
                email: "abc_d01@hostmail.com",
                password: "$argon2id$v=19$m=65536,t=3,p=4$JysnBuZt/shJJ5zu99+tSw$ZuaSU6gMbJqHgVRXHaSN8Il7VsN2gPJSjTDBogGkt5I",
                phone_number: "9175-6084-7544",
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

            console.log("registerUserResponseSchema - should reject phone_number with invalid format - result?.error?.issues ",   result?.error?.issues);
            
            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBe('too_big');
            expect(testData.phone_number).toBe("9175-6084-7544");
        });

        test('should reject phone_number with insufficient length (5 characters)', () => {
            // Arrange
            const testData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:42:04",
                email: "abc_d01@hostmail.com",
                password: "$argon2id$v=19$m=65536,t=3,p=4$JysnBuZt/shJJ5zu99+tSw$ZuaSU6gMbJqHgVRXHaSN8Il7VsN2gPJSjTDBogGkt5I",
                phone_number: "12345",
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

            console.log("registerUserResponseSchema - should reject phone_number with insufficient length (5 characters) - result?.error?.issues ",   result?.error?.issues);
            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBe('too_small');
            expect(testData.phone_number).toBe("12345");
        });

        test('should reject phone_number with excessive length (13 characters with +)', () => {
            // Arrange
            const testData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:42:04",
                email: "abc_d01@hostmail.com",
                password: "$argon2id$v=19$m=65536,t=3,p=4$JysnBuZt/shJJ5zu99+tSw$ZuaSU6gMbJqHgVRXHaSN8Il7VsN2gPJSjTDBogGkt5I",
                phone_number: "+917560847544",
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

            console.log("registerUserResponseSchema - should reject phone_number with excessive length (13 characters with +) - result?.error?.issues ",   result?.error?.issues);
            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBe('too_big');
            expect(testData.phone_number).toBe("+917560847544");
        });

        test('should reject empty phone_number', () => {
            // Arrange
            const testData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:42:04",
                email: "abc_d01@hostmail.com",
                password: "$argon2id$v=19$m=65536,t=3,p=4$JysnBuZt/shJJ5zu99+tSw$ZuaSU6gMbJqHgVRXHaSN8Il7VsN2gPJSjTDBogGkt5I",
                phone_number: "",
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
            
            console.log("registerUserResponseSchema - should reject empty phone_number - result?.error?.issues ",   result?.error?.issues);
            
            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBe('too_small');
            expect(testData.phone_number).toBe("");
        });

        test('should reject missing phone_number', () => {
            // Arrange
            const testData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:42:04",
                email: "abc_d01@hostmail.com",
                password: "$argon2id$v=19$m=65536,t=3,p=4$JysnBuZt/shJJ5zu99+tSw$ZuaSU6gMbJqHgVRXHaSN8Il7VsN2gPJSjTDBogGkt5I",
                phone_number: null,
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

            console.log("registerUserResponseSchema - should reject missing phone_number - result?.error?.issues ",   result?.error?.issues);
            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBe('invalid_type');
            expect(testData.phone_number).toBe(null);
        });
    });

    describe('First Name Field Validation Tests', () => {
        test('should accept valid first_name datatype', () => {
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

        test('should reject invalid first_name datatype (number)', () => {
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

        test('should reject invalid first_name format (underscore)', () => {
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

        test('should reject empty first_name', () => {
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

        test('should reject first_name with excessive length (101 characters)', () => {
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

        test('should reject missing first_name', () => {
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

    describe('Last Name Field Validation Tests', () => {
        test('should accept valid last_name datatype', () => {
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

            console.log("registerUserResponseSchema - should accept valid last_name datatype - result?.error?.issues ",   result?.error?.issues);
            // Assert
            expect(result.success).toBe(true);
            expect(result.data.last_name).toBe("Khan");
        });

        test('should reject invalid last_name datatype (number)', () => {
            // Arrange
            const testData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:42:04",
                email: "abc_d01@hostmail.com",
                password: "$argon2id$v=19$m=65536,t=3,p=4$JysnBuZt/shJJ5zu99+tSw$ZuaSU6gMbJqHgVRXHaSN8Il7VsN2gPJSjTDBogGkt5I",
                phone_number: "917560847544",
                first_name: "Arif",
                last_name: 123,
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

            console.log("registerUserResponseSchema - should reject invalid last_name datatype (number) - result?.error?.issues ",   result?.error?.issues);
            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBe('invalid_type');
            expect(testData.last_name).toBe(123);
        });

        test('should reject invalid last_name format (underscore)', () => {
            // Arrange
            const testData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:42:04",
                email: "abc_d01@hostmail.com",
                password: "$argon2id$v=19$m=65536,t=3,p=4$JysnBuZt/shJJ5zu99+tSw$ZuaSU6gMbJqHgVRXHaSN8Il7VsN2gPJSjTDBogGkt5I",
                phone_number: "917560847544",
                first_name: "Arif",
                last_name: "Kh_an",
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

            console.log("registerUserResponseSchema - should reject invalid last_name format (underscore) - result?.error?.issues ",   result?.error?.issues);
            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBe('invalid_string');
            expect(testData.last_name).toBe("Kh_an");
        });

        test('should reject empty last_name', () => {
            // Arrange
            const testData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:42:04",
                email: "abc_d01@hostmail.com",
                password: "$argon2id$v=19$m=65536,t=3,p=4$JysnBuZt/shJJ5zu99+tSw$ZuaSU6gMbJqHgVRXHaSN8Il7VsN2gPJSjTDBogGkt5I",
                phone_number: "917560847544",
                first_name: "Arif",
                last_name: "",
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

            console.log("registerUserResponseSchema - should reject empty last_name - result?.error?.issues ",   result?.error?.issues);
            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBe('too_small');
            expect(testData.last_name).toBe("");
        });

        test('should reject last_name with excessive length (101 characters)', () => {
            // Arrange
            const testData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:42:04",
                email: "abc_d01@hostmail.com",
                password: "$argon2id$v=19$m=65536,t=3,p=4$JysnBuZt/shJJ5zu99+tSw$ZuaSU6gMbJqHgVRXHaSN8Il7VsN2gPJSjTDBogGkt5I",
                phone_number: "917560847544",
                first_name: "Arif",
                last_name:"AbCde-FgHiJkL'mNoPqRsTuVwXyZ-aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkL'mNoPqRsTuVwXyZiuyhjklopopmnbghyta",
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

            console.log("registerUserResponseSchema - should reject last_name with excessive length (101 characters) - result?.error?.issues ",   result?.error?.issues);
            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBe('too_big');
            expect(testData.last_name).toBe("AbCde-FgHiJkL'mNoPqRsTuVwXyZ-aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkL'mNoPqRsTuVwXyZiuyhjklopopmnbghyta");
            expect(testData.last_name.length).toBe(101);
        });

        test('should reject missing last_name', () => {
            // Arrange
            const testData = {
                user_id: "ab01dhiojniu",
                docType: "USER",
                date_created_at: "2025-10-04T12:42:04",
                email: "abc_d01@hostmail.com",
                password: "$argon2id$v=19$m=65536,t=3,p=4$JysnBuZt/shJJ5zu99+tSw$ZuaSU6gMbJqHgVRXHaSN8Il7VsN2gPJSjTDBogGkt5I",
                phone_number: "917560847544",
                first_name: "Arif",
                last_name: null,
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

            console.log("registerUserResponseSchema - should reject missing last_name - result?.error?.issues ",   result?.error?.issues);
            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBe('invalid_type');
            expect(testData.last_name).toBe(null);
        });
    });

    describe('User Role Field Validation Tests', () => {
        test('should accept valid user_role value (admin)', () => {
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
            expect(result.data.user_role).toBe("admin");
        });

        test('should accept valid user_role value (user)', () => {
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
                user_role: "user",
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
            expect(result.data.user_role).toBe("user");
        });

        test('should reject invalid user_role value (case-sensitive mismatch)', () => {
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
                user_role: "User",
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
            expect(result.error.issues[0].code).toBe('invalid_enum_value');
            expect(testData.user_role).toBe("User");
        });

        test('should reject invalid user_role datatype (number)', () => {
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
                user_role: 12345,
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
            expect(result.error.issues[0].code).toBe('invalid_type');
            expect(testData.user_role).toBe(12345);
        });

        test('should reject empty user_role (empty string)', () => {
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
                user_role: "",
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
            expect(result.error.issues[0].code).toBe('invalid_enum_value');
            expect(testData.user_role).toBe("");
        });
    });

    describe('Upper Size Number Field Validation Tests', () => {
        test('should accept valid upper_size_number (46)', () => {
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

        test('should accept valid upper_size_number (44)', () => {
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

        test('should accept valid upper_size_number (42)', () => {
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

        test('should accept valid upper_size_number (40)', () => {
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

        test('should accept valid upper_size_number (38)', () => {
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

        test('should accept valid upper_size_number (36)', () => {
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

        test('should reject invalid upper_size_number (48 - out of range)', () => {
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

        test('should reject invalid upper_size_number (34 - out of range)', () => {
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

        test('should reject invalid upper_size_number datatype (string)', () => {
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

        test('should reject missing upper_size_number (null)', () => {
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
});