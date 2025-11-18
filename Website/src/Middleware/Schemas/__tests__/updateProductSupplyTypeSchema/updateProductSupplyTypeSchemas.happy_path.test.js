const mongoose = require('mongoose');
const { updateProductSupplyTypeSchema } = require('../../productSchemas');

describe('updateProductSupplyTypeSchema - HAPPY PATH Tests', () => {
    test('should accept Limited supply type small batch description', () => {
        // Arrange
        const testData = {
            product_supply_type: {
                supply_type_description: "This product is part of a small batch manufacturing run that may use exclusive materials like dead stock fabrics. The product is limited in quantity and may never be in stock again. Limited products are available for immediate shipping.",
                supply_type: "Limited"
            }
        };

        // Act
        const result = updateProductSupplyTypeSchema.safeParse(testData);

        if (result?.error?.issues !== undefined){
            console.log("updateProductSupplyTypeSchema - should accept Limited supply type small batch description - result?.error?.issues ", result?.error?.issues);
        }
        else {
            console.log("updateProductSupplyTypeSchema - should accept Limited supply type small batch description - result ", result);
        }

        // Assert
        expect(result.success).toBe(true);
        expect(typeof result.data.product_supply_type.supply_type_description).toBe('string');
        expect(result.data.product_supply_type.supply_type_description).toBe("This product is part of a small batch manufacturing run that may use exclusive materials like dead stock fabrics. The product is limited in quantity and may never be in stock again. Limited products are available for immediate shipping.");
        expect(typeof result.data.product_supply_type.supply_type).toBe('string');
        expect(result.data.product_supply_type.supply_type).toBe("Limited");
    });

    test('should accept Essential supply type restock description', () => {
        // Arrange
        const testData = {
            product_supply_type: {
                supply_type_description: "This product is a Taylor Stitch Essential that we aim to always keep in stock. Essentials are our tried and true products that we wear damn near everyday. If your size is currently out-of-stock, please submit your email address to the “Notify Me” tab. We restock Essentials regularly. In stock sizes are available for immediate shipping.",
                supply_type: "Essential"
            }
        };

        // Act
        const result = updateProductSupplyTypeSchema.safeParse(testData);

        if (result?.error?.issues !== undefined){
            console.log("updateProductSupplyTypeSchema - should accept Essential supply type restock description - result?.error?.issues ", result?.error?.issues);
        }
        else {
            console.log("updateProductSupplyTypeSchema - should accept Essential supply type restock description - result ", result);
        }

        // Assert
        expect(result.success).toBe(true);
        expect(typeof result.data.product_supply_type.supply_type_description).toBe('string');
        expect(result.data.product_supply_type.supply_type_description).toBe("This product is a Taylor Stitch Essential that we aim to always keep in stock. Essentials are our tried and true products that we wear damn near everyday. If your size is currently out-of-stock, please submit your email address to the “Notify Me” tab. We restock Essentials regularly. In stock sizes are available for immediate shipping.");
        expect(typeof result.data.product_supply_type.supply_type).toBe('string');
        expect(result.data.product_supply_type.supply_type).toBe("Essential");
    });
});


