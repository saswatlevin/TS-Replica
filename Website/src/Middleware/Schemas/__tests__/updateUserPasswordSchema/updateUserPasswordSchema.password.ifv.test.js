const { updateUserPasswordSchema } = require('../../userSchemas');

describe('updateUserPasswordSchema - password Field Tests', () => {
    test('updateUserPasswordSchema - should accept valid password value ["ab01dhiojniu", "Soyuz@1966#USSR"]', () => {
        // Arrange
        const testData = {
            user_id: "ab01dhiojniu",
            password: "Soyuz@1966#USSR"
        };
        
        // Act
        const result = updateUserPasswordSchema.safeParse(testData);
        
        console.log("updateUserPasswordSchema - should accept valid password value [ab01dhiojniu, Soyuz@1966#USSR] - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.password).toBe("Soyuz@1966#USSR");
        expect(typeof result.data.password).toBe('string');
    });

    test('updateUserPasswordSchema - should reject invalid password value below length ["ab01dhiojniu", "Soyuz@1966#"]', () => {
        // Arrange
        const testData = {
            user_id: "ab01dhiojniu",
            password: "Soyuz@1966#"
        };
        
        // Act
        const result = updateUserPasswordSchema.safeParse(testData);
        
        console.log("updateUserPasswordSchema - should reject invalid password value below length [ab01dhiojniu, Soyuz@1966#] - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe("too_small");
        expect(result.error.issues[0].message).toBe("The password field has a minimum length of 12 characters.");
    });

    test('updateUserPasswordSchema - should reject invalid password value above length ["ab01dhiojniu", "Soyuz@1966#USSRA123456789012345"]', () => {
        // Arrange
        const testData = {
            user_id: "ab01dhiojniu",
            password: "Soyuz@1966#USSRA123456789012345"
        };
        
        // Act
        const result = updateUserPasswordSchema.safeParse(testData);
        
        console.log("updateUserPasswordSchema - should reject invalid password value above length [ab01dhiojniu, Soyuz@1966#USSRA123456789012345] - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe("too_big");
        expect(result.error.issues[0].message).toBe("The password field has a maximum permitted length of 30 characters.");
    });

    test('updateUserPasswordSchema - should reject empty password ["ab01dhiojniu", ""]', () => {
        // Arrange
        const testData = {
            user_id: "ab01dhiojniu",
            password: ""
        };
        
        // Act
        const result = updateUserPasswordSchema.safeParse(testData);
        
        console.log("updateUserPasswordSchema - should reject empty password [ab01dhiojniu, \"\"] - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe("too_small");
        expect(result.error.issues[0].message).toBe("The password field has a minimum length of 12 characters.");
    });

    test('updateUserPasswordSchema - should reject missing password ["ab01dhiojniu", null]', () => {
        // Arrange
        const testData = {
            user_id: "ab01dhiojniu",
            password: null
        };
        
        // Act
        const result = updateUserPasswordSchema.safeParse(testData);
        
        console.log("updateUserPasswordSchema - should reject missing password [ab01dhiojniu, null] - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe("invalid_type");
        expect(result.error.issues[0].expected).toBe("string");
        expect(result.error.issues[0].received).toBe("null");
    });
});