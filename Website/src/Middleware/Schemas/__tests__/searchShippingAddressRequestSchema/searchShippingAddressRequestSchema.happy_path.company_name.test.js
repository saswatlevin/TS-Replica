const mongoose = require('mongoose');
const { searchShippingAddressRequestSchema } = require('../../shippingAddressSchemas');

describe('searchShippingAddressRequestSchema - COMPANY_NAME Boundary Tests', () => {
    test('searchShippingAddressRequestSchema - should accept company_name minimum length ""', () => {
        // Arrange
        const testData = {
            _id: new mongoose.Types.ObjectId("64b64c4f5311236168a109ca"),
            shipping_address_id: "1sjkopnytguq",
            address_type_id: "1",
            company_name: "",
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
            console.log("searchShippingAddressRequestSchema - should accept company_name minimum length - result?.error?.issues ", result?.error?.issues);
        }
        else {
            console.log("searchShippingAddressRequestSchema - should accept company_name minimum length - result ", result);
        }
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.company_name).toBe("");
        expect(result.data.company_name.length).toBe(0);
    });

    test('searchShippingAddressRequestSchema - should accept company_name maximum length', () => {
        // Arrange
        const testData = {
            _id: new mongoose.Types.ObjectId("64b64c4f5311236168a109ca"),
            shipping_address_id: "1sjkopnytguq",
            address_type_id: "1",
            company_name: "aB-cD-eF-gH-iJ-kL-mN-oP-qR-sT-uV-wX-yZ-aB-cD-eF-gH-iJ-kL-mN-oP-qR-sT-uV-wX-yZ,aBabcdefghijklmnopqrst",
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
            console.log("searchShippingAddressRequestSchema - should accept company_name maximum length - result?.error?.issues ", result?.error?.issues);
        }
        else {
            console.log("searchShippingAddressRequestSchema - should accept company_name maximum length - result ", result);
        }
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.company_name).toBe("aB-cD-eF-gH-iJ-kL-mN-oP-qR-sT-uV-wX-yZ-aB-cD-eF-gH-iJ-kL-mN-oP-qR-sT-uV-wX-yZ,aBabcdefghijklmnopqrst");
        expect(result.data.company_name.length).toBe(100);
    });
});

