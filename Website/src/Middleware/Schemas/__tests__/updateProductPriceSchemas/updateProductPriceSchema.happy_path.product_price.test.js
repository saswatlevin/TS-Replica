const mongoose = require('mongoose');
const { updateProductPriceSchema } = require('../../productSchemas');

describe('updateProductPriceSchema - Happy Path Tests - Boundary Values - product_price', () => {
    test('should accept valid product_price of minimum value (1)', () => {
        // Arrange
        const testData = {
            product_price: 1
        };
        
        // Act
        const result = updateProductPriceSchema.safeParse(testData);

        if (result?.error?.issues !== undefined) {
            console.log("updateProductPriceSchema - should accept valid product_price of minimum value (1) - result?.error?.issues ", result?.error?.issues);
        } else {
            console.log("updateProductPriceSchema - should accept valid product_price of minimum value (1) - result ", result);
        }
        
        // Assert
        expect(result.success).toBe(true);
        expect(typeof result.data.product_price).toBe('number');
        expect(result.data.product_price).toBe(1);
    });

    test('should accept valid product_price of maximum value (300)', () => {
        // Arrange
        const testData = {
            product_price: 300
        };
        
        // Act
        const result = updateProductPriceSchema.safeParse(testData);

        if (result?.error?.issues !== undefined) {
            console.log("updateProductPriceSchema - should accept valid product_price of maximum value (300) - result?.error?.issues ", result?.error?.issues);
        } else {
            console.log("updateProductPriceSchema - should accept valid product_price of maximum value (300) - result ", result);
        }
        
        // Assert
        expect(result.success).toBe(true);
        expect(typeof result.data.product_price).toBe('number');
        expect(result.data.product_price).toBe(300);
    });
});

