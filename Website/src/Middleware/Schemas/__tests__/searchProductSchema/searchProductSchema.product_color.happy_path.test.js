const mongoose = require('mongoose');
const { searchProductSchema } = require('../../productSchemas');


describe('searchProductSchema - HAPPY PATH TEST - product_color', () => {
    test('should accept a valid product_color of minimum length (1 characters)', () => {

        // Arrange
        const testData = {
            product_name: "The Craftsman Shirt in Bark Plaid Linen",
  
            product_color: "A",
  
            product_description: "Rugged by design, built with comfort in mind. The Craftsman Shirt pairs classic workwear detailing with a breathable cotton-linen canvas that’s made to handle the season’s shifting demands. Durable, dependable, and crafted to keep up for years to come.",
  
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
            
            product_specifications: "7-oz. 55% linen, 45% organic cotton canvas. Washed for a soft, lived in feel. Two U-shaped chest pockets with button through flaps. Left pocket features a pen sleeve. Double-needle felled construction. Wash cold and lay flat to dry. Made in China."
        };  
            // Act
            const result = searchProductSchema.safeParse(testData);

            if (result?.error?.issues !== undefined){
                console.log("searchProductSchema - should accept a valid product_color of minimum length (1 character) - product_color - result?.error?.issues ", result?.error?.issues);
            }
            
            else {
                console.log("searchProductSchema - should accept a valid product_color of minimum length (1 character) - product_color - result ", result);
            }

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.product_color).toBe("A");
            expect(typeof result.data.product_color).toBe('string');
            expect(result.data.product_color.length).toBe(1);
            
        });

            test('should accept a valid product_color of maximum length (50 characters)', () => {

        // Arrange
        const testData = {
            product_name: "The Craftsman Shirt in Bark Plaid Linen",
  
            product_color: "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghizklmnoopqrstuv",
  
            product_description: "Rugged by design, built with comfort in mind. The Craftsman Shirt pairs classic workwear detailing with a breathable cotton-linen canvas that’s made to handle the season’s shifting demands. Durable, dependable, and crafted to keep up for years to come.",
  
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
            
            product_specifications: "7-oz. 55% linen, 45% organic cotton canvas. Washed for a soft, lived in feel. Two U-shaped chest pockets with button through flaps. Left pocket features a pen sleeve. Double-needle felled construction. Wash cold and lay flat to dry. Made in China."
        };  
            // Act
            const result = searchProductSchema.safeParse(testData);

            if (result?.error?.issues !== undefined){
                console.log("searchProductSchema - should accept a valid product_color of maximum length (50 characters) - product_color - result?.error?.issues ", result?.error?.issues);
            }
            
            else {
                console.log("searchProductSchema - should accept a valid product_color of maximum length (50 characters) - product_color - result ", result);
            }

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.product_color).toBe("ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghizklmnoopqrstuv");
            expect(typeof result.data.product_color).toBe('string');
            expect(result.data.product_color.length).toBe(50);
            
        });

});

