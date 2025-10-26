const { updateUserSchema } = require('../../userSchemas');
const mongoose = require('mongoose');

describe('updateUserSchema - phone_number Field Tests', () => {
    test('updateUserSchema - should accept valid phone_number with correct datatype (string)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            phone_number: "917560847544",
            first_name: "Arif",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: 40,
            upper_size_letter: "M",
            others_size_letter: "M",
            email_comms_type: "I want all emails",
            sms_comms: false
        };
        
        // Act
        const result = updateUserSchema.safeParse(testData);

        console.log("updateUserSchema - should accept valid phone number with correct datatype (string) - result?.error?.issues ",   result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(true);
        expect(typeof result.data.phone_number).toBe('string');
        expect(result.data.phone_number).toBe("917560847544");
    });

    test('updateUserSchema - should reject phone_number with invalid datatype (integer)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            phone_number: 917560847544,
            first_name: "Arif",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: 40,
            upper_size_letter: "M",
            others_size_letter: "M",
            email_comms_type: "I want all emails",
            sms_comms: false
        };
        
        // Act
        const result = updateUserSchema.safeParse(testData);

        console.log("updateUserSchema - should reject phone_number with invalid datatype (integer) - result?.error?.issues ",   result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('invalid_type');
        expect(testData.phone_number).toBe(917560847544);
    });

    test('updateUserSchema - should reject phone_number with invalid format', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            phone_number: "9175-6084-7544",
            first_name: "Arif",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: 40,
            upper_size_letter: "M",
            others_size_letter: "M",
            email_comms_type: "I want all emails",
            sms_comms: false
        };
        
        // Act
        const result = updateUserSchema.safeParse(testData);

        console.log("updateUserSchema - should reject phone_number with invalid format - result?.error?.issues ",   result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('too_big');
        expect(testData.phone_number).toBe("9175-6084-7544");
    });

    test('updateUserSchema - should reject phone_number with insufficient length (5 characters)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            phone_number: "12345",
            first_name: "Arif",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: 40,
            upper_size_letter: "M",
            others_size_letter: "M",
            email_comms_type: "I want all emails",
            sms_comms: false
        };
        
        // Act
        const result = updateUserSchema.safeParse(testData);

        console.log("updateUserSchema - should reject phone_number with insufficient length (5 characters) - result?.error?.issues ",   result?.error?.issues);
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('too_small');
        expect(testData.phone_number).toBe("12345");
    });

    test('updateUserSchema - should reject phone_number with excessive length (13 characters with +)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            phone_number: "+917560847544",
            first_name: "Arif",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: 40,
            upper_size_letter: "M",
            others_size_letter: "M",
            email_comms_type: "I want all emails",
            sms_comms: false
        };
        
        // Act
        const result = updateUserSchema.safeParse(testData);

        console.log("updateUserSchema - should reject phone_number with excessive length (13 characters with +) - result?.error?.issues ",   result?.error?.issues);
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('too_big');
        expect(testData.phone_number).toBe("+917560847544");
    });

    test('updateUserSchema - should reject empty phone_number', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            phone_number: "",
            first_name: "Arif",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: 40,
            upper_size_letter: "M",
            others_size_letter: "M",
            email_comms_type: "I want all emails",
            sms_comms: false
        };
        
        // Act
        const result = updateUserSchema.safeParse(testData);
        
        console.log("updateUserSchema - should reject empty phone_number - result?.error?.issues ",   result?.error?.issues);
        
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('too_small');
        expect(testData.phone_number).toBe("");
    });

    test('updateUserSchema - should reject missing phone_number', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            phone_number: null,
            first_name: "Arif",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: 40,
            upper_size_letter: "M",
            others_size_letter: "M",
            email_comms_type: "I want all emails",
            sms_comms: false
        };
        
        // Act
        const result = updateUserSchema.safeParse(testData);

        console.log("updateUserSchema - should reject missing phone_number - result?.error?.issues ",   result?.error?.issues);
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('invalid_type');
        expect(testData.phone_number).toBe(null);
    });
});