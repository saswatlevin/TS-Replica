const mongoose = require('mongoose');
const { searchShippingAddressRequestSchema } = require('../../shippingAddressSchemas');

describe('searchShippingAddressRequestSchema - Happy Path Tests', () => {
    test('searchShippingAddressRequestSchema - should accept valid shipping address data set 1', () => {
        // Arrange
        const testData = {
            _id: new mongoose.Types.ObjectId("656f7c9a8b3e4f1d2a7b9c0e"),
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
            console.log("searchShippingAddressRequestSchema - should accept valid shipping address data set 1 - result?.error?.issues ", result?.error?.issues);
        }
        else {
            console.log("searchShippingAddressRequestSchema - should accept valid shipping address data set 1 - result ", result);
        }
        
        // Assert
        expect(result.success).toBe(true);
        //expect(testData._id._id.toString()).toBe("656f7c9a8b3e4f1d2a7b9c0e");
        expect(result.data.shipping_address_id).toBe("1sjkopnytguq");
        expect(result.data.address_type_id).toBe("1");
        expect(result.data.company_name).toBe("Brooklinen, Inc");
        expect(result.data.address).toBe("742 Evergreen Avenue, Brooklyn");
        expect(result.data.apartment).toBe("The Parkview Residences - Apt 12B");
        expect(result.data.city).toBe("New York City");
        expect(result.data.administrative_division).toBe("New York");
        expect(result.data.country).toBe("United States");
        expect(result.data.postal_area).toBe("11215");
        expect(result.data.phone_number).toBe("15555678901");
    });

    test('searchShippingAddressRequestSchema - should accept valid shipping address data set 2', () => {
        // Arrange
        const testData = {
            _id: new mongoose.Types.ObjectId("656f7c9a8b3e4f1d2a7b9c0e"),
            shipping_address_id: "1sjkopnytguq",
            address_type_id: "1",
            company_name: "Hamptons Luxury Homes, Inc",
            address: "300 Bluedart Drive, Village of the Hamptons",
            apartment: "15 Oak Manor",
            city: "New York City",
            administrative_division: "New York",
            country: "United States",
            postal_area: "11200",
            phone_number: "15551234567"
        };
        
        // Act
        const result = searchShippingAddressRequestSchema.safeParse(testData);

        if (result?.error?.issues !== undefined){
            console.log("searchShippingAddressRequestSchema - should accept valid shipping address data set 2 - result?.error?.issues ", result?.error?.issues);
        }
        else {
            console.log("searchShippingAddressRequestSchema - should accept valid shipping address data set 2 - result ", result);
        }
        
        // Assert
        expect(result.success).toBe(true);
        //expect(testData._id._id.toString()).toBe("656f7c9a8b3e4f1d2a7b9c0e");
        expect(result.data.shipping_address_id).toBe("1sjkopnytguq");
        expect(result.data.address_type_id).toBe("1");
        expect(result.data.company_name).toBe("Hamptons Luxury Homes, Inc");
        expect(result.data.address).toBe("300 Bluedart Drive, Village of the Hamptons");
        expect(result.data.apartment).toBe("15 Oak Manor");
        expect(result.data.city).toBe("New York City");
        expect(result.data.administrative_division).toBe("New York");
        expect(result.data.country).toBe("United States");
        expect(result.data.postal_area).toBe("11200");
        expect(result.data.phone_number).toBe("15551234567");
    });
    
});

