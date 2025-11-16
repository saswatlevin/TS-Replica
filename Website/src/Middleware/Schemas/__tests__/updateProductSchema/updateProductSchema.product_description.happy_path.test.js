const mongoose = require('mongoose');
const { updateProductSchema } = require('../../productSchemas');


describe('updateProductSchema - HAPPY PATH TEST - product_description', () => {
    test('should accept a valid product_description of minimum length (1 character)', () => {

        // Arrange
        const testData = {
            product_name: "The Craftsman Shirt in Bark Plaid Linen",
  
            product_color: "Bark Plaid Linen",
  
            product_description: "A",
  
  
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
            
            product_specifications: "7-oz. 55% linen, 45% organic cotton canvas. Washed for a soft, lived in feel. Two U-shaped chest pockets with button through flaps. Left pocket features a pen sleeve. Adjustable button cuffs. Double-needle felled construction. Wash cold and lay flat to dry. Made in China."
        };  
            // Act
            const result = updateProductSchema.safeParse(testData);

            if (result?.error?.issues !== undefined){
                console.log("updateProductSchema - should accept a valid product_description of minimum length (1 character) - product_description - result?.error?.issues ", result?.error?.issues);
            }
            
            else {
                console.log("updateProductSchema - should accept a valid product_description of minimum length (1 character) - product_description - result ", result);
            }

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.product_description).toBe("A");
            expect(typeof result.data.product_description).toBe('string');
            expect(result.data.product_description.length).toBe(1);
            
        });

            test('should accept a valid product_description of maximum length (700 characters)', () => {

        // Arrange
        const testData = {
            product_name: "The Craftsman Shirt in Bark Plaid Linen",
  
            product_color: "Bark Plaid Linen",
  
            product_description: "Élodie-François ångström Zürich Noël Björn García Søren Åsa Héloïse Mårten Dvok ukasz Þór Jón! The café’s façade gleamed—bright, calm, alive.Numbers danced: 12345, 67890; symbols sang: #!;%:.,“Quotes” and accents intertwined. À propos—of art, of science, of music—Øystein’s résumé stood tall. Máría whispered softly, “C’est la vie.” Björn replied, Indeed—it is.The harmony of words, punctuated by pauses, stretched through the air like wind in fjords.2025 beckoned—a time of calm, reason, grace, and rhythm; laughter followed, echoing, soft yet firm, ever so vivid, ever so free. Voilà! Life continues. Élodie-François ångström Zürich Noël Björn García Søren Åsa Héloïse Mårten Dvok ukasz Þór Jón!...",
  
  
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
            
            product_specifications: "7-oz. 55% linen, 45% organic cotton canvas. Washed for a soft, lived in feel. Two U-shaped chest pockets with button through flaps. Left pocket features a pen sleeve. Adjustable button cuffs. Double-needle felled construction. Wash cold and lay flat to dry. Made in China."
        };  
            // Act
            const result = updateProductSchema.safeParse(testData);

            if (result?.error?.issues !== undefined){
                console.log("updateProductSchema - should accept a valid product_description of maximum length (700 characters) - product_description - result?.error?.issues ", result?.error?.issues);
            }
            
            else {
                console.log("updateProductSchema - should accept a valid product_description of maximum length (700 characters) - product_description - result ", result);
            }

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.product_description).toBe("Élodie-François ångström Zürich Noël Björn García Søren Åsa Héloïse Mårten Dvok ukasz Þór Jón! The café’s façade gleamed—bright, calm, alive.Numbers danced: 12345, 67890; symbols sang: #!;%:.,“Quotes” and accents intertwined. À propos—of art, of science, of music—Øystein’s résumé stood tall. Máría whispered softly, “C’est la vie.” Björn replied, Indeed—it is.The harmony of words, punctuated by pauses, stretched through the air like wind in fjords.2025 beckoned—a time of calm, reason, grace, and rhythm; laughter followed, echoing, soft yet firm, ever so vivid, ever so free. Voilà! Life continues. Élodie-François ångström Zürich Noël Björn García Søren Åsa Héloïse Mårten Dvok ukasz Þór Jón!...");
            expect(typeof result.data.product_description).toBe('string');
            expect(result.data.product_description.length).toBe(700);
            
        });

});

