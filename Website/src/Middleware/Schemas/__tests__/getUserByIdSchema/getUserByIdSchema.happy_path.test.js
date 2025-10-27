const mongoose = require('mongoose');
const { getUserByIdSchema } = require('../../userSchemas');

describe('getUserByIdSchema - Happy Path Tests', () => {
    test('getUserByIdSchema - should accept valid user_id "ab01dhiojniu"', () => {
        // Arrange
        const testData = {
            user_id: "ab01dhiojniu"
        };
        
        // Act
        const result = getUserByIdSchema.safeParse(testData);

        console.log("getUserByIdSchema - should accept valid user_id ab01dhiojniu - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.user_id).toBe("ab01dhiojniu");
        expect(result.data.user_id.length).toBe(12);
    });

    test('getUserByIdSchema - should accept valid user_id "mn9i1asdfgvc"', () => {
        // Arrange
        const testData = {
            user_id: "mn9i1asdfgvc"
        };
        
        // Act
        const result = getUserByIdSchema.safeParse(testData);

        console.log("getUserByIdSchema - should accept valid user_id mn9i1asdfgvc - result?.error?.issues ", result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.user_id).toBe("mn9i1asdfgvc");
        expect(result.data.user_id.length).toBe(12);
    });
});
