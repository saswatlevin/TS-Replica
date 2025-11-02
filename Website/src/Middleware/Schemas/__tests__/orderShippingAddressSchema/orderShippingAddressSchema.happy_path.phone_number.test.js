const mongoose = require('mongoose');
const { orderShippingAddressSchema } = require('../../shippingAddressSchemas');

describe('orderShippingAddressSchema - PHONE_NUMBER Boundary Tests', () => {
    test('orderShippingAddressSchema - should accept phone_number typical length "68430020"', () => {
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
            phone_number: "68430020"
        };

        // Act
        const result = orderShippingAddressSchema.safeParse(testData);

        if (result?.error?.issues !== undefined){
            console.log("orderShippingAddressSchema - should accept phone_number typical length 68430020 - result?.error?.issues ", result?.error?.issues);
        }
        else {
            console.log("orderShippingAddressSchema - should accept phone_number typical length 68430020 - result ", result);
        }

        // Assert
        expect(result.success).toBe(true);
        expect(result.data.phone_number).toBe("68430020");
        expect(result.data.phone_number.length).toBe(8);
    });

    test('orderShippingAddressSchema - should accept phone_number maximum length 12 digits', () => {
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
            phone_number: "175608475445"
        };

        // Act
        const result = orderShippingAddressSchema.safeParse(testData);

        if (result?.error?.issues !== undefined){
            console.log("orderShippingAddressSchema - should accept phone_number maximum length 441234567890 - result?.error?.issues ", result?.error?.issues);
        }
        else {
            console.log("orderShippingAddressSchema - should accept phone_number maximum length 441234567890 - result ", result);
        }

        // Assert
        expect(result.success).toBe(true);
        expect(result.data.phone_number).toBe("175608475445");
        expect(result.data.phone_number.length).toBe(12);
    });
});
