const mongoose = require('mongoose');
const { updateUserSchema } = require('../../userSchemas');

describe('updateUserSchema - Email Comms Type Field Validation Tests', () => {
    test('updateUserSchema - should accept valid email_comms_type ("I want all emails")', () => {
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

        console.log("updateUserSchema - should accept valid email_comms_type (\"I want all emails\") - result?.error?.issues ",   result?.error?.issues);
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.email_comms_type).toBe("I want all emails");
    });

    test('updateUserSchema - should accept valid email_comms_type ("One weekly recap")', () => {
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
            email_comms_type: "One weekly recap",
            sms_comms: false
        };
        
        // Act
        const result = updateUserSchema.safeParse(testData);

        // Assert
        expect(result.success).toBe(true);
        expect(result.data.email_comms_type).toBe("One weekly recap");
    });

    test('updateUserSchema - should accept valid email_comms_type ("Stock notifications only")', () => {
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
            email_comms_type: "Stock notifications only",
            sms_comms: false
        };
        
        // Act
        const result = updateUserSchema.safeParse(testData);

        console.log("updateUserSchema - should accept valid email_comms_type (Stock notifications only) - result?.error?.issues ",   result?.error?.issues);
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.email_comms_type).toBe("Stock notifications only");
    });

    test('updateUserSchema - should accept valid email_comms_type ("Never / Unsubscribe")', () => {
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
            email_comms_type: "Never / Unsubscribe",
            sms_comms: false
        };
        
        // Act
        const result = updateUserSchema.safeParse(testData);

        console.log("updateUserSchema - should accept valid email_comms_type (Never / Unsubscribe) - result?.error?.issues ",   result?.error?.issues);
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.email_comms_type).toBe("Never / Unsubscribe");
    });

    test('updateUserSchema - should reject invalid email_comms_type ("Always" - not in enum)', () => {
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
            email_comms_type: "Always",
            sms_comms: false
        };
        
        // Act
        const result = updateUserSchema.safeParse(testData);

        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('invalid_enum_value');
        expect(testData.email_comms_type).toBe("Always");
    });

    test('updateUserSchema - should reject invalid email_comms_type datatype (number)', () => {
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
            email_comms_type: 123,
            sms_comms: false
        };
        
        // Act
        const result = updateUserSchema.safeParse(testData);

        console.log("updateUserSchema - should reject invalid email_comms_type datatype (number) - result?.error?.issues ",   result?.error?.issues);
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('invalid_type');
        expect(testData.email_comms_type).toBe(123);
    });

    test('updateUserSchema - should reject empty email_comms_type', () => {
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
            email_comms_type: "",
            sms_comms: false
        };
        
        // Act
        const result = updateUserSchema.safeParse(testData);

        console.log("updateUserSchema - should reject empty email_comms_type - result?.error?.issues ",   result?.error?.issues);
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('invalid_enum_value');
        expect(testData.email_comms_type).toBe("");
    });

    test('updateUserSchema - should reject missing email_comms_type (null)', () => {
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
            email_comms_type: null,
            sms_comms: false
        };
        
        // Act
        const result = updateUserSchema.safeParse(testData);

        console.log("updateUserSchema - should reject missing email_comms_type (null) - result?.error?.issues ",   result?.error?.issues);
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('invalid_type');
        expect(testData.email_comms_type).toBe(null);
    });
});