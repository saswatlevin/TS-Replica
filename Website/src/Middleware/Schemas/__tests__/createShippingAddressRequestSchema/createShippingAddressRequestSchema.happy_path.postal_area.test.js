const mongoose = require('mongoose');
const { createShippingAddressRequestSchema } = require('../../shippingAddressSchemas');

describe('createShippingAddressRequestSchema - POSTAL_AREA Boundary Tests', () => {
    test('createShippingAddressRequestSchema - should accept postal_area typical length "11215"', () => {
        // Arrange
        const testData = {
            address_type_id: "1",
            company_name: "Brooklinen, Inc",
            address: "742 Evergreen Avenue, Brooklyn",
            apartment: "The Parkview Residences - Apt 12B",
            city: "New York City",
            administrative_division: "New York",
            country: "United States",
            postal_area: "11215",
            phone_number: "15555678901"
        };
        
        // Act
        const result = createShippingAddressRequestSchema.safeParse(testData);

        if (result?.error?.issues !== undefined){
            console.log("createShippingAddressRequestSchema - should accept postal_area typical length 11215 - result?.error?.issues ", result?.error?.issues);
        }
        else {
            console.log("createShippingAddressRequestSchema - should accept postal_area typical length 11215 - result ", result);
        }
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.postal_area).toBe("11215");
        expect(result.data.postal_area.length).toBe(5);
    });

    test('createShippingAddressRequestSchema - should accept postal_area maximum length "10001-1234"', () => {
        // Arrange
        const testData = {
            address_type_id: "1",
            company_name: "Brooklinen, Inc",
            address: "742 Evergreen Avenue, Brooklyn",
            apartment: "The Parkview Residences - Apt 12B",
            city: "New York City",
            administrative_division: "New York",
            country: "United States",
            postal_area: "10001-1234",
            phone_number: "15555678901"
        };
        
        // Act
        const result = createShippingAddressRequestSchema.safeParse(testData);

        if (result?.error?.issues !== undefined){
            console.log("createShippingAddressRequestSchema - should accept postal_area maximum length 10001-1234 - result?.error?.issues ", result?.error?.issues);
        }
        else {
            console.log("createShippingAddressRequestSchema - should accept postal_area maximum length 10001-1234 - result ", result);
        }
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.postal_area).toBe("10001-1234");
        expect(result.data.postal_area.length).toBe(10);
    });
});
