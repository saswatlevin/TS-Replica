const mongoose = require('mongoose');
const { updateProductGarmentWeightSchema } = require('../../productSchemas');

describe('updateProductGarmentWeightSchema - GARMENT WEIGHT HAPPY PATH Tests', () => {
    const garmentWeightDescription = "Toss on over another shirt or make it your first layer on a colder day.";

    const runGarmentWeightTest = (weightLabel) => {
        test(`should accept garment_weight value ${weightLabel}`, () => {
            // Arrange
            const testData = {
                product_garment_weight: {
                    garment_weight_description: garmentWeightDescription,
                    garment_weight: weightLabel
                }
            };

            // Act
            const result = updateProductGarmentWeightSchema.safeParse(testData);

            if (result?.error?.issues !== undefined){
                console.log(`updateProductGarmentWeightSchema - should accept garment_weight value ${weightLabel} - result?.error?.issues `, result?.error?.issues);
            }
            else {
                console.log(`updateProductGarmentWeightSchema - should accept garment_weight value ${weightLabel} - result `, result);
            }

            // Assert
            expect(result.success).toBe(true);
            expect(typeof result.data.product_garment_weight.garment_weight).toBe('string');
            expect(result.data.product_garment_weight.garment_weight).toBe(weightLabel);
            expect(result.data.product_garment_weight.garment_weight_description).toBe(garmentWeightDescription);
        });
    };

    ['Light', 'Medium', 'Medium to Heavy', 'Heavy'].forEach(runGarmentWeightTest);
});


