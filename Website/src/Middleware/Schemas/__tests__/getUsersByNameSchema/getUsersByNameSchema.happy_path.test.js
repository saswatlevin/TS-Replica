const mongoose = require('mongoose');
const { getUsersByNameSchema } = require('../../userSchemas');

describe('getUsersByNameSchema - Happy Path Tests', () => {
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
        expect(result.data.last_name).toBe("Khan");
        expect(result.data.first_name.length).toBe(4);
        expect(result.data.last_name.length).toBe(4);
    });

    test('getUsersByNameSchema - should accept valid first_name "Yuri" and last_name "Koptev"', () => {
        // Arrange
        const testData = {
            first_name: "Yuri",
            last_name: "Koptev"
        };
        
        // Act
        const result = getUsersByNameSchema.safeParse(testData);

        console.log("getUsersByNameSchema - should accept valid first_name Yuri and last_name Koptev - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.first_name).toBe("Yuri");
        expect(result.data.last_name).toBe("Koptev");
        expect(result.data.first_name.length).toBe(4);
        expect(result.data.last_name.length).toBe(6);
    });
});

describe('getUsersByNameSchema - Happy Path Boundary Tests', () => {
    test('getUsersByNameSchema - should accept first_name minimum length "A" and last_name "Khan"', () => {
        // Arrange
        const testData = {
            first_name: "A",
            last_name: "Khan"
        };
        
        // Act
        const result = getUsersByNameSchema.safeParse(testData);

        console.log("getUsersByNameSchema - should accept first_name minimum length A and last_name Khan - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.first_name).toBe("A");
        expect(result.data.last_name).toBe("Khan");
        expect(result.data.first_name.length).toBe(1);
        expect(result.data.last_name.length).toBe(4);
    });

    test('getUsersByNameSchema - should accept first_name maximum length and last_name "Khan"', () => {
        // Arrange
        const testData = {
            first_name: "AbCde-FgHiJkL'mNoPqRsTuVwXyZ-aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkL'mNoPqRsTuVwXyZiuyhjklopopmnbghyt",
            last_name: "Khan"
        };
        
        // Act
        const result = getUsersByNameSchema.safeParse(testData);

        console.log("getUsersByNameSchema - should accept first_name maximum length and last_name Khan - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.first_name).toBe("AbCde-FgHiJkL'mNoPqRsTuVwXyZ-aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkL'mNoPqRsTuVwXyZiuyhjklopopmnbghyt");
        expect(result.data.last_name).toBe("Khan");
        expect(result.data.first_name.length).toBe(100);
        expect(result.data.last_name.length).toBe(4);
    });

    test('getUsersByNameSchema - should accept first_name "Arif" and last_name with hyphen "Zaghari-Ratcliffe"', () => {
        // Arrange
        const testData = {
            first_name: "Arif",
            last_name: "Zaghari-Ratcliffe"
        };
        
        // Act
        const result = getUsersByNameSchema.safeParse(testData);

        console.log("getUsersByNameSchema - should accept first_name Arif and last_name with hyphen Zaghari-Ratcliffe - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.first_name).toBe("Arif");
        expect(result.data.last_name).toBe("Zaghari-Ratcliffe");
        expect(result.data.first_name.length).toBe(4);
        expect(result.data.last_name.length).toBe(17);
    });

    test('getUsersByNameSchema - should accept first_name "Arif" and last_name minimum length "B"', () => {
        // Arrange
        const testData = {
            first_name: "Arif",
            last_name: "B"
        };
        
        // Act
        const result = getUsersByNameSchema.safeParse(testData);

        console.log("getUsersByNameSchema - should accept first_name Arif and last_name minimum length B - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.first_name).toBe("Arif");
        expect(result.data.last_name).toBe("B");
        expect(result.data.first_name.length).toBe(4);
        expect(result.data.last_name.length).toBe(1);
    });

    test('getUsersByNameSchema - should accept first_name "Arif" and last_name maximum length', () => {
        // Arrange
        const testData = {
            first_name: "Arif",
            last_name: "AbCde-FgHiJkL'mNoPqRsTuVwXyZ-aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkL'mNoPqRsTuVwXyZiuyhjklopopmnbghyt"
        };
        
        // Act
        const result = getUsersByNameSchema.safeParse(testData);

        console.log("getUsersByNameSchema - should accept first_name Arif and last_name maximum length - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.first_name).toBe("Arif");
        expect(result.data.last_name).toBe("AbCde-FgHiJkL'mNoPqRsTuVwXyZ-aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkL'mNoPqRsTuVwXyZiuyhjklopopmnbghyt");
        expect(result.data.first_name.length).toBe(4);
        expect(result.data.last_name.length).toBe(100);
    });
});
