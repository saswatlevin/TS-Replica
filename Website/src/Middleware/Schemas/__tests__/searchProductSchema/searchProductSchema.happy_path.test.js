const mongoose = require('mongoose');
const { searchProductSchema } = require('../../productSchemas');

describe('searchProductSchema - HAPPY PATH Tests', () => {
    test('searchProductSchema - HAPPY PATH TEST Set 1', () => {
        // Arrange
        
        const testData = {
  product_name: "The Craftsman Shirt in Bark Plaid Linen",
  
  product_color: "Bark Plaid Linen",
  product_subcategory: "Shirt"
};

    const result = searchProductSchema.safeParse(testData);

    if (result?.error?.issues !== undefined){
        console.log("searchProductSchema - HAPPY PATH TEST Set 1 - result?.error?.issues ", result?.error?.issues);
    }
    
    else {
        console.log("searchProductSchema - HAPPY PATH TEST Set 1 - result ", result);
    }


    // Assert
    expect(result.success).toBe(true);
      
    expect(result.data.product_name).toBe("The Craftsman Shirt in Bark Plaid Linen");

    expect(result.data.product_color).toBe("Bark Plaid Linen");      
    
    expect(result.data.product_subcategory).toBe("Shirt");
     
    
    
    });


test('searchProductSchema - HAPPY PATH TEST Set 2', () => {
    const testData = {
    product_name: "The Division Shirt in Washed Indigo",
    product_color: "Washed Indigo",
    product_subcategory: "Shirt"
    };
    const result = searchProductSchema.safeParse(testData);

    if (result?.error?.issues !== undefined){
        console.log("searchProductSchema - HAPPY PATH TEST Set 2 - result?.error?.issues ", result?.error?.issues);
    }
    
    else {
        console.log("searchProductSchema - HAPPY PATH TEST Set 2 - result ", result);
    }

    expect(result.success).toBe(true);    
    expect(result.data.product_name).toBe("The Division Shirt in Washed Indigo");    
    expect(result.data.product_color).toBe("Washed Indigo");        
    expect(result.data.product_subcategory).toBe("Shirt");
    });
});

