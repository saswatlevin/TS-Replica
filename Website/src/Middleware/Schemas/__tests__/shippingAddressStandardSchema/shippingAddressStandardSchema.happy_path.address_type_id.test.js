const mongoose = require('mongoose');
const { shippingAddressStandardSchema } = require('../../shippingAddressSchemas');

describe('shippingAddressStandardSchema - ADDRESS_TYPE_ID Boundary Tests', () => {
    test('shippingAddressStandardSchema - should accept address_type_id minimum value "1"', () => {
        // Arrange
        const testData = {
            _id: new mongoose.Types.ObjectID("656f7c9a8b3e4f1d2a7b9c0e"),
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
        const result = shippingAddressStandardSchema.safeParse(testData);

        if (result?.error?.issues !== undefined){
            console.log("shippingAddressStandardSchema - should accept address_type_id minimum value 1 - result?.error?.issues ", result?.error?.issues);
        }
        else {
            console.log("shippingAddressStandardSchema - should accept address_type_id minimum value 1 - result ", result);
        }
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.address_type_id).toBe("1");
        //expect(result.data.address_type_id.length).toBe(1);
    });

    test('shippingAddressStandardSchema - should accept address_type_id maximum value "5"', () => {
        // Arrange
        const testData = {
            _id: new mongoose.Types.ObjectID("656f7c9a8b3e4f1d2a7b9c0e"),
            shipping_address_id: "1sjkopnytguq",
            address_type_id: "5",
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
        const result = shippingAddressStandardSchema.safeParse(testData);

        if (result?.error?.issues !== undefined){
            console.log("shippingAddressStandardSchema - should accept address_type_id maximum value 5 - result?.error?.issues ", result?.error?.issues);
        }
        else {
            console.log("shippingAddressStandardSchema - should accept address_type_id maximum value 5 - result ", result);
        }
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.address_type_id).toBe("5");
        //expect(result.data.address_type_id.length).toBe(1);
    });
});