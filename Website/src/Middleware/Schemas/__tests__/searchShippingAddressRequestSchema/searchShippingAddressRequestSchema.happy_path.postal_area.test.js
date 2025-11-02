const mongoose = require('mongoose');
const { searchShippingAddressRequestSchema } = require('../../shippingAddressSchemas');

describe('searchShippingAddressRequestSchema - POSTAL_AREA Boundary Tests', () => {
    test('searchShippingAddressRequestSchema - should accept postal_area typical length "11215"', () => {
        // Arrange
        const testData = {
            _id: new mongoose.Types.ObjectId("64b64c4f5311236168a109ca"),
            shipping_address_id: "1sjkopnytguq",
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
        const result = searchShippingAddressRequestSchema.safeParse(testData);

        if (result?.error?.issues !== undefined){
            console.log("searchShippingAddressRequestSchema - should accept postal_area typical length 11215 - result?.error?.issues ", result?.error?.issues);
        }
        else {
            console.log("searchShippingAddressRequestSchema - should accept postal_area typical length 11215 - result ", result);
        }
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.postal_area).toBe("11215");
        expect(result.data.postal_area.length).toBe(5);
    });

    test('searchShippingAddressRequestSchema - should accept postal_area maximum length "10001-1234"', () => {
        // Arrange
        const testData = {
            _id: new mongoose.Types.ObjectId("64b64c4f5311236168a109ca"),
            shipping_address_id: "1sjkopnytguq",
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
        const result = searchShippingAddressRequestSchema.safeParse(testData);

        if (result?.error?.issues !== undefined){
            console.log("searchShippingAddressRequestSchema - should accept postal_area maximum length 10001-1234 - result?.error?.issues ", result?.error?.issues);
        }
        else {
            console.log("searchShippingAddressRequestSchema - should accept postal_area maximum length 10001-1234 - result ", result);
        }
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.postal_area).toBe("10001-1234");
        expect(result.data.postal_area.length).toBe(10);
    });
});
