const { updateUserPasswordSchema } = require('../../userSchemas');

describe('updateUserPasswordSchema - Happy Path Tests', () => {
    test('updateUserPasswordSchema - should accept valid user_id and password ["ab01dhiojniu", "Soyuz@1966#USSR"]', () => {
        // Arrange
        const testData = {
            user_id: "ab01dhiojniu",
            password: "Soyuz@1966#USSR"
        };
        
        // Act
        const result = updateUserPasswordSchema.safeParse(testData);
        
        console.log("updateUserPasswordSchema - should accept valid user_id and password [ab01dhiojniu, Soyuz@1966#USSR] - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.user_id).toBe("ab01dhiojniu");
        expect(result.data.password).toBe("Soyuz@1966#USSR");
        expect(result.data.user_id.length).toBe(12);
    });

    test('updateUserPasswordSchema - should accept valid user_id with numbers and password ["mn9i1asdfgvc", "Soyuz@1966#USSR"]', () => {
        // Arrange
        const testData = {
            user_id: "mn9i1asdfgvc",
            password: "Soyuz@1966#USSR"
        };
        
        // Act
        const result = updateUserPasswordSchema.safeParse(testData);
        
        console.log("updateUserPasswordSchema - should accept valid user_id with numbers and password [mn9i1asdfgvc, Soyuz@1966#USSR] - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.user_id).toBe("mn9i1asdfgvc");
        expect(result.data.password).toBe("Soyuz@1966#USSR");
        expect(result.data.user_id.length).toBe(12);
    });
});

describe('updateUserPasswordSchema - Happy Path Boundary Test Cases', () => {
    test('updateUserPasswordSchema - should accept password with minimum length (12 characters) ["ab01dhiojniu", "Soyuz@1966#U"]', () => {
        // Arrange
        const testData = {
            user_id: "ab01dhiojniu",
            password: "Soyuz@1966#U"
        };
        
        // Act
        const result = updateUserPasswordSchema.safeParse(testData);
        
        console.log("updateUserPasswordSchema - should accept password with minimum length (12 characters) [ab01dhiojniu, Soyuz@1966#U] - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.user_id).toBe("ab01dhiojniu");
        expect(result.data.password).toBe("Soyuz@1966#U");
        expect(result.data.password.length).toBe(12);
    });

    test('updateUserPasswordSchema - should accept password with maximum length (30 characters) ["ab01dhiojniu", "Soyuz@1966#U9rT4mLpQv7Xe2nHsG"]', () => {
        // Arrange
        const testData = {
            user_id: "ab01dhiojniu",
            password: "Soyuz@1966#U9rT4mLpQv7Xe2nHsG1"
        };
        
        // Act
        const result = updateUserPasswordSchema.safeParse(testData);
        
        console.log("updateUserPasswordSchema - should accept password with maximum length (30 characters) [ab01dhiojniu, Soyuz@1966#U9rT4mLpQv7Xe2nHsG] - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.user_id).toBe("ab01dhiojniu");
        expect(result.data.password).toBe("Soyuz@1966#U9rT4mLpQv7Xe2nHsG1");
        expect(result.data.password.length).toBe(30);
    });
});