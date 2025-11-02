const mongoose = require('mongoose');
const { shippingAddressStandardSchema } = require('../../shippingAddressSchemas');

describe('shippingAddressStandardSchema - CITY Boundary Tests', () => {
    test('shippingAddressStandardSchema - should accept city minimum length "Rio"', () => {
        // Arrange
        const testData = {
            _id: new mongoose.Types.ObjectId("64b64c4f5311236168a109ca"),
            shipping_address_id: "1sjkopnytguq",
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
        const result = shippingAddressStandardSchema.safeParse(testData);

        if (result?.error?.issues !== undefined){
            console.log("shippingAddressStandardSchema - should accept city minimum length Rio - result?.error?.issues ", result?.error?.issues);
        }
        else {
            console.log("shippingAddressStandardSchema - should accept city minimum length Rio - result ", result);
        }
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.city).toBe("Abc");
        expect(result.data.city.length).toBe(3);
    });

    test('shippingAddressStandardSchema - should accept city maximum length', () => {
        // Arrange
        
        const testData = {
            _id: new mongoose.Types.ObjectId("64b64c4f5311236168a109ca"),
            shipping_address_id: "1sjkopnytguq",
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
        const result = shippingAddressStandardSchema.safeParse(testData);

        if (result?.error?.issues !== undefined){
            console.log("shippingAddressStandardSchema - should accept city maximum length - result?.error?.issues ", result?.error?.issues);
        }
        else {
            console.log("shippingAddressStandardSchema - should accept city maximum length - result ", result);
        }
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.city).toBe("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmno-pqrstuvwxyzABCDEFGHIJKLMNOPQRSTU");
        expect(result.data.city.length).toBe(100);
    });
});
