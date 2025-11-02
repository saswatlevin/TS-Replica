const mongoose = require('mongoose');
const { createShippingAddressResponseSchema } = require('../../shippingAddressSchemas');

describe('createShippingAddressResponseSchema - ADDRESS Tests', () => {
    test('createShippingAddressResponseSchema - should accept address minimum length "7"', () => {
        // Arrange
        const testData = {
            _id: new mongoose.Types.ObjectID("656f7c9a8b3e4f1d2a7b9c0e"),
            shipping_address_id: "1sjkopnytguq", 
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
        const result = createShippingAddressResponseSchema.safeParse(testData);

        if (result?.error?.issues !== undefined){
            console.log("createShippingAddressResponseSchema - should accept address minimum length 7 - result?.error?.issues ", result?.error?.issues);
        }
        else {
            console.log("createShippingAddressResponseSchema - should accept address minimum length 7 - result ", result);
        }
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.address).toBe("7");
        expect(result.data.address.length).toBe(1);
    });

    test('createShippingAddressResponseSchema - should accept address maximum length', () => {
        // Arrange
        const testData = {
            _id: new mongoose.Types.ObjectID("656f7c9a8b3e4f1d2a7b9c0e"),
            shipping_address_id: "1sjkopnytguq",
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
        const result = createShippingAddressResponseSchema.safeParse(testData);

        if (result?.error?.issues !== undefined){
            console.log("createShippingAddressResponseSchema - should accept address maximum length - result?.error?.issues ", result?.error?.issues);
        }
        else {
            console.log("createShippingAddressResponseSchema - should accept address maximum length - result ", result);
        }
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.address).toBe("742 Eveeeeeeeeeeeeeeeeeeeerrrrrrrrrrrrrrrrrrrrgggggggggggggggggggrrrrrrrrrrrrrrrrrrrrreennnnnnnnnnnnnnnnn Avvvvvvvvvvveeeeeeennnnnnnnnnnnnnnnnnnnnuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuueeeeeeeeeee, Brooklyn");
        expect(result.data.address.length).toBe(200);
    });
});

