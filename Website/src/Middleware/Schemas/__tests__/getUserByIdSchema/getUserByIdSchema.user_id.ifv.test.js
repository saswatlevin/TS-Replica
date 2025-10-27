const mongoose = require('mongoose');
const { getUserByIdSchema } = require('../../userSchemas');

describe('getUserByIdSchema - user_id Field Tests', () => {
    test('getUserByIdSchema - should accept valid user_id with correct datatype (string)', () => {
        // Arrange
        const testData = {
            user_id: "ab01dhiojniu"
        };
        
        // Act
        const result = getUserByIdSchema.safeParse(testData);

        console.log("getUserByIdSchema - should accept valid user_id with correct datatype (string) - result?.error?.issues ",   result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(true);
        expect(typeof result.data.user_id).toBe('string');
        expect(result.data.user_id).toBe("ab01dhiojniu");
    });

    test('getUserByIdSchema - should reject user_id with integer datatype', () => {
        // Arrange
        const testData = {
            user_id: 123456789012
        };
        
        // Act
        const result = getUserByIdSchema.safeParse(testData)
        console.log("getUserByIdSchema - should reject user_id with integer datatype - result?.error?.issues ",   result?.error?.issues);
        
        // Assert
        expect(testData.user_id).toBe(123456789012);
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('invalid_type');
    });
    
    test('getUserByIdSchema - should reject user_id with invalid format (underscore)', () => {
        // Arrange
        const testData = {
            user_id: "ab01dhiojni_"
        };
        
        // Act
        const result = getUserByIdSchema.safeParse(testData)
        console.log("getUserByIdSchema - should reject user_id with invalid format (underscore) - result?.error?.issues ",   result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(testData.user_id).toBe("ab01dhiojni_");
        expect(result.error.issues[0].code).toBe('invalid_string');
    });

    test('getUserByIdSchema - should reject user_id with insufficient length (11 characters)', () => {
        // Arrange
        const testData = {
            user_id: "ab01dhiojni"
        };
        
        // Act
        const result = getUserByIdSchema.safeParse(testData)
        console.log("getUserByIdSchema - should reject user_id with insufficient length (11 characters) - result?.error?.issues ",   result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(testData.user_id).toBe("ab01dhiojni");
        expect(testData.user_id.length).toBe(11);
        expect(result.error.issues[0].code).toBe('too_small');
    });

    test('getUserByIdSchema - should reject user_id with excessive length (13 characters) ', () => {
        // Arrange
        const testData = {
            user_id: "ab01dhiojnius"
        };
        
        // Act
        const result = getUserByIdSchema.safeParse(testData)
        console.log("getUserByIdSchema - should reject user_id with excessive length (13 characters) - result?.error?.issues ",   result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(testData.user_id).toBe("ab01dhiojnius");
        expect(testData.user_id.length).toBe(13);
        expect(result.error.issues[0].code).toBe('too_big');
    });

    test('getUserByIdSchema - should reject empty user_id (0 characters) ', () => {
        // Arrange
        const testData = {
            user_id: ""
        };
        
        // Act
        const result = getUserByIdSchema.safeParse(testData)
        console.log("getUserByIdSchema - should reject empty user_id (0 characters) - result?.error?.issues ",   result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(testData.user_id).toBe("");
        expect(testData.user_id.length).toBe(0);
        expect(result.error.issues[0].code).toBe('too_small');
    });

    test('getUserByIdSchema - should reject missing user_id (null value) ', () => {
        // Arrange
        const testData = {
            user_id: null
        };
        
        // Act
        const result = getUserByIdSchema.safeParse(testData)
        console.log("getUserByIdSchema - should reject missing user_id (null value) - result?.error?.issues ",   result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(testData.user_id).toBe(null);
        expect(result.error.issues[0].code).toBe('invalid_type');
    });
});