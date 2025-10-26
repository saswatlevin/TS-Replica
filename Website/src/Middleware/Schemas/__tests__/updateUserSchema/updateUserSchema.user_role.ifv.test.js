const mongoose = require('mongoose');
const { updateUserSchema } = require('../../userSchemas');

describe('updateUserSchema - User Role Field Validation Tests', () => {
    test('updateUserSchema - should accept valid user_role value (admin)', () => {
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

        console.log("updateUserSchema - should accept valid user_role value (admin) result?.error?.issues ", result?.error?.issues);
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.user_role).toBe("admin");
    });

    test('updateUserSchema - should accept valid user_role value (user)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            phone_number: "917560847544",
            first_name: "Arif",
            last_name: "Khan",
            user_role: "user",
            upper_size_number: 40,
            upper_size_letter: "M",
            others_size_letter: "M",
            email_comms_type: "I want all emails",
            sms_comms: false,
            ShippingAddresses: [],
            CartItems: [],
        };
        
        // Act
        const result = updateUserSchema.safeParse(testData);

        console.log("updateUserSchema - should accept valid user_role value (user) result?.error?.issues ", result?.error?.issues);

        // Assert
        expect(result.success).toBe(true);
        expect(result.data.user_role).toBe("user");
    });

    test('updateUserSchema - should reject invalid user_role value (case-sensitive mismatch)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",            
            phone_number: "917560847544",
            first_name: "Arif",
            last_name: "Khan",
            user_role: "User",
            upper_size_number: 40,
            upper_size_letter: "M",
            others_size_letter: "M",
            email_comms_type: "I want all emails",
            sms_comms: false,
            ShippingAddresses: [],
            CartItems: [],
        };
        
        // Act
        const result = updateUserSchema.safeParse(testData);

        console.log("updateUserSchema - should reject invalid user_role value (case-sensitive mismatch) result?.error?.issues ", result?.error?.issues);

        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('invalid_enum_value');
        expect(testData.user_role).toBe("User");
    });

    test('updateUserSchema - should reject invalid user_role datatype (number)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            phone_number: "917560847544",
            first_name: "Arif",
            last_name: "Khan",
            user_role: 12345,
            upper_size_number: 40,
            upper_size_letter: "M",
            others_size_letter: "M",
            email_comms_type: "I want all emails",
            sms_comms: false,
            ShippingAddresses: [],
            CartItems: [],
        };
        
        // Act
        const result = updateUserSchema.safeParse(testData);

        console.log("updateUserSchema - should reject invalid user_role datatype (number) result?.error?.issues ", result?.error?.issues);

        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('invalid_type');
        expect(testData.user_role).toBe(12345);
    });

    test('updateUserSchema - should reject empty user_role (empty string)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            phone_number: "917560847544",
            first_name: "Arif",
            last_name: "Khan",
            user_role: "",
            upper_size_number: 40,
            upper_size_letter: "M",
            others_size_letter: "M",
            email_comms_type: "I want all emails",
            sms_comms: false,
            ShippingAddresses: [],
            CartItems: [],
        };
        
        // Act
        const result = updateUserSchema.safeParse(testData);

        console.log("updateUserSchema - should reject empty user_role (empty string) result?.error?.issues ", result?.error?.issues);

        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('invalid_enum_value');
        expect(testData.user_role).toBe("");
    });
});