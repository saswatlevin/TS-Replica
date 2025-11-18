const mongoose = require('mongoose');
const { searchProductSchema } = require('../../productSchemas');

describe('searchProductSchema - product_subcategory - HAPPY PATH TEST', () => {
    test('should accept a valid product_subcategory - TEST 1', () => {

        // Arrange
        const testData = {
            product_name: "The Craftsman Shirt in Bark Plaid Linen",
  
            product_color: "Bark Plaid Linen",
  
            product_subcategory: "Shirt"         
        };

        // Act
        const result = searchProductSchema.safeParse(testData);    
        
        if (!result.success){
            console.log("searchProductSchema - should accept a valid product_subcategory - TEST 1 - product_subcategory - result?.error?.issues ", result?.error?.issues);
        }
        
        else {
            console.log("searchProductSchema - should accept a valid product_subcategory - TEST 1 - product_subcategory - result ", result);
        }

        // Assert
        expect(result.success).toBe(true); 
        expect(result.data.product_subcategory).toBe("Shirt");
        expect(typeof result.data.product_subcategory).toBe('string');
 
    });

        test('should accept a valid product_subcategory - TEST 2', () => {

        // Arrange
        const testData = {
            product_name: "The Craftsman Shirt in Bark Plaid Linen",
  
            product_color: "Bark Plaid Linen",
  
            product_subcategory: "Bottom"
        };

        // Act
        const result = searchProductSchema.safeParse(testData);    
        
        if (!result.success){
            console.log("searchProductSchema - should accept a valid product_subcategory - TEST 2 - product_subcategory - result?.error?.issues ", result?.error?.issues);
        }
        
        else {
            console.log("searchProductSchema - should accept a valid product_subcategory - TEST 2 - product_subcategory - result ", result);
        }

        // Assert
        expect(result.success).toBe(true); 
        expect(result.data.product_subcategory).toBe("Bottom");
        expect(typeof result.data.product_subcategory).toBe('string');
 
    });
});

