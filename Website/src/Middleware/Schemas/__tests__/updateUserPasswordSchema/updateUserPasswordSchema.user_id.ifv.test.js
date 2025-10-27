const { updateUserPasswordSchema } = require('../../userSchemas');

describe('updateUserPasswordSchema - user_id Field Tests', () => {
    test('updateUserPasswordSchema - should accept valid user_id datatype ["ab01dhiojniu", "Soyuz@1966#USSR"]', () => {
        // Arrange
        const testData = {
            user_id: "ab01dhiojniu",
            password: "Soyuz@1966#USSR"
        };
        
        // Act
        const result = updateUserPasswordSchema.safeParse(testData);
        
        console.log("updateUserPasswordSchema - should accept valid user_id datatype [ab01dhiojniu, Soyuz@1966#USSR] - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.user_id).toBe("ab01dhiojniu");
        expect(typeof result.data.user_id).toBe('string');
        expect(result.data.user_id.length).toBe(12);
    });

    test('updateUserPasswordSchema - should reject invalid user_id datatype [123456789011, "Soyuz@1966#USSR"]', () => {
        // Arrange
        const testData = {
            user_id: 123456789011,
            password: "Soyuz@1966#USSR"
        };
        
        // Act
        const result = updateUserPasswordSchema.safeParse(testData);
        
        console.log("updateUserPasswordSchema - should reject invalid user_id datatype [123456789011, Soyuz@1966#USSR] - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe("invalid_type");
        expect(result.error.issues[0].expected).toBe("string");
        expect(result.error.issues[0].received).toBe("number");
    });

    test('updateUserPasswordSchema - should reject invalid user_id format ["ab01dhiojni_", "Soyuz@1966#USSR"]', () => {
        // Arrange
        const testData = {
            user_id: "ab01dhiojni_",
            password: "Soyuz@1966#USSR"
        };
        
        // Act
        const result = updateUserPasswordSchema.safeParse(testData);
        
        console.log("updateUserPasswordSchema - should reject invalid user_id format [ab01dhiojni_, Soyuz@1966#USSR] - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe("invalid_string");
        expect(result.error.issues[0].message).toBe("The user_id can only contain lowercase letters and numbers.");
    });

    test('updateUserPasswordSchema - should reject invalid user_id length below ["ab01dhiojni", "Soyuz@1966#USSR"]', () => {
        // Arrange
        const testData = {
            user_id: "ab01dhiojni",
            password: "Soyuz@1966#USSR"
        };
        
        // Act
        const result = updateUserPasswordSchema.safeParse(testData);
        
        console.log("updateUserPasswordSchema - should reject invalid user_id length below [ab01dhiojni, Soyuz@1966#USSR] - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe("too_small");
        expect(result.error.issues[0].message).toBe("The user_id must be 12 characters long.");
    });

    test('updateUserPasswordSchema - should reject invalid user_id length above ["ab01dhiojnius", "Soyuz@1966#USSR"]', () => {
        // Arrange
        const testData = {
            user_id: "ab01dhiojnius",
            password: "Soyuz@1966#USSR"
        };
        
        // Act
        const result = updateUserPasswordSchema.safeParse(testData);
        
        console.log("updateUserPasswordSchema - should reject invalid user_id length above [ab01dhiojnius, Soyuz@1966#USSR] - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe("too_big");
        expect(result.error.issues[0].message).toBe("The user_id must be 12 characters long.");
    });

    test('updateUserPasswordSchema - should reject empty user_id ["", "Soyuz@1966#USSR"]', () => {
        // Arrange
        const testData = {
            user_id: "",
            password: "Soyuz@1966#USSR"
        };
        
        // Act
        const result = updateUserPasswordSchema.safeParse(testData);
        
        console.log("updateUserPasswordSchema - should reject empty user_id [\"\", Soyuz@1966#USSR] - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe("too_small");
        expect(result.error.issues[0].message).toBe("The user_id must be 12 characters long.");
    });

    test('updateUserPasswordSchema - should reject missing user_id [null, "Soyuz@1966#USSR"]', () => {
        // Arrange
        const testData = {
            user_id: null,
            password: "Soyuz@1966#USSR"
        };
        
        // Act
        const result = updateUserPasswordSchema.safeParse(testData);
        
        console.log("updateUserPasswordSchema - should reject missing user_id [null, Soyuz@1966#USSR] - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe("invalid_type");
        expect(result.error.issues[0].expected).toBe("string");
        expect(result.error.issues[0].received).toBe("null");
    });
});