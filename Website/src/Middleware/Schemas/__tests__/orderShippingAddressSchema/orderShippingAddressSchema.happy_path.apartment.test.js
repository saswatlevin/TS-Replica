const mongoose = require('mongoose');
const { orderShippingAddressSchema } = require('../../shippingAddressSchemas');

describe('orderShippingAddressSchema - APARTMENT Boundary Tests', () => {
    test('orderShippingAddressSchema - should accept apartment minimum length ""', () => {
        // Arrange
        const testData = {
            address_type_id: "1",
            company_name: "Brooklinen, Inc",
            address: "742 Evergreen Avenue, Brooklyn",
            apartment: "",
            city: "New York City",
            administrative_division: "New York",
            country: "United States",
            postal_area: "11215",
            phone_number: "15555678901"
        };
        
        // Act
        const result = orderShippingAddressSchema.safeParse(testData);

        if (result?.error?.issues !== undefined){
            console.log("orderShippingAddressSchema - should accept apartment minimum length - result?.error?.issues ", result?.error?.issues);
        }
        else {
            console.log("orderShippingAddressSchema - should accept apartment minimum length - result ", result);
        }
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.apartment).toBe("");
        expect(result.data.apartment.length).toBe(0);
    });

    test('orderShippingAddressSchema - should accept apartment maximum length', () => {
        // Arrange
        const testData = {
            address_type_id: "1",
            company_name: "Brooklinen, Inc",
            address: "742 Evergreen Avenue, Brooklyn",
            apartment: "aB-cD-eF-gH-iJ-kL-mN-oP-qR-sT-uV-wX-yZ-aB-cD-eF-gH-iJ-kL-mN-oP-qR-sT-uV-wX-yZ,aBabcdefghijklmnopqrst",
            city: "New York City",
            administrative_division: "New York",
            country: "United States",
            postal_area: "11215",
            phone_number: "15555678901"
        };
        
        // Act
        const result = orderShippingAddressSchema.safeParse(testData);

        if (result?.error?.issues !== undefined){
            console.log("orderShippingAddressSchema - should accept apartment maximum length - result?.error?.issues ", result?.error?.issues);
        }
        else {
            console.log("orderShippingAddressSchema - should accept apartment maximum length - result ", result);
        }
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.apartment).toBe("aB-cD-eF-gH-iJ-kL-mN-oP-qR-sT-uV-wX-yZ-aB-cD-eF-gH-iJ-kL-mN-oP-qR-sT-uV-wX-yZ,aBabcdefghijklmnopqrst");
        expect(result.data.apartment.length).toBe(100);
    });
});
