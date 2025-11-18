const mongoose = require('mongoose');
const { updateProductGarmentWeightSchema } = require('../../productSchemas');

describe('updateProductGarmentWeightSchema - HAPPY PATH Tests', () => {
    test('should accept Medium to Heavy garment weight with small batch description', () => {
        // Arrange
        const testData = {
            product_garment_weight: {
                garment_weight_description: "Toss on over another shirt or make it your first layer on a colder day.",
                garment_weight: "Medium to Heavy"
            }
        };

        // Act
        const result = updateProductGarmentWeightSchema.safeParse(testData);

        if (result?.error?.issues !== undefined){
            console.log("updateProductGarmentWeightSchema - should accept Medium to Heavy garment weight with small batch description - result?.error?.issues ", result?.error?.issues);
        }
        else {
            console.log("updateProductGarmentWeightSchema - should accept Medium to Heavy garment weight with small batch description - result ", result);
        }

        // Assert
        expect(result.success).toBe(true);
        expect(typeof result.data.product_garment_weight.garment_weight_description).toBe('string');
        expect(result.data.product_garment_weight.garment_weight_description).toBe("Toss on over another shirt or make it your first layer on a colder day.");
        expect(typeof result.data.product_garment_weight.garment_weight).toBe('string');
        expect(result.data.product_garment_weight.garment_weight).toBe("Medium to Heavy");
    });

    test('should accept Medium garment weight with all-season description', () => {
        // Arrange
        const testData = {
            product_garment_weight: {
                garment_weight_description: "Your daily driver, at a versatile all-season weight.",
                garment_weight: "Medium"
            }
        };

        // Act
        const result = updateProductGarmentWeightSchema.safeParse(testData);

        if (result?.error?.issues !== undefined){
            console.log("updateProductGarmentWeightSchema - should accept Medium garment weight with all-season description - result?.error?.issues ", result?.error?.issues);
        }
        else {
            console.log("updateProductGarmentWeightSchema - should accept Medium garment weight with all-season description - result ", result);
        }

        // Assert
        expect(result.success).toBe(true);
        expect(typeof result.data.product_garment_weight.garment_weight_description).toBe('string');
        expect(result.data.product_garment_weight.garment_weight_description).toBe("Your daily driver, at a versatile all-season weight.");
        expect(typeof result.data.product_garment_weight.garment_weight).toBe('string');
        expect(result.data.product_garment_weight.garment_weight).toBe("Medium");
    });
});


