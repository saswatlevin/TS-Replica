const mongoose = require('mongoose');
const { updateUserSchema } = require('../../userSchemas');

    describe('updateUserSchema - Others Size Letter Field Validation Tests', () => {
        test('updateUserSchema - should accept valid others_size_letter (XXL)', () => {
            // Arrange
            const testData = {
                email: "abc_d01@hostmail.com",
                phone_number: "917560847544",
                first_name: "Arif",
                last_name: "Khan",
                user_role: "admin",
                upper_size_number: 40,
                upper_size_letter: "XXL",
                others_size_letter: "XXL",
                email_comms_type: "I want all emails",
                sms_comms: false
            };
            
            // Act
            const result = updateUserSchema.safeParse(testData);
            console.log("updateUserSchema - should accept valid others_size_letter (XXL) - result?.error?.issues ",   result?.error?.issues);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.others_size_letter).toBe("XXL");
        });

        test('updateUserSchema - should accept valid others_size_letter (XL)', () => {
            // Arrange
            const testData = {
                email: "abc_d01@hostmail.com",
                phone_number: "917560847544",
                first_name: "Arif",
                last_name: "Khan",
                user_role: "admin",
                upper_size_number: 40,
                upper_size_letter: "XL",
                others_size_letter: "XL",
                email_comms_type: "I want all emails",
                sms_comms: false
            };
            
            console.log("updateUserSchema - should accept valid others_size_letter (XL) - result?.error?.issues ",   result?.error?.issues);

            // Act
            const result = updateUserSchema.safeParse(testData);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.others_size_letter).toBe("XL");
        });

        test('updateUserSchema - should accept valid others_size_letter (L)', () => {
            // Arrange
            const testData = {
                email: "abc_d01@hostmail.com",
                phone_number: "917560847544",
                first_name: "Arif",
                last_name: "Khan",
                user_role: "admin",
                upper_size_number: 40,
                upper_size_letter: "L",
                others_size_letter: "L",
                email_comms_type: "I want all emails",
                sms_comms: false
            };
            
            console.log("updateUserSchema - should accept valid others_size_letter (L) - result?.error?.issues ",   result?.error?.issues);
            // Act
            const result = updateUserSchema.safeParse(testData);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.others_size_letter).toBe("L");
        });

        test('updateUserSchema - should accept valid others_size_letter (M)', () => {
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
            
            console.log("updateUserSchema - should accept valid others_size_letter (M) - result?.error?.issues ",   result?.error?.issues);
            // Act
            const result = updateUserSchema.safeParse(testData);

            // Assert
            expect(result.success).toBe(true);
            expect(result.data.others_size_letter).toBe("M");
        });

        test('updateUserSchema - should accept valid others_size_letter (S)', () => {
            // Arrange
            const testData = {
                email: "abc_d01@hostmail.com",
                phone_number: "917560847544",
                first_name: "Arif",
                last_name: "Khan",
                user_role: "admin",
                upper_size_number: 40,
                upper_size_letter: "S",
                others_size_letter: "S",
                email_comms_type: "I want all emails",
                sms_comms: false
            };
            
            // Act
            const result = updateUserSchema.safeParse(testData);

            console.log("updateUserSchema - should accept valid others_size_letter (S) - result?.error?.issues ",   result?.error?.issues);
            // Assert
            expect(result.success).toBe(true);
            expect(result.data.others_size_letter).toBe("S");
        });

        test('updateUserSchema - should accept valid others_size_letter (XS)', () => {
            // Arrange
            const testData = {
                email: "abc_d01@hostmail.com",
                phone_number: "917560847544",
                first_name: "Arif",
                last_name: "Khan",
                user_role: "admin",
                upper_size_number: 40,
                upper_size_letter: "XS",
                others_size_letter: "XS",
                email_comms_type: "I want all emails",
                sms_comms: false
            };
            
            // Act
            const result = updateUserSchema.safeParse(testData);

            console.log("updateUserSchema - should accept valid others_size_letter (XS) - result?.error?.issues ",   result?.error?.issues);
            // Assert
            expect(result.success).toBe(true);
            expect(result.data.others_size_letter).toBe("XS");
        });

        test('updateUserSchema - should reject invalid others_size_letter (XXXL - not in enum)', () => {
            // Arrange
            const testData = {
                email: "abc_d01@hostmail.com",
                phone_number: "917560847544",
                first_name: "Arif",
                last_name: "Khan",
                user_role: "admin",
                upper_size_number: 40,
                upper_size_letter: "M",
                others_size_letter: "XXXL",
                email_comms_type: "I want all emails",
                sms_comms: false
            };
            
            // Act
            const result = updateUserSchema.safeParse(testData);

            console.log("updateUserSchema - should reject invalid others_size_letter (XXXL - not in enum) - result?.error?.issues ",   result?.error?.issues);
            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBe('invalid_enum_value');
            expect(testData.others_size_letter).toBe("XXXL");
        });

        test('updateUserSchema - should reject invalid others_size_letter (XXS - not in enum)', () => {
            // Arrange
            const testData = {
                email: "abc_d01@hostmail.com",
                phone_number: "917560847544",
                first_name: "Arif",
                last_name: "Khan",
                user_role: "admin",
                upper_size_number: 40,
                upper_size_letter: "M",
                others_size_letter: "XXS",
                email_comms_type: "I want all emails",
                sms_comms: false
            };
            
            // Act
            const result = updateUserSchema.safeParse(testData);
            console.log("updateUserSchema - should reject invalid others_size_letter (XXS - not in enum) - result?.error?.issues ",   result?.error?.issues);

            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBe('invalid_enum_value');
            expect(testData.others_size_letter).toBe("XXS");
        });

        test('updateUserSchema - should reject invalid others_size_letter datatype (number)', () => {
            // Arrange
            const testData = {
                email: "abc_d01@hostmail.com",
                phone_number: "917560847544",
                first_name: "Arif",
                last_name: "Khan",
                user_role: "admin",
                upper_size_number: 40,
                upper_size_letter: "M",
                others_size_letter: 2615,
                email_comms_type: "I want all emails",
                sms_comms: false
            };
            
            // Act
            const result = updateUserSchema.safeParse(testData);

            console.log("updateUserSchema - should reject invalid others_size_letter datatype (number) - result?.error?.issues ",   result?.error?.issues);
            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBe('invalid_type');
            expect(testData.others_size_letter).toBe(2615);
        });

        test('updateUserSchema - should reject empty others_size_letter', () => {
            // Arrange
            const testData = {
                email: "abc_d01@hostmail.com",
                phone_number: "917560847544",
                first_name: "Arif",
                last_name: "Khan",
                user_role: "admin",
                upper_size_number: 40,
                upper_size_letter: "M",
                others_size_letter: "",
                email_comms_type: "I want all emails",
                sms_comms: false
            };
            
            // Act
            const result = updateUserSchema.safeParse(testData);

            console.log("updateUserSchema - should reject empty others_size_letter - result?.error?.issues ",   result?.error?.issues);
            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBe('invalid_enum_value');
            expect(testData.others_size_letter.length).toBe(0);
            expect(testData.others_size_letter).toBe("");
        });

        test('updateUserSchema - should reject missing others_size_letter (null)', () => {
            // Arrange
            const testData = {
                email: "abc_d01@hostmail.com",
                phone_number: "917560847544",
                first_name: "Arif",
                last_name: "Khan",
                user_role: "admin",
                upper_size_number: 40,
                upper_size_letter: "M",
                others_size_letter: null,
                email_comms_type: "I want all emails",
                sms_comms: false
            };
            
            // Act
            const result = updateUserSchema.safeParse(testData);
            console.log("updateUserSchema - should reject missing others_size_letter (null) - result?.error?.issues ",   result?.error?.issues);

            // Assert
            expect(result.success).toBe(false);
            expect(result.error.issues[0].code).toBe('invalid_type');
            expect(testData.others_size_letter).toBe(null);
        });
    });