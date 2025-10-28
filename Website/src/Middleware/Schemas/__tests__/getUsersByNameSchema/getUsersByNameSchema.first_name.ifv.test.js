const mongoose = require('mongoose');
const { getUsersByNameSchema } = require('../../userSchemas');

describe('getUsersByNameSchema - First Name IFV Tests', () => {
    test('getUsersByNameSchema - should accept valid first_name "Arif" and last_name "Khan"', () => {
        // Arrange
        const testData = {
            first_name: "Arif",
            last_name: "Khan"
        };
        
        // Act
        const result = getUsersByNameSchema.safeParse(testData);

        console.log("getUsersByNameSchema - should accept valid first_name Arif and last_name Khan - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.first_name).toBe("Arif");
        expect(result.data.first_name.length).toBe(4);
    });

    test('getUsersByNameSchema - should reject invalid first_name datatype 123 and last_name "Khan"', () => {
        // Arrange
        const testData = {
            first_name: 123,
            last_name: "Khan"
        };
        
        // Act
        const result = getUsersByNameSchema.safeParse(testData);

        console.log("getUsersByNameSchema - should reject invalid first_name datatype 123 and last_name Khan - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe("invalid_type");
        expect(testData.first_name).toBe(123);
    });

    test('getUsersByNameSchema - should reject invalid first_name format "Ari_f" and last_name "Khan"', () => {
        // Arrange
        const testData = {
            first_name: "Ari_f",
            last_name: "Khan"
        };
        
        // Act
        const result = getUsersByNameSchema.safeParse(testData);

        console.log("getUsersByNameSchema - should reject invalid first_name format Ari_f and last_name Khan - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe("invalid_string");
        expect(testData.first_name).toBe("Ari_f");
    });

    test('getUsersByNameSchema - should reject empty first_name "" and last_name "Khan"', () => {
        // Arrange
        const testData = {
            first_name: "",
            last_name: "Khan"
        };
        
        // Act
        const result = getUsersByNameSchema.safeParse(testData);

        console.log("getUsersByNameSchema - should reject empty first_name and last_name Khan - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe("too_small");
        expect(testData.first_name).toBe("");
        expect(testData.first_name.length).toBe(0);
    });

    test('getUsersByNameSchema - should reject first_name exceeding maximum length and last_name "Khan"', () => {
        // Arrange
        const testData = {
            first_name: "AbCde-FgHiJkL'mNoPqRsTuVwXyZ-aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkL'mNoPqRsTuVwXyZiuyhjklopopmnbghyta",
            last_name: "Khan"
        };
        
        // Act
        const result = getUsersByNameSchema.safeParse(testData);

        console.log("getUsersByNameSchema - should reject first_name exceeding maximum length and last_name Khan - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe("too_big");
        expect(testData.first_name).toBe("AbCde-FgHiJkL'mNoPqRsTuVwXyZ-aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkL'mNoPqRsTuVwXyZiuyhjklopopmnbghyta");
        expect(testData.first_name.length).toBe(101);
    });

    test('getUsersByNameSchema - should reject missing first_name null and last_name "Khan"', () => {
        // Arrange
        const testData = {
            first_name: null,
            last_name: "Khan"
        };
        
        // Act
        const result = getUsersByNameSchema.safeParse(testData);

        console.log("getUsersByNameSchema - should reject missing first_name null and last_name Khan - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe("invalid_type");
        expect(testData.first_name).toBe(null);
    });
});
