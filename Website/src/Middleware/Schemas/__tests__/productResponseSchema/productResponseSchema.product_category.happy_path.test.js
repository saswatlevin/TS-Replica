const mongoose = require('mongoose');
const { productResponseSchema } = require('../../productSchemas');

describe('productResponseSchema - HAPPY PATH TEST - product_category', () => {
    test('should accept a valid product_category - TEST 1', () => {

        // Arrange
        const testData = {

            product_id: "vxcei49vin0z",

            docType: "PRODUCT",

            product_name: "The Craftsman Shirt in Bark Plaid Linen",
  
            product_color: "Bark Plaid Linen",
  
            product_description: "Rugged by design, built with comfort in mind. The Craftsman Shirt pairs classic workwear detailing with a breathable cotton-linen canvas that’s made to handle the season’s shifting demands. Durable, dependable, and crafted to keep up for years to come.",
  
            product_price: 128,
  
            product_category: "Lower Garment",
  
            product_subcategory: "Shirt",
  
            product_subcategory_type: "Long-Sleeved Shirt",
  
            product_fit: "Fitted at the chest with a straighter fit through the body. Shorter tail length to be worn untucked. Model is 6'3\", wearing a Medium.",
  
            product_garment_weight: {
                garment_weight_description: "Your daily driver, at a versatile all-season weight.",
                garment_weight: "Medium",
                _id: new mongoose.Types.ObjectId("672f8e0c9b3e4a12c4d7f9e1")
            },
  
            product_material: "Crafted from a mid-weight organic cotton and linen canvas and washed for a soft, lived-in feel. Features classic double chest pockets—complete with a handy pen sleeve—and reinforced with double-needle felled seams for lasting durability.",
            
            product_supply_type: {
                supply_type_description: "This product is part of a small batch manufacturing run that may use exclusive materials like dead stock fabrics. The product is limited in quantity and may never be in stock again. Limited products are available for immediate shipping.",
                supply_type: "Limited",
                _id: new mongoose.Types.ObjectId("672f8e179a4c3d21b7e0f4c8")
            },
            
            product_specifications: "7-oz. 55% linen, 45% organic cotton canvas. Washed for a soft, lived in feel. Two U-shaped chest pockets with button through flaps. Left pocket features a pen sleeve. Adjustable button cuffs. Double-needle felled construction. Wash cold and lay flat to dry. Made in China.",
            
            product_images: 
            [
                {
                image_id: "zz6f7oq0fdof",
                image_uri: "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Long-Sleeved Shirts\\The_Craftsman_Shirt\\The_Craftsman_Shirt_in_Bark_Plaid_Linen\\instock_m_q225_craftsman_bark_portrait_001.jpg",
                main_image: true,
                _id: new mongoose.Types.ObjectId("672f8f3ab14c2e07d9a4c6f2")
                }
                
            ],
  
            product_items: 
            [
                {
                sku: "9qjmn3ak0b",
                upper_size_letter: "XXL",
                upper_size_number: 46,
                total_stock: 250,
                quantity_sold: 80,
                current_stock: 170,
                  _id: new mongoose.Types.ObjectId("672f8f44ce8b1a03f4d2b7e9")
                }
            ],

            _id: new mongoose.Types.ObjectId("654f1a9b7d2c4e58a3b912de"),
            __v: 0
        };
      
        // Act
        const result = productResponseSchema.safeParse(testData);
        if (result?.error?.issues !== undefined){
            console.log("productResponseSchema - should accept a valid product_category - TEST 1 - result?.error?.issues ", result?.error?.issues);
        }   

        else{
            console.log("productResponseSchema - should accept a valid product_category - TEST 1 - result ", result);
        }

        // Assert
        expect(result.success).toBe(true); 
        expect(result.data.product_category).toBe("Lower Garment");
        expect(typeof result.data.product_category).toBe('string');
    });

        test('should accept a valid product_category - TEST 2', () => {

        // Arrange
        const testData = {
            
            product_id: "vxcei49vin0z",

            docType: "PRODUCT",

            product_name: "The Craftsman Shirt in Bark Plaid Linen",
  
            product_color: "Bark Plaid Linen",
  
            product_description: "Rugged by design, built with comfort in mind. The Craftsman Shirt pairs classic workwear detailing with a breathable cotton-linen canvas that’s made to handle the season’s shifting demands. Durable, dependable, and crafted to keep up for years to come.",
  
            product_price: 128,
  
            product_category: "Upper Garment",
  
            product_subcategory: "Shirt",
  
            product_subcategory_type: "Long-Sleeved Shirt",
  
            product_fit: "Fitted at the chest with a straighter fit through the body. Shorter tail length to be worn untucked. Model is 6'3\", wearing a Medium.",
  
            product_garment_weight: {
                garment_weight_description: "Your daily driver, at a versatile all-season weight.",
                garment_weight: "Medium",
                _id: new mongoose.Types.ObjectId("672f8e0c9b3e4a12c4d7f9e1")
            },
  
            product_material: "Crafted from a mid-weight organic cotton and linen canvas and washed for a soft, lived-in feel. Features classic double chest pockets—complete with a handy pen sleeve—and reinforced with double-needle felled seams for lasting durability.",
            
            product_supply_type: {
                supply_type_description: "This product is part of a small batch manufacturing run that may use exclusive materials like dead stock fabrics. The product is limited in quantity and may never be in stock again. Limited products are available for immediate shipping.",
                supply_type: "Limited",
                _id: new mongoose.Types.ObjectId("672f8e179a4c3d21b7e0f4c8")
            },
            
            product_specifications: "7-oz. 55% linen, 45% organic cotton canvas. Washed for a soft, lived in feel. Two U-shaped chest pockets with button through flaps. Left pocket features a pen sleeve. Adjustable button cuffs. Double-needle felled construction. Wash cold and lay flat to dry. Made in China.",
            
            product_images: 
            [
                {
                image_id: "zz6f7oq0fdof",
                image_uri: "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Long-Sleeved Shirts\\The_Craftsman_Shirt\\The_Craftsman_Shirt_in_Bark_Plaid_Linen\\instock_m_q225_craftsman_bark_portrait_001.jpg",
                main_image: true,
                _id: new mongoose.Types.ObjectId("672f8f3ab14c2e07d9a4c6f2")
                }
                
            ],
  
            product_items: 
            [
                {
                sku: "9qjmn3ak0b",
                upper_size_letter: "XXL",
                upper_size_number: 46,
                total_stock: 250,
                quantity_sold: 80,
                current_stock: 170,
                  _id: new mongoose.Types.ObjectId("672f8f44ce8b1a03f4d2b7e9")
                }
            ],
            
            _id: new mongoose.Types.ObjectId("654f1a9b7d2c4e58a3b912de"),
            __v: 0
        };
      
        // Act
        const result = productResponseSchema.safeParse(testData);
        if (result?.error?.issues !== undefined){
            console.log("productResponseSchema - should accept a valid product_category - TEST 2 - result?.error?.issues ", result?.error?.issues);
        }   

        else{
            console.log("productResponseSchema - should accept a valid product_category - TEST 2 - result ", result);
        }

        // Assert
        expect(result.success).toBe(true); 
        expect(result.data.product_category).toBe("Upper Garment");
        expect(typeof result.data.product_category).toBe('string');
    });
});