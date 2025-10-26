const mongoose = require('mongoose');
const { userUpdateSchema } = require('../../userSchemas');

describe('userUpdateSchema - First Name Field Validation Tests', () => {
    test('userUpdateSchema - should accept valid first_name datatype', () => {
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
        const result = userUpdateSchema.safeParse(testData);

        console.log("userUpdateSchema - should accept valid first_name datatype - result?.error?.issues ",   result?.error?.issues);
        // Assert
        expect(result.success).toBe(true);
        expect(result.data.first_name).toBe("Arif");
    });

    test('userUpdateSchema - should reject invalid first_name datatype (number)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            phone_number: "917560847544",
            first_name: 123,
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: 40,
            upper_size_letter: "M",
            others_size_letter: "M",
            email_comms_type: "I want all emails",
            sms_comms: false,
            ShippingAddresses: [],
            CartItems: []
        };
        
        // Act
        const result = userUpdateSchema.safeParse(testData);

        console.log("userUpdateSchema - should reject invalid first_name datatype (number) - result?.error?.issues ",   result?.error?.issues);
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('invalid_type');
        expect(testData.first_name).toBe(123);
    });

    test('userUpdateSchema - should reject invalid first_name format (underscore)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            phone_number: "917560847544",
            first_name: "Ari_f",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: 40,
            upper_size_letter: "M",
            others_size_letter: "M",
            email_comms_type: "I want all emails",
            sms_comms: false,
            ShippingAddresses: [],
            CartItems: []
        };
        
        // Act
        const result = userUpdateSchema.safeParse(testData);

        console.log("userUpdateSchema - should reject invalid first_name format (underscore) - result?.error?.issues ",   result?.error?.issues);
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('invalid_string');
        expect(testData.first_name).toBe("Ari_f");
    });

    test('userUpdateSchema - should reject empty first_name', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            phone_number: "917560847544",
            first_name: "",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: 40,
            upper_size_letter: "M",
            others_size_letter: "M",
            email_comms_type: "I want all emails",
            sms_comms: false,
            ShippingAddresses: [],
            CartItems: []
        };
        
        // Act
        const result = userUpdateSchema.safeParse(testData);

        console.log("userUpdateSchema - should reject empty first_name - result?.error?.issues ",   result?.error?.issues);
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('too_small');
        expect(testData.first_name).toBe("");
    });

    test('userUpdateSchema - should reject first_name with excessive length (101 characters)', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            phone_number: "917560847544",
            first_name:"AbCde-FgHiJkL'mNoPqRsTuVwXyZ-aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkL'mNoPqRsTuVwXyZiuyhjklopopmnbghyta",
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: 40,
            upper_size_letter: "M",
            others_size_letter: "M",
            email_comms_type: "I want all emails",
            sms_comms: false,
            ShippingAddresses: [],
            CartItems: []
        };
        
        // Act
        const result = userUpdateSchema.safeParse(testData);

        console.log("userUpdateSchema - should reject first_name with excessive length (101 characters) - result?.error?.issues ",   result?.error?.issues);
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('too_big');
        expect(testData.first_name).toBe("AbCde-FgHiJkL'mNoPqRsTuVwXyZ-aBcDeFgHiJkLmNoPqRsTuVwXyZaBcDeFgHiJkL'mNoPqRsTuVwXyZiuyhjklopopmnbghyta");
        expect(testData.first_name.length).toBe(101);
    });

    test('userUpdateSchema - should reject missing first_name', () => {
        // Arrange
        const testData = {
            email: "abc_d01@hostmail.com",
            phone_number: "917560847544",
            first_name: null,
            last_name: "Khan",
            user_role: "admin",
            upper_size_number: 40,
            upper_size_letter: "M",
            others_size_letter: "M",
            email_comms_type: "I want all emails",
            sms_comms: false,
            ShippingAddresses: [],
            CartItems: [],
        };
        
        // Act
        const result = userUpdateSchema.safeParse(testData);

        console.log("userUpdateSchema - should reject missing first_name - result?.error?.issues ",   result?.error?.issues);
        // Assert
        expect(result.success).toBe(false);
        expect(result.error.issues[0].code).toBe('invalid_type');
        expect(testData.first_name).toBe(null);
    });
});