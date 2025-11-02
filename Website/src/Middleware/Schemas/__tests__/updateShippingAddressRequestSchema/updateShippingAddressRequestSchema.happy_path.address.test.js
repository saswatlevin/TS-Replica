const mongoose = require('mongoose');
const { updateShippingAddressRequestSchema } = require('../../shippingAddressSchemas');

describe('updateShippingAddressRequestSchema - ADDRESS Tests', () => {
    test('updateShippingAddressRequestSchema - should accept address minimum length "7"', () => {
        // Arrange
        const testData = {
            address_type_id: "1",
            company_name: "Brooklinen, Inc",
            address: "7",
            apartment: "The Parkview Residences - Apt 12B",
            city: "New York City",
            administrative_division: "New York",
            country: "United States",
            postal_area: "11215",
            phone_number: "15555678901"
        };
        
        // Act
        const result = updateShippingAddressRequestSchema.safeParse(testData);

        if (result?.error?.issues !== undefined){
            console.log("updateShippingAddressRequestSchema - should accept address minimum length 7 - result?.error?.issues ", result?.error?.issues);
        }
        else {
            console.log("updateShippingAddressRequestSchema - should accept address minimum length 7 - result ", result);
        }
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.address).toBe("7");
        expect(result.data.address.length).toBe(1);
    });

    test('updateShippingAddressRequestSchema - should accept address maximum length', () => {
        // Arrange
        const testData = {
            address_type_id: "1",
            company_name: "Brooklinen, Inc",
            address: "742 Eveeeeeeeeeeeeeeeeeeeerrrrrrrrrrrrrrrrrrrrgggggggggggggggggggrrrrrrrrrrrrrrrrrrrrreennnnnnnnnnnnnnnnn Avvvvvvvvvvveeeeeeennnnnnnnnnnnnnnnnnnnnuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuueeeeeeeeeee, Brooklyn",
            apartment: "The Parkview Residences - Apt 12B",
            city: "New York City",
            administrative_division: "New York",
            country: "United States",
            postal_area: "11215",
            phone_number: "15555678901"
        };
        
        // Act
        const result = updateShippingAddressRequestSchema.safeParse(testData);

        if (result?.error?.issues !== undefined){
            console.log("updateShippingAddressRequestSchema - should accept address maximum length - result?.error?.issues ", result?.error?.issues);
        }
        else {
            console.log("updateShippingAddressRequestSchema - should accept address maximum length - result ", result);
        }
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.address).toBe("742 Eveeeeeeeeeeeeeeeeeeeerrrrrrrrrrrrrrrrrrrrgggggggggggggggggggrrrrrrrrrrrrrrrrrrrrreennnnnnnnnnnnnnnnn Avvvvvvvvvvveeeeeeennnnnnnnnnnnnnnnnnnnnuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuueeeeeeeeeee, Brooklyn");
        expect(result.data.address.length).toBe(200);
    });
});

