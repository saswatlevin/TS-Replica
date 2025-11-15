const mongoose = require('mongoose');
const { updateProductPriceSchema } = require('../../productSchemas');

describe('updateProductPriceSchema - Happy Path Tests', () => {
    test('should accept valid product_price of 15', () => {
        // Arrange
        const testData = {
            product_price: 15
        };
        
        // Act
        const result = updateProductPriceSchema.safeParse(testData);

        if (result?.error?.issues !== undefined) {
            console.log("updateProductPriceSchema - should accept valid product_price of 15 - result?.error?.issues ", result?.error?.issues);
        } else {
            console.log("updateProductPriceSchema - should accept valid product_price of 15 - result ", result);
        }
        
        // Assert
        expect(result.success).toBe(true);
        expect(typeof result.data.product_price).toBe('number');
        expect(result.data.product_price).toBe(15);
    });

    test('should accept valid product_price of 25', () => {
        // Arrange
        const testData = {
            product_price: 25
        };
        
        // Act
        const result = updateProductPriceSchema.safeParse(testData);

        if (result?.error?.issues !== undefined) {
            console.log("updateProductPriceSchema - should accept valid product_price of 25 - result?.error?.issues ", result?.error?.issues);
        } else {
            console.log("updateProductPriceSchema - should accept valid product_price of 25 - result ", result);
        }
        
        // Assert
        expect(result.success).toBe(true);
        expect(typeof result.data.product_price).toBe('number');
        expect(result.data.product_price).toBe(25);
    });
});

