const mongoose = require('mongoose');
const { updateProductGarmentWeightSchema } = require('../../productSchemas');

describe('updateProductGarmentWeightSchema - GARMENT WEIGHT DESCRIPTION HAPPY PATH Tests', () => {
    test('should accept garment_weight_description minimum length (1 character)', () => {
        // Arrange
        const testData = {
            product_garment_weight: {
                garment_weight_description: "C",
                garment_weight: "Medium to Heavy"
            }
        };

        // Act
        const result = updateProductGarmentWeightSchema.safeParse(testData);

        if (result?.error?.issues !== undefined){
            console.log("updateProductGarmentWeightSchema - should accept garment_weight_description minimum length (1 character) - result?.error?.issues ", result?.error?.issues);
        }
        else {
            console.log("updateProductGarmentWeightSchema - should accept garment_weight_description minimum length (1 character) - result ", result);
        }

        // Assert
        expect(result.success).toBe(true);
        expect(typeof result.data.product_garment_weight.garment_weight_description).toBe('string');
        expect(result.data.product_garment_weight.garment_weight_description).toBe("C");
        expect(result.data.product_garment_weight.garment_weight_description.length).toBe(1);
        expect(result.data.product_garment_weight.garment_weight).toBe("Medium to Heavy");
    });

    test('should accept garment_weight_description maximum length (200 characters)', () => {
        // Arrange
        ;
        const testData = {
            product_garment_weight: {
                garment_weight_description: "Élodie-François ångström Zürich Noël Björn García Søren Åsa Héloïse Mårten Dvok ukasz Þór Jón! The café’s façade gleamed—bright, calm, alive.Numbers danced: 12345, 67890; symbols sang: #!;%:.,“Quotes”",
                garment_weight: "Medium to Heavy"
            }
        };

        // Act
        const result = updateProductGarmentWeightSchema.safeParse(testData);

        if (result?.error?.issues !== undefined){
            console.log("updateProductGarmentWeightSchema - should accept garment_weight_description maximum length (200 characters) - result?.error?.issues ", result?.error?.issues);
        }
        else {
            console.log("updateProductGarmentWeightSchema - should accept garment_weight_description maximum length (200 characters) - result ", result);
        }

        // Assert
        expect(result.success).toBe(true);
        expect(typeof result.data.product_garment_weight.garment_weight_description).toBe('string');
        expect(result.data.product_garment_weight.garment_weight_description).toBe("Élodie-François ångström Zürich Noël Björn García Søren Åsa Héloïse Mårten Dvok ukasz Þór Jón! The café’s façade gleamed—bright, calm, alive.Numbers danced: 12345, 67890; symbols sang: #!;%:.,“Quotes”");
        expect(result.data.product_garment_weight.garment_weight_description.length).toBe(200);
        expect(result.data.product_garment_weight.garment_weight).toBe("Medium to Heavy");
    });
});


