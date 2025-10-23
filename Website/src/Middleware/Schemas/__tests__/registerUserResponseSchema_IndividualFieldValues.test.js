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
            expect(result.success).toBe(false);
            expect(result.error.issues[0].received).toBe('number');
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
            expect(result.error.issues[0].code).toBe('invalid_type');
        });
    });
});