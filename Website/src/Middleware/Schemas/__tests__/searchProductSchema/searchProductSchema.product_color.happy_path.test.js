const mongoose = require('mongoose');
const { searchProductSchema } = require('../../productSchemas');


describe('searchProductSchema - HAPPY PATH TEST - product_color', () => {
    test('should accept a valid product_color of minimum length (1 characters)', () => {

        // Arrange
        const testData = {
            product_name: "The Craftsman Shirt in Bark Plaid Linen",
  
            product_color: "A",
  
            product_subcategory: "Shirt",
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

            product_subcategory: "Shirt"
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

