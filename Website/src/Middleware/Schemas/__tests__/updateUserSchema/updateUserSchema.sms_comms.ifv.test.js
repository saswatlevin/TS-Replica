const mongoose = require('mongoose');
const { updateUserSchema } = require('../../userSchemas');

describe('updateUserSchema - SMS Comms Field Validation Tests', () => {
    test('updateUserSchema - should accept valid sms_comms (false)', () => {
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

        // Assert
        expect(result.success).toBe(true);
        expect(result.data.sms_comms).toBe(false);
    });

    test('updateUserSchema - should accept valid sms_comms (true)', () => {
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
            sms_comms: true
        };
        
        // Act
        const result = updateUserSchema.safeParse(testData);

        // Assert
        expect(result.success).toBe(true);
        expect(result.data.sms_comms).toBe(true);
    });

    test('updateUserSchema - should reject invalid sms_comms datatype (string)', () => {
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
            sms_comms: "false"
        };
        
        // Act
        const result = updateUserSchema.safeParse(testData);

        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('invalid_type');
        expect(testData.sms_comms).toBe("false");
    });

    test('updateUserSchema - should reject missing sms_comms (null)', () => {
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
            sms_comms: null
        };
        
        // Act
        const result = updateUserSchema.safeParse(testData);

        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('invalid_type');
        expect(testData.sms_comms).toBe(null);
    });
});