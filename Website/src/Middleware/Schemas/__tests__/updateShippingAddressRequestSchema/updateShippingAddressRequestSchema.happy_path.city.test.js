const mongoose = require('mongoose');
const { updateShippingAddressRequestSchema } = require('../../shippingAddressSchemas');

describe('updateShippingAddressRequestSchema - CITY Boundary Tests', () => {
    test('updateShippingAddressRequestSchema - should accept city minimum length "Rio"', () => {
        // Arrange
        const testData = {
            address_type_id: "1",
            company_name: "Brooklinen, Inc",
            address: "742 Evergreen Avenue, Brooklyn",
            apartment: "The Parkview Residences - Apt 12B",
            city: "Abc",
            administrative_division: "New York",
            country: "United States",
            postal_area: "11215",
            phone_number: "15555678901"
        };
        
        // Act
        const result = updateShippingAddressRequestSchema.safeParse(testData);

        if (result?.error?.issues !== undefined){
            console.log("updateShippingAddressRequestSchema - should accept city minimum length Rio - result?.error?.issues ", result?.error?.issues);
        }
        else {
            console.log("updateShippingAddressRequestSchema - should accept city minimum length Rio - result ", result);
        }
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.city).toBe("Abc");
        expect(result.data.city.length).toBe(3);
    });

    test('updateShippingAddressRequestSchema - should accept city maximum length', () => {
        // Arrange
        
        const testData = {
            address_type_id: "1",
            company_name: "Brooklinen, Inc",
            address: "742 Evergreen Avenue, Brooklyn",
            apartment: "The Parkview Residences - Apt 12B",
            city: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmno-pqrstuvwxyzABCDEFGHIJKLMNOPQRSTU",
            administrative_division: "New York",
            country: "United States",
            postal_area: "11215",
            phone_number: "15555678901"
        };
        
        // Act
        const result = updateShippingAddressRequestSchema.safeParse(testData);

        if (result?.error?.issues !== undefined){
            console.log("updateShippingAddressRequestSchema - should accept city maximum length - result?.error?.issues ", result?.error?.issues);
        }
        else {
            console.log("updateShippingAddressRequestSchema - should accept city maximum length - result ", result);
        }
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.city).toBe("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmno-pqrstuvwxyzABCDEFGHIJKLMNOPQRSTU");
        expect(result.data.city.length).toBe(100);
    });
});
