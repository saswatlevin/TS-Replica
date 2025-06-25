// Shirt, Pant, Jean == Chino, Short
const z = require('zod');
const customValidators = require('../Validators/CustomValidators/customFormatValidators');

// Define relationships between total_stock, quantity_sold and current_stock.
const shirtSchema = z.object({
    sku: z.string("The sku field must be a string. It is a required field.").length(10, {message: "The sku must be 10 characters long."}).regex(customValidators.tenCharacterRegex, {message: "The sku can only contain lowercase letters and numbers."}),

    upper_size_letter: z.enum(customValidators.sizeLetterArray, {message: "The upper_size_letter field is a required field. It must be one of the following values: XXL, XL, L, M, S, XS."}),
    
    upper_size_number: customValidators.zodIsUpperSizeNumber,
    
    total_stock: z.number("The total_stock field must be a number (integer). It is a required field.").int("The total_stock field must be an integer.").min(0, {message: "The minimum value of the total_stock field is 0."}).max(600, {message: "The maximum value of the total_stock field is 600"}),

    quantity_sold: z.number("The quantity_sold field must be a number (integer). It is a required field.").int("The quantity_sold field must be an integer. ").min(0, {message: "The minimum value of the quantity_sold field is 0."}).max(600, {message: "The maximum value of the quantity_sold field is 600."}),

    current_stock: z.number("The current_stock field must be a number (integer). It is a required field.").int("The current_stock field must be an integer. ").min(0, {message: "The minimum value of the current_stock field is 0."}).max(600, {message: "The maximum value of the current_stock field is 600."})
});

// Used for jeans and chinos too.
const pantSchemaWithNumbers = z.object({
    sku: z.string("The sku field must be a string. It is a required field.").length(10, {message: "The sku must be 10 characters long."}).regex(customValidators.tenCharacterRegex, {message: "The sku can only contain lowercase letters and numbers."}),
    
    lower_size_number: customValidators.zodIsLowerSizeNumber,

    inseam_length: customValidators.zodIsInseamLength,
    
    total_stock: z.number("The total_stock field must be a number (integer). It is a required field.").int("The total_stock field must be an integer.").min(0, {message: "The minimum value of the total_stock field is 0."}).max(600, {message: "The maximum value of the total_stock field is 600"}),

    quantity_sold: z.number("The quantity_sold field must be a number (integer). It is a required field.").int("The quantity_sold field must be an integer. ").min(0, {message: "The minimum value of the quantity_sold field is 0."}).max(600, {message: "The maximum value of the quantity_sold field is 600."}),

    current_stock: z.number("The current_stock field must be a number (integer). It is a required field.").int("The current_stock field must be an integer. ").min(0, {message: "The minimum value of the current_stock field is 0."}).max(600, {message: "The maximum value of the current_stock field is 600."})
});

const pantSchemaWithLetters = z.object({
    sku: z.string("The sku field must be a string. It is a required field.").length(10, {message: "The sku must be 10 characters long."}).regex(customValidators.tenCharacterRegex, {message: "The sku can only contain lowercase letters and numbers."}),
    
    lower_size_letter: z.enum(customValidators.sizeLetterArray, {message: "The lower_size_letter field must be one of the following values: XXL, XL, L, M, S."}),

    inseam_length: customValidators.zodIsInseamLength,
    
    total_stock: z.number("The total_stock field must be a number (integer). It is a required field.").int("The total_stock field must be an integer.").min(0, {message: "The minimum value of the total_stock field is 0."}).max(600, {message: "The maximum value of the total_stock field is 600"}),

    quantity_sold: z.number("The quantity_sold field must be a number (integer). It is a required field.").int("The quantity_sold field must be an integer. ").min(0, {message: "The minimum value of the quantity_sold field is 0."}).max(600, {message: "The maximum value of the quantity_sold field is 600."}),

    current_stock: z.number("The current_stock field must be a number (integer). It is a required field.").int("The current_stock field must be an integer. ").min(0, {message: "The minimum value of the current_stock field is 0."}).max(600, {message: "The maximum value of the current_stock field is 600."})
});

const shortSchemaWithLetters = z.object({
    sku: z.string("The sku field must be a string. It is a required field.").length(10, {message: "The sku must be 10 characters long."}).regex(customValidators.tenCharacterRegex, {message: "The sku can only contain lowercase letters and numbers."}),
    
    lower_size_letter: z.enum(customValidators.sizeLetterArray, {message: "The lower_size_letter field is a required field. It must be one of the following values: XXL, XL, L, M, S."}),
    
    total_stock: z.number("The total_stock field must be a number (integer). It is a required field.").int("The total_stock field must be an integer.").min(0, {message: "The minimum value of the total_stock field is 0."}).max(600, {message: "The maximum value of the total_stock field is 600."}),

    quantity_sold: z.number("The quantity_sold field must be a number (integer). It is a required field.").int("The quantity_sold field must be an integer.").min(0, {message: "The minimum value of the quantity_sold field is 0."}).max(600, {message: "The maximum value of the quantity_sold field is 600."}),

    current_stock: z.number("The current_stock field must be a number (integer). It is a required field.").int("The current_stock field must be an integer.").min(0, {message: "The minimum value of the current_stock field is 0."}).max(600, {message: "The maximum value of the current_stock field is 600."})
});

const shortSchemaWithNumbers = z.object({
    sku: z.string("The sku field must be a string. It is a required field.").length(10, {message: "The sku must be 10 characters long."}).regex(customValidators.tenCharacterRegex, {message: "The sku can only contain lowercase letters and numbers."}),
    
    lower_size_number: customValidators.zodIsLowerSizeNumber,
    
    total_stock: z.number("The total_stock field must be a number (integer). It is a required field.").int("The total_stock field must be an integer.").min(0, {message: "The minimum value of the total_stock field is 0."}).max(600, {message: "The maximum value of the total_stock field is 600"}),

    quantity_sold: z.number("The quantity_sold field must be a number (integer). It is a required field.").int("The quantity_sold field must be an integer. ").min(0, {message: "The minimum value of the quantity_sold field is 0."}).max(600, {message: "The maximum value of the quantity_sold field is 600."}),

    current_stock: z.number("The current_stock field must be a number (integer). It is a required field.").int("The current_stock field must be an integer. ").min(0, {message: "The minimum value of the current_stock field is 0."}).max(600, {message: "The maximum value of the current_stock field is 600."})
});

const shirtSchemaArray = z.array(shirtSchema);

const pantSchemaWithLettersArray = z.array(pantSchemaWithLetters);

const pantSchemaWithNumbersArray = z.array(pantSchemaWithNumbers);

const shortSchemaWithNumbersArray = z.array(shortSchemaWithLetters);

const shortSchemaWithLettersArray = z.array(shortSchemaWithNumbers);

const productItemSchemasUnion = z.union([shirtSchemaArray, pantSchemaWithLettersArray, pantSchemaWithNumbersArray, shortSchemaWithLettersArray, shortSchemaWithNumbersArray]);

module.exports = productItemSchemasUnion;