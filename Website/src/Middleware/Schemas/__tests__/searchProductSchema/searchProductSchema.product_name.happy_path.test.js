const mongoose = require('mongoose');
const { searchProductSchema } = require('../../productSchemas');


describe('searchProductSchema - HAPPY PATH TEST - product_name', () => {
    test('should accept a valid product_name of minimum length (3 characters)', () => {

        // Arrange
        const testData = {
            product_name: "ÉaZ",
            product_color: "Bark Plaid Linen",
            product_subcategory: "Shirt"
        };  
            // Act
            const result = searchProductSchema.safeParse(testData);

            if (result?.error?.issues !== undefined){
                console.log("searchProductSchema - should accept a valid product_name of minimum length (3 characters) - product_name - result?.error?.issues ", result?.error?.issues);
            }
            
            else {
                console.log("searchProductSchema - should accept a valid product_name of minimum length (3 characters) - product_name - result ", result);
            }

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.product_name).toBe("ÉaZ");
            expect(typeof result.data.product_name).toBe('string');
            expect(result.data.product_name.length).toBe(3);
            
        });

            test('should accept a valid product_name of maximum length (100 characters)', () => {

        // Arrange
        const testData = {
            product_name: "Élodie François ångström Zürich Noël Björn García Søren Åsa Héloïse Mårten Dvok ukasz Þór Jón Andréa",
            product_color: "Bark Plaid Linen",
            product_subcategory: "Shirt"
        };  
            // Act
            const result = searchProductSchema.safeParse(testData);

            if (result?.error?.issues !== undefined){
                console.log("searchProductSchema - should accept a valid product_name of maximum length (50 characters) - product_name - result?.error?.issues ", result?.error?.issues);
            }
            
            else {
                console.log("searchProductSchema - should accept a valid product_name of maximum length (50 characters) - product_name - result ", result);
            }

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.product_name).toBe("Élodie François ångström Zürich Noël Björn García Søren Åsa Héloïse Mårten Dvok ukasz Þór Jón Andréa");
            expect(typeof result.data.product_name).toBe('string');
            expect(result.data.product_name.length).toBe(100);
            
        });

});

