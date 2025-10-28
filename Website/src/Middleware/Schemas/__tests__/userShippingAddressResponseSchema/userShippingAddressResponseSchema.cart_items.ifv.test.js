// Designed by me, Implemented by AI, Verified by me
const { userShippingAddressResponseSchema } = require('../../userSchemas');
const mongoose = require('mongoose');

describe('userShippingAddressResponseSchema - Cart Items Individual Field Validation Tests', () => {
    
    describe('Cart Items Field Validation Tests', () => {
        test('should accept valid cart items array value (empty array)', () => {
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
            console.log("userShippingAddressResponseSchema - should accept valid cart items array value (empty array) - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.CartItems).toEqual([]);
            expect(result.data.CartItems.length).toBe(0);
            expect(result.error).toBeUndefined();
        });

        test('should accept valid cart items array value (array with one cart item)', () => {
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
                CartItems: [
                    {
                        cart_item_id: "ab12cd34ef56",
                        product_id: "xy98uv76rs54",
                        sku: "sk12ab34cd",
                        cart_item_name: "Premium Éclair Chocolate",
                        cart_item_image_uri: "C:\\Users\\Public\\Pictures\\CartItems\\chocolate_250g.jpg",
                        cart_item_quantity: 3
                    }
                ],
                __v: 0
            };

            // Act
            const result = userShippingAddressResponseSchema.safeParse(validUserData);
            console.log("userShippingAddressResponseSchema - should accept valid cart items array value (array with one cart item) - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.CartItems).toBeDefined();
            expect(result.data.CartItems.length).toBe(1);
            expect(result.data.CartItems[0].cart_item_id).toBe("ab12cd34ef56");
            expect(result.data.CartItems[0].product_id).toBe("xy98uv76rs54");
            expect(result.data.CartItems[0].sku).toBe("sk12ab34cd");
            expect(result.data.CartItems[0].cart_item_name).toBe("Premium Éclair Chocolate");
            expect(result.data.CartItems[0].cart_item_image_uri).toBe("C:\\Users\\Public\\Pictures\\CartItems\\chocolate_250g.jpg");
            expect(result.data.CartItems[0].cart_item_quantity).toBe(3);
            expect(result.error).toBeUndefined();
        });

        test('should accept valid cart items array value (array with two cart items)', () => {
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
                CartItems: [
                    {
                        cart_item_id: "ab12cd34ef56",
                        product_id: "xy98uv76rs54",
                        sku: "sk12ab34cd",
                        cart_item_name: "Premium Éclair Chocolate",
                        cart_item_image_uri: "C:\\Users\\Public\\Pictures\\CartItems\\chocolate_250g.jpg",
                        cart_item_quantity: 3
                    },
                    {
                        cart_item_id: "mn34op56qr78",
                        product_id: "gh12ij34kl56",
                        sku: "sku98lm76n",
                        cart_item_name: "Organic Green Tea Pack",
                        cart_item_image_uri: "C:\\Ecommerce\\Images\\CartItems\\green_tea_100g.png",
                        cart_item_quantity: 12
                    }
                ],
                __v: 0
            };

            // Act
            const result = userShippingAddressResponseSchema.safeParse(validUserData);
            console.log("userShippingAddressResponseSchema - should accept valid cart items array value (array with two cart items) - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.CartItems).toBeDefined();
            expect(result.data.CartItems.length).toBe(2);
            expect(result.data.CartItems[0].cart_item_id).toBe("ab12cd34ef56");
            expect(result.data.CartItems[0].product_id).toBe("xy98uv76rs54");
            expect(result.data.CartItems[0].sku).toBe("sk12ab34cd");
            expect(result.data.CartItems[0].cart_item_name).toBe("Premium Éclair Chocolate");
            expect(result.data.CartItems[0].cart_item_image_uri).toBe("C:\\Users\\Public\\Pictures\\CartItems\\chocolate_250g.jpg");
            expect(result.data.CartItems[0].cart_item_quantity).toBe(3);
            expect(result.data.CartItems[1].cart_item_id).toBe("mn34op56qr78");
            expect(result.data.CartItems[1].product_id).toBe("gh12ij34kl56");
            expect(result.data.CartItems[1].sku).toBe("sku98lm76n");
            expect(result.data.CartItems[1].cart_item_name).toBe("Organic Green Tea Pack");
            expect(result.data.CartItems[1].cart_item_image_uri).toBe("C:\\Ecommerce\\Images\\CartItems\\green_tea_100g.png");
            expect(result.data.CartItems[1].cart_item_quantity).toBe(12);
            expect(result.error).toBeUndefined();
        });

        test('should reject missing cart items array', () => {
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
                ShippingAddresses: [],
                CartItems: null,
                __v: 0
            };

            // Act
            const result = userShippingAddressResponseSchema.safeParse(invalidUserData);
            console.log("userShippingAddressResponseSchema - should reject missing cart items array - result?.error?.issues ", result?.error?.issues);

            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBeDefined();
            expect(result.error.issues[0].message).toBeDefined();
            expect(invalidUserData.CartItems).toBe(null);
        });
    });
});
