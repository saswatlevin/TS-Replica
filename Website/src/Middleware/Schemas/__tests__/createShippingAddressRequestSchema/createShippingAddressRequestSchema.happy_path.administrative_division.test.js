const mongoose = require('mongoose');
const { createShippingAddressRequestSchema } = require('../../shippingAddressSchemas');

describe('createShippingAddressRequestSchema - ADMINISTRATIVE_DIVISION Boundary Tests', () => {
    test('createShippingAddressRequestSchema - should accept administrative_division minimum length ""', () => {
        // Arrange
        const testData = {
            address_type_id: "1",
            company_name: "Brooklinen, Inc",
            address: "742 Evergreen Avenue, Brooklyn",
            apartment: "The Parkview Residences - Apt 12B",
            city: "New York City",
            administrative_division: "",
            country: "United States",
            postal_area: "11215",
            phone_number: "15555678901"
        };
        
        // Act
        const result = createShippingAddressRequestSchema.safeParse(testData);

        if (result?.error?.issues !== undefined){
            console.log("createShippingAddressRequestSchema - should accept administrative_division minimum length - result?.error?.issues ", result?.error?.issues);
        }
        else {
            console.log("createShippingAddressRequestSchema - should accept administrative_division minimum length - result ", result);
        }
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.administrative_division).toBe("");
        expect(result.data.administrative_division.length).toBe(0);
    });

    test('createShippingAddressRequestSchema - should accept administrative_division maximum length', () => {
        // Arrange
        
        const testData = {
            address_type_id: "1",
            company_name: "Brooklinen, Inc",
            address: "742 Evergreen Avenue, Brooklyn",
            apartment: "The Parkview Residences - Apt 12B",
            city: "New York City",
            administrative_division: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQ-y' z",
            country: "United States",
            postal_area: "11215",
            phone_number: "15555678901"
        };
        
        // Act
        const result = createShippingAddressRequestSchema.safeParse(testData);

        if (result?.error?.issues !== undefined){
            console.log("createShippingAddressRequestSchema - should accept administrative_division maximum length - result?.error?.issues ", result?.error?.issues);
        }
        else {
            console.log("createShippingAddressRequestSchema - should accept administrative_division maximum length - result ", result);
        }
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.administrative_division).toBe("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQ-y' z");
        expect(result.data.administrative_division.length).toBe(100);
    });
});
