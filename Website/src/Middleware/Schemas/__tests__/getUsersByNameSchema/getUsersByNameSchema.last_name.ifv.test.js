const mongoose = require('mongoose');
const { getUsersByNameSchema } = require('../../userSchemas');

describe('getUsersByNameSchema - Last Name IFV Tests', () => {
    test('getUsersByNameSchema - should accept valid last_name "Khan" ', () => {
        // Arrange
        const testData = {
            first_name: "Arif",
            last_name: "Khan"
        };
        
        // Act
        const result = getUsersByNameSchema.safeParse(testData);

        console.log("getUsersByNameSchema - should accept valid last_name Khan - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.last_name).toBe("Khan");
        expect(result.data.last_name.length).toBe(4);
    });

    test('getUsersByNameSchema - should reject invalid last_name datatype 123 and first_name "Arif"', () => {
        // Arrange
        const testData = {
            first_name: "Arif",
            last_name: 123
        };
        
        // Act
        const result = getUsersByNameSchema.safeParse(testData);

        console.log("getUsersByNameSchema - should reject invalid last_name datatype 123 and first_name Arif - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe("invalid_type");
        expect(testData.last_name).toBe(123);
    });

    test('getUsersByNameSchema - should reject invalid last_name format "Kh_an" and first_name "Arif"', () => {
        // Arrange
        const testData = {
            first_name: "Arif",
            last_name: "Kh_an"
        };
        
        // Act
        const result = getUsersByNameSchema.safeParse(testData);

        console.log("getUsersByNameSchema - should reject invalid last_name format Kh_an and first_name Arif - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe("invalid_string");
        expect(testData.last_name).toBe("Kh_an");
    });

    /*test('getUsersByNameSchema - should reject empty last_name "" and first_name "Arif"', () => {
        // Arrange
        const testData = {
            first_name: "Arif",
            last_name: ""
        };
        
        // Act
        const result = getUsersByNameSchema.safeParse(testData);

        console.log("getUsersByNameSchema - should reject empty last_name and first_name Arif - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe("too_small");
        expect(testData.last_name).toBe("");
        expect(testData.last_name.length).toBe(0);
    });*/

    test('getUsersByNameSchema - should reject last_name exceeding maximum length and first_name "Arif"', () => {
        // Arrange
        const testData = {
            first_name: "Arif",
            last_name: "AbCde-FgHiJkL'mNoPqRsTuVwXyZ-aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkL'mNoPqRsTuVwXyZiuyhjklopopmnbghyta"
        };
        
        // Act
        const result = getUsersByNameSchema.safeParse(testData);

        console.log("getUsersByNameSchema - should reject last_name exceeding maximum length and first_name Arif - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe("too_big");
        expect(testData.last_name).toBe("AbCde-FgHiJkL'mNoPqRsTuVwXyZ-aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkL'mNoPqRsTuVwXyZiuyhjklopopmnbghyta");
        expect(testData.last_name.length).toBe(101);
    });

    test('getUsersByNameSchema - should reject missing last_name null and first_name "Arif"', () => {
        // Arrange
        const testData = {
            first_name: "Arif",
            last_name: null
        };
        
        // Act
        const result = getUsersByNameSchema.safeParse(testData);

        console.log("getUsersByNameSchema - should reject missing last_name null and first_name Arif - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe("invalid_type");
        expect(testData.last_name).toBe(null);
    });
});
