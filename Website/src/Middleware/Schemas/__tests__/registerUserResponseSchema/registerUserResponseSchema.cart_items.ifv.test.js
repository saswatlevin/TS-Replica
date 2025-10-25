const mongoose = require('mongoose');
const { registerUserResponseSchema } = require('../../userSchemas');

describe('registerUserResponseSchema - CartItems Field Tests', () => {
    test('registerUserResponseSchema - should accept valid CartItems with empty array', () => {
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
        
        console.log("registerUserResponseSchema - should accept valid CartItems with empty array result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(true);
        expect(Array.isArray(result.data.CartItems)).toBe(true);
        expect(result.data.CartItems.length).toBe(0);
    });

    test('registerUserResponseSchema - should accept valid CartItems with one cart item', () => {
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
            CartItems: [
                {
                    "cart_item_id": "ab512mseobth",
                    "product_id": "xy98uv76rs54",
                    "sku": "sk12ab34cd",
                    "cart_item_name": "Premium Éclair Chocolate",
                    "cart_item_image_uri": "C:\\Users\\Public\\Pictures\\CartItems\\chocolate_250g.jpg",
                    "cart_item_quantity": 3
                }
            ],
            _id: new mongoose.Types.ObjectId("656f7c9a8b3e4f1d2a7b9c0e"),
            __v: 0
        };
        
        // Act
        const result = registerUserResponseSchema.safeParse(testData);
        
        console.log("registerUserResponseSchema - should accept valid CartItems with one cart item result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(true);
        expect(Array.isArray(result.data.CartItems)).toBe(true);
        expect(result.data.CartItems.length).toBe(1);
    });

    test('registerUserResponseSchema - should accept valid CartItems with two cart items', () => {
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
            CartItems: [
                {
                    "cart_item_id": "ab512mseobth",
                    "product_id": "xy98uv76rs54",
                    "sku": "sk12ab34cd",
                    "cart_item_name": "Premium Éclair Chocolate",
                    "cart_item_image_uri":"C:\\Users\\Public\\Pictures\\CartItems\\chocolate_250g.jpg",
                    "cart_item_quantity": 3
                },
                {
                    "cart_item_id": "mn34op56qr78",
                    "product_id": "gh12ij34kl56",
                    "sku": "ab12sd23we",
                    "cart_item_name": "Organic Green Tea",
                    "cart_item_image_uri": "C:\\Ecommerce\\Images\\CartItems\\green_tea_100g.png",
                    "cart_item_quantity": 12
                }
            ],
            _id: new mongoose.Types.ObjectId("656f7c9a8b3e4f1d2a7b9c0e"),
            __v: 0
        };
        
        // Act
        const result = registerUserResponseSchema.safeParse(testData);
        
        console.log("registerUserResponseSchema - should accept valid CartItems with two cart items result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(true);
        expect(Array.isArray(result.data.CartItems)).toBe(true);
        expect(result.data.CartItems.length).toBe(2);
    });

    test('registerUserResponseSchema - should reject missing CartItems (null)', () => {
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
            CartItems: null,
            _id: new mongoose.Types.ObjectId("656f7c9a8b3e4f1d2a7b9c0e"),
            __v: 0
        };
        
        // Act
        const result = registerUserResponseSchema.safeParse(testData);
        
        console.log("registerUserResponseSchema - should reject missing CartItems (null) result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('invalid_type');
        expect(testData.CartItems).toBe(null);
    });
});