const { createProduct } = require('../productControllers');
const Product = require('../../Models/Product');
const connectToDB = require('../../connectToDB');
const mongoose = require('mongoose');
require('dotenv').config();

describe('createProduct Integration Test', () => {
    // Connect to database before all tests
    beforeAll(async () => {
        await connectToDB();
    });

    // Close database connection after all tests
    afterAll(async () => {
        await mongoose.connection.close();
    });

    test('should successfully insert a single product into the database', async () => {
        // Arrange - Create request body with test product data
        const testProductData = {
            product_id: "hya3y1kdhv4p",
            docType: "PRODUCT",
            product_name: "The Craftsman Shirt in Bark Plaid Linen",
            product_color: "Bark Plaid Linen",
            product_description: "Rugged by design, built with comfort in mind. The Craftsman Shirt pairs classic workwear detailing with a breathable cotton-linen canvas that's made to handle the season's shifting demands. Durable, dependable, and crafted to keep up for years to come.",
            product_price: 128,
            product_category: "Upper Garment",
            product_subcategory: "Shirt",
            product_subcategory_type: "Long-Sleeved Shirt",
            product_fit: "Fitted at the chest with a straighter fit through the body. Shorter tail length to be worn untucked. Model is 6'3\", wearing a Medium.",
            product_garment_weight: {
                garment_weight_description: "Your daily driver, at a versatile all-season weight.",
                garment_weight: "Medium"
            },
            product_material: "Crafted from a mid-weight organic cotton and linen canvas and washed for a soft, lived-in feel. Features classic double chest pockets—complete with a handy pen sleeve—and reinforced with double-needle felled seams for lasting durability.",
            product_supply_type: {
                supply_type_description: "This product is part of a small batch manufacturing run that may use exclusive materials like dead stock fabrics. The product is limited in quantity and may never be in stock again. Limited products are available for immediate shipping.",
                supply_type: "Limited"
            },
            product_specifications: "7-oz. 55% linen, 45% organic cotton canvas. Washed for a soft, lived in feel. Two U-shaped chest pockets with button through flaps. Left pocket features a pen sleeve. Adjustable button cuffs. Double-needle felled construction. Wash cold and lay flat to dry. Made in China.",
            product_images: [
                {
                    image_id: "zz6f7oq0fdof",
                    image_uri: "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Long-Sleeved Shirts\\The_Craftsman_Shirt\\The_Craftsman_Shirt_in_Bark_Plaid_Linen\\instock_m_q225_craftsman_bark_portrait_001.jpg",
                    main_image: true
                }
            ],
            product_items: [
                {
                    sku: "9qjmn3ak0b",
                    upper_size_letter: "XXL",
                    upper_size_number: 46,
                    total_stock: 250,
                    quantity_sold: 80,
                    current_stock: 170
                }
            ]
        };

        const req = {
            body: testProductData
        };

        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis()
        };

        const next = jest.fn();

        // Act - Call createProduct to insert product into database
        try {
            await createProduct(req, res, next);
        } catch (error) {
            // If there's an error, it should be passed to next() by asyncErrorHandler
            // Log it for debugging
            console.error('Error in createProduct:', error);
            throw error;
        }

        // Assert - Verify the response was sent
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith(expect.any(Object));

        // Assert - Verify the product was actually inserted into the database
        // Note: The function generates a new product_id, so we search by product_name and product_description
        const insertedProduct = await Product.findOne({ 
            product_name: testProductData.product_name,
            product_description: testProductData.product_description
        });
        expect(insertedProduct).not.toBeNull();
        expect(insertedProduct).toBeTruthy();

        // Assert - Verify the inserted product has correct properties
        expect(insertedProduct.product_name).toBe(testProductData.product_name);
        expect(insertedProduct.product_color).toBe(testProductData.product_color);
        expect(insertedProduct.product_description).toBe(testProductData.product_description);
        expect(insertedProduct.product_price).toBe(testProductData.product_price);
        expect(insertedProduct.product_category).toBe(testProductData.product_category);
        expect(insertedProduct.product_subcategory).toBe(testProductData.product_subcategory);
        expect(insertedProduct.product_subcategory_type).toBe(testProductData.product_subcategory_type);
        expect(insertedProduct.product_fit).toBe(testProductData.product_fit);
        expect(insertedProduct.product_material).toBe(testProductData.product_material);
        expect(insertedProduct.product_specifications).toBe(testProductData.product_specifications);

        // Assert - Verify nested objects
        expect(insertedProduct.product_garment_weight.garment_weight_description).toBe(testProductData.product_garment_weight.garment_weight_description);
        expect(insertedProduct.product_garment_weight.garment_weight).toBe(testProductData.product_garment_weight.garment_weight);
        expect(insertedProduct.product_supply_type.supply_type_description).toBe(testProductData.product_supply_type.supply_type_description);
        expect(insertedProduct.product_supply_type.supply_type).toBe(testProductData.product_supply_type.supply_type);

        // Assert - Verify arrays
        expect(insertedProduct.product_images).toHaveLength(1);
        expect(insertedProduct.product_images[0].image_id).toBe(testProductData.product_images[0].image_id);
        expect(insertedProduct.product_images[0].image_uri).toBe(testProductData.product_images[0].image_uri);
        expect(insertedProduct.product_images[0].main_image).toBe(testProductData.product_images[0].main_image);

        expect(insertedProduct.product_items).toHaveLength(1);
        expect(insertedProduct.product_items[0].sku).toBe(testProductData.product_items[0].sku);
        expect(insertedProduct.product_items[0].upper_size_letter).toBe(testProductData.product_items[0].upper_size_letter);
        expect(insertedProduct.product_items[0].upper_size_number).toBe(testProductData.product_items[0].upper_size_number);
        expect(insertedProduct.product_items[0].total_stock).toBe(testProductData.product_items[0].total_stock);
        expect(insertedProduct.product_items[0].quantity_sold).toBe(testProductData.product_items[0].quantity_sold);
        expect(insertedProduct.product_items[0].current_stock).toBe(testProductData.product_items[0].current_stock);

        // Assert - Verify system-generated fields
        expect(insertedProduct.product_id).toBeDefined();
        expect(insertedProduct.product_id).toHaveLength(12); // createRandomString(6) generates 12 chars
        expect(insertedProduct.docType).toBe('PRODUCT');
    });
});

