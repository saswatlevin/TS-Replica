// Designed by me, Implemented by AI, Verified by me
const { userShippingAddressResponseSchema } = require('../../userSchemas');
const mongoose = require('mongoose');

describe('userShippingAddressResponseSchema - Shipping Addresses Individual Field Validation Tests', () => {
    
    describe('Shipping Addresses Field Validation Tests', () => {
        test('should accept valid shipping addresses array value (empty array)', () => {
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
            console.log("userShippingAddressResponseSchema - should accept valid shipping addresses array value (empty array) - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.ShippingAddresses).toEqual([]);
            expect(result.data.ShippingAddresses.length).toBe(0);
            expect(result.error).toBeUndefined();
        });

        test('should accept valid shipping addresses array value (array with one shipping address)', () => {
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
                ShippingAddresses: [
                    {
                        "_id": new mongoose.Types.ObjectId("650f1a2b3c4d5e6f7a8b9c0d"), 
                        "shipping_address_id": "sh1234567890", 
                        "address_type_id": "1", 
                        "company_name": "Acme-Global Solutions", 
                        "address": "1234 Elm Street, Suite 567, Industrial Area, Near Central Park", 
                        "apartment": "Apt 45B", 
                        "city": "New-York", 
                        "administrative_division": "New York State", 
                        "country": "United States", 
                        "postal_area": "10001-1234", 
                        "phone_number": "1234567890"
                    }
                ],
                CartItems: [],
                __v: 0
            };

            // Act
            const result = userShippingAddressResponseSchema.safeParse(validUserData);
            console.log("userShippingAddressResponseSchema - should accept valid shipping addresses array value (array with one shipping address) - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.ShippingAddresses).toBeDefined();
            expect(result.data.ShippingAddresses.length).toBe(1);
            expect(result.error).toBeUndefined();
        });

        test('should accept valid shipping addresses array value (array with two shipping addresses)', () => {
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
                ShippingAddresses: [
                    {
                        "_id": new mongoose.Types.ObjectId("650f1a2b3c4d5e6f7a8b9c0d"), 
                        "shipping_address_id": "sh1234567890", 
                        "address_type_id": "1", 
                        "company_name": "Acme-Global Solutions", 
                        "address": "1234 Elm Street, Suite 567, Industrial Area, Near Central Park", 
                        "apartment": "Apt 45B", 
                        "city": "New-York", 
                        "administrative_division": "New York State",
                        "country": "United States",
                        "postal_area": "10001-1234",
                        "phone_number": "1234567890"
                    }, 
                    {
                        "_id": new mongoose.Types.ObjectId("651a2b3c4d5e6f7a8b9c0d1e"), 
                        "shipping_address_id": "sh1234567890", 
                        "address_type_id": "2", 
                        "company_name": "Tech-Enterprises Ltd", 
                        "address": "7890 Maple Avenue, Block 12, Industrial Zone, Close to Riverside, Metropolis", 
                        "apartment": "Suite 120", 
                        "city": "Los-Angeles", 
                        "administrative_division": "California",
                        "country": "United States",
                        "postal_area": "90012",
                        "phone_number": "0987654321"
                    }
                ],
                CartItems: [],
                __v: 0
            };

            // Act
            const result = userShippingAddressResponseSchema.safeParse(validUserData);
            console.log("userShippingAddressResponseSchema - should accept valid shipping addresses array value (array with two shipping addresses) - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.ShippingAddresses).toBeDefined();
            expect(result.data.ShippingAddresses.length).toBe(2);
            expect(result.error).toBeUndefined();
        });

        test('should reject missing shipping addresses array', () => {
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
                others_size_letter: "M",
                email_comms_type: "I want all emails",
                sms_comms: false,
                ShippingAddresses: null,
                CartItems: [],
                __v: 0
            };

            // Act
            const result = userShippingAddressResponseSchema.safeParse(invalidUserData);
            console.log("userShippingAddressResponseSchema - should reject missing shipping addresses array - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBeDefined();
            expect(result.error.issues[0].message).toBeDefined();
            expect(invalidUserData.ShippingAddresses).toBe(null);
        });
    });
});
