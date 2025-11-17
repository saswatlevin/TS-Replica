// Shirt, Pant, Jean == Chino, Short
const z = require('zod');
const customValidators = require('../Validators/CustomValidators/customFormatValidators');
const objectIdSchema = require('./objectIdSchema');

// Define relationships between total_stock, quantity_sold and current_stock.
const shirtSchema = z.object({
    sku: z.string("The sku field must be a string. It is a required field.").length(10, {message: "The sku must be 10 characters long."}).regex(customValidators.tenCharacterRegex, {message: "The sku can only contain lowercase letters and numbers."}),

    upper_size_letter: z.enum(customValidators.sizeLetterArray, {message: "The upper_size_letter field is a required field. It must be one of the following values: XXL, XL, L, M, S, XS."}),
    
    upper_size_number: customValidators.zodIsUpperSizeNumber,
    
    total_stock: z.number("The total_stock field must be a number (integer). It is a required field.").int("The total_stock field must be an integer.").min(0, {message: "The minimum value of the total_stock field is 0."}).max(600, {message: "The maximum value of the total_stock field is 600"}),

    quantity_sold: z.number("The quantity_sold field must be a number (integer). It is a required field.").int("The quantity_sold field must be an integer. ").min(0, {message: "The minimum value of the quantity_sold field is 0."}).max(600, {message: "The maximum value of the quantity_sold field is 600."}),

    current_stock: z.number("The current_stock field must be a number (integer). It is a required field.").int("The current_stock field must be an integer. ").min(0, {message: "The minimum value of the current_stock field is 0."}).max(600, {message: "The maximum value of the current_stock field is 600."})
}).strict();

// Used for jeans and chinos too.
const pantSchemaWithNumbers = z.object({
    sku: z.string("The sku field must be a string. It is a required field.").length(10, {message: "The sku must be 10 characters long."}).regex(customValidators.tenCharacterRegex, {message: "The sku can only contain lowercase letters and numbers."}),
    
    lower_size_number: customValidators.zodIsLowerSizeNumber,

    inseam_length: customValidators.zodIsInseamLength,
    
    total_stock: z.number("The total_stock field must be a number (integer). It is a required field.").int("The total_stock field must be an integer.").min(0, {message: "The minimum value of the total_stock field is 0."}).max(600, {message: "The maximum value of the total_stock field is 600"}),

    quantity_sold: z.number("The quantity_sold field must be a number (integer). It is a required field.").int("The quantity_sold field must be an integer. ").min(0, {message: "The minimum value of the quantity_sold field is 0."}).max(600, {message: "The maximum value of the quantity_sold field is 600."}),

    current_stock: z.number("The current_stock field must be a number (integer). It is a required field.").int("The current_stock field must be an integer. ").min(0, {message: "The minimum value of the current_stock field is 0."}).max(600, {message: "The maximum value of the current_stock field is 600."})
}).strict();

const pantSchemaWithLetters = z.object({
    sku: z.string("The sku field must be a string. It is a required field.").length(10, {message: "The sku must be 10 characters long."}).regex(customValidators.tenCharacterRegex, {message: "The sku can only contain lowercase letters and numbers."}),
    
    lower_size_letter: z.enum(customValidators.sizeLetterArray, {message: "The lower_size_letter field must be one of the following values: XXL, XL, L, M, S."}),

    inseam_length: customValidators.zodIsInseamLength,
    
    total_stock: z.number("The total_stock field must be a number (integer). It is a required field.").int("The total_stock field must be an integer.").min(0, {message: "The minimum value of the total_stock field is 0."}).max(600, {message: "The maximum value of the total_stock field is 600"}),

    quantity_sold: z.number("The quantity_sold field must be a number (integer). It is a required field.").int("The quantity_sold field must be an integer. ").min(0, {message: "The minimum value of the quantity_sold field is 0."}).max(600, {message: "The maximum value of the quantity_sold field is 600."}),

    current_stock: z.number("The current_stock field must be a number (integer). It is a required field.").int("The current_stock field must be an integer. ").min(0, {message: "The minimum value of the current_stock field is 0."}).max(600, {message: "The maximum value of the current_stock field is 600."})
}).strict();

const shortSchemaWithLetters = z.object({
    sku: z.string("The sku field must be a string. It is a required field.").length(10, {message: "The sku must be 10 characters long."}).regex(customValidators.tenCharacterRegex, {message: "The sku can only contain lowercase letters and numbers."}),
    
    lower_size_letter: z.enum(customValidators.sizeLetterArray, {message: "The lower_size_letter field is a required field. It must be one of the following values: XXL, XL, L, M, S."}),
    
    total_stock: z.number("The total_stock field must be a number (integer). It is a required field.").int("The total_stock field must be an integer.").min(0, {message: "The minimum value of the total_stock field is 0."}).max(600, {message: "The maximum value of the total_stock field is 600."}),

    quantity_sold: z.number("The quantity_sold field must be a number (integer). It is a required field.").int("The quantity_sold field must be an integer.").min(0, {message: "The minimum value of the quantity_sold field is 0."}).max(600, {message: "The maximum value of the quantity_sold field is 600."}),

    current_stock: z.number("The current_stock field must be a number (integer). It is a required field.").int("The current_stock field must be an integer.").min(0, {message: "The minimum value of the current_stock field is 0."}).max(600, {message: "The maximum value of the current_stock field is 600."})
}).strict();

const shortSchemaWithNumbers = z.object({
    sku: z.string("The sku field must be a string. It is a required field.").length(10, {message: "The sku must be 10 characters long."}).regex(customValidators.tenCharacterRegex, {message: "The sku can only contain lowercase letters and numbers."}),
    
    lower_size_number: customValidators.zodIsLowerSizeNumber,
    
    total_stock: z.number("The total_stock field must be a number (integer). It is a required field.").int("The total_stock field must be an integer.").min(0, {message: "The minimum value of the total_stock field is 0."}).max(600, {message: "The maximum value of the total_stock field is 600"}),

    quantity_sold: z.number("The quantity_sold field must be a number (integer). It is a required field.").int("The quantity_sold field must be an integer. ").min(0, {message: "The minimum value of the quantity_sold field is 0."}).max(600, {message: "The maximum value of the quantity_sold field is 600."}),

    current_stock: z.number("The current_stock field must be a number (integer). It is a required field.").int("The current_stock field must be an integer. ").min(0, {message: "The minimum value of the current_stock field is 0."}).max(600, {message: "The maximum value of the current_stock field is 600."})
}).strict();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const shirtRequestSchema = z.object({
    upper_size_letter: z.enum(customValidators.sizeLetterArray, {message: "The upper_size_letter field is a required field. It must be one of the following values: XXL, XL, L, M, S, XS."}),
    
    upper_size_number: customValidators.zodIsUpperSizeNumber,
    
    total_stock: z.number("The total_stock field must be a number (integer). It is a required field.").int("The total_stock field must be an integer.").min(0, {message: "The minimum value of the total_stock field is 0."}).max(600, {message: "The maximum value of the total_stock field is 600"}),

    quantity_sold: z.number("The quantity_sold field must be a number (integer). It is a required field.").int("The quantity_sold field must be an integer. ").min(0, {message: "The minimum value of the quantity_sold field is 0."}).max(600, {message: "The maximum value of the quantity_sold field is 600."}),

    current_stock: z.number("The current_stock field must be a number (integer). It is a required field.").int("The current_stock field must be an integer. ").min(0, {message: "The minimum value of the current_stock field is 0."}).max(600, {message: "The maximum value of the current_stock field is 600."})
}).strict();

// Used for jeans and chinos too.
const pantRequestSchemaWithNumbers = z.object({    
    lower_size_number: customValidators.zodIsLowerSizeNumber,

    inseam_length: customValidators.zodIsInseamLength,
    
    total_stock: z.number("The total_stock field must be a number (integer). It is a required field.").int("The total_stock field must be an integer.").min(0, {message: "The minimum value of the total_stock field is 0."}).max(600, {message: "The maximum value of the total_stock field is 600"}),

    quantity_sold: z.number("The quantity_sold field must be a number (integer). It is a required field.").int("The quantity_sold field must be an integer. ").min(0, {message: "The minimum value of the quantity_sold field is 0."}).max(600, {message: "The maximum value of the quantity_sold field is 600."}),

    current_stock: z.number("The current_stock field must be a number (integer). It is a required field.").int("The current_stock field must be an integer. ").min(0, {message: "The minimum value of the current_stock field is 0."}).max(600, {message: "The maximum value of the current_stock field is 600."})
}).strict();

const pantRequestSchemaWithLetters = z.object({
    lower_size_letter: z.enum(customValidators.sizeLetterArray, {message: "The lower_size_letter field must be one of the following values: XXL, XL, L, M, S."}),

    inseam_length: customValidators.zodIsInseamLength,
    
    total_stock: z.number("The total_stock field must be a number (integer). It is a required field.").int("The total_stock field must be an integer.").min(0, {message: "The minimum value of the total_stock field is 0."}).max(600, {message: "The maximum value of the total_stock field is 600"}),

    quantity_sold: z.number("The quantity_sold field must be a number (integer). It is a required field.").int("The quantity_sold field must be an integer. ").min(0, {message: "The minimum value of the quantity_sold field is 0."}).max(600, {message: "The maximum value of the quantity_sold field is 600."}),

    current_stock: z.number("The current_stock field must be a number (integer). It is a required field.").int("The current_stock field must be an integer. ").min(0, {message: "The minimum value of the current_stock field is 0."}).max(600, {message: "The maximum value of the current_stock field is 600."})
}).strict();

const shortRequestSchemaWithLetters = z.object({
    lower_size_letter: z.enum(customValidators.sizeLetterArray, {message: "The lower_size_letter field is a required field. It must be one of the following values: XXL, XL, L, M, S."}),
    
    total_stock: z.number("The total_stock field must be a number (integer). It is a required field.").int("The total_stock field must be an integer.").min(0, {message: "The minimum value of the total_stock field is 0."}).max(600, {message: "The maximum value of the total_stock field is 600."}),

    quantity_sold: z.number("The quantity_sold field must be a number (integer). It is a required field.").int("The quantity_sold field must be an integer.").min(0, {message: "The minimum value of the quantity_sold field is 0."}).max(600, {message: "The maximum value of the quantity_sold field is 600."}),

    current_stock: z.number("The current_stock field must be a number (integer). It is a required field.").int("The current_stock field must be an integer.").min(0, {message: "The minimum value of the current_stock field is 0."}).max(600, {message: "The maximum value of the current_stock field is 600."})
}).strict();

const shortRequestSchemaWithNumbers = z.object({
    
    lower_size_number: customValidators.zodIsLowerSizeNumber,
    
    total_stock: z.number("The total_stock field must be a number (integer). It is a required field.").int("The total_stock field must be an integer.").min(0, {message: "The minimum value of the total_stock field is 0."}).max(600, {message: "The maximum value of the total_stock field is 600"}),

    quantity_sold: z.number("The quantity_sold field must be a number (integer). It is a required field.").int("The quantity_sold field must be an integer. ").min(0, {message: "The minimum value of the quantity_sold field is 0."}).max(600, {message: "The maximum value of the quantity_sold field is 600."}),

    current_stock: z.number("The current_stock field must be a number (integer). It is a required field.").int("The current_stock field must be an integer. ").min(0, {message: "The minimum value of the current_stock field is 0."}).max(600, {message: "The maximum value of the current_stock field is 600."})
}).strict();
/////////////////////////////////////////////////////////////////////////
const shirtResponseSchema = z.object({
    sku: z.string("The sku field must be a string. It is a required field.").length(10, {message: "The sku must be 10 characters long."}).regex(customValidators.tenCharacterRegex, {message: "The sku can only contain lowercase letters and numbers."}),

    upper_size_letter: z.enum(customValidators.sizeLetterArray, {message: "The upper_size_letter field is a required field. It must be one of the following values: XXL, XL, L, M, S, XS."}),
    
    upper_size_number: customValidators.zodIsUpperSizeNumber,
    
    total_stock: z.number("The total_stock field must be a number (integer). It is a required field.").int("The total_stock field must be an integer.").min(0, {message: "The minimum value of the total_stock field is 0."}).max(600, {message: "The maximum value of the total_stock field is 600"}),

    quantity_sold: z.number("The quantity_sold field must be a number (integer). It is a required field.").int("The quantity_sold field must be an integer. ").min(0, {message: "The minimum value of the quantity_sold field is 0."}).max(600, {message: "The maximum value of the quantity_sold field is 600."}),

    current_stock: z.number("The current_stock field must be a number (integer). It is a required field.").int("The current_stock field must be an integer. ").min(0, {message: "The minimum value of the current_stock field is 0."}).max(600, {message: "The maximum value of the current_stock field is 600."}),
    
    _id: objectIdSchema
}).strict();

// Used for jeans and chinos too.
const pantResponseSchemaWithNumbers = z.object({    
    sku: z.string("The sku field must be a string. It is a required field.").length(10, {message: "The sku must be 10 characters long."}).regex(customValidators.tenCharacterRegex, {message: "The sku can only contain lowercase letters and numbers."}),

    lower_size_number: customValidators.zodIsLowerSizeNumber,

    inseam_length: customValidators.zodIsInseamLength,
    
    total_stock: z.number("The total_stock field must be a number (integer). It is a required field.").int("The total_stock field must be an integer.").min(0, {message: "The minimum value of the total_stock field is 0."}).max(600, {message: "The maximum value of the total_stock field is 600"}),

    quantity_sold: z.number("The quantity_sold field must be a number (integer). It is a required field.").int("The quantity_sold field must be an integer. ").min(0, {message: "The minimum value of the quantity_sold field is 0."}).max(600, {message: "The maximum value of the quantity_sold field is 600."}),

    current_stock: z.number("The current_stock field must be a number (integer). It is a required field.").int("The current_stock field must be an integer. ").min(0, {message: "The minimum value of the current_stock field is 0."}).max(600, {message: "The maximum value of the current_stock field is 600."}),
    
    _id: objectIdSchema
}).strict();

const pantResponseSchemaWithLetters = z.object({
    sku: z.string("The sku field must be a string. It is a required field.").length(10, {message: "The sku must be 10 characters long."}).regex(customValidators.tenCharacterRegex, {message: "The sku can only contain lowercase letters and numbers."}),

    lower_size_letter: z.enum(customValidators.sizeLetterArray, {message: "The lower_size_letter field must be one of the following values: XXL, XL, L, M, S."}),

    inseam_length: customValidators.zodIsInseamLength,
    
    total_stock: z.number("The total_stock field must be a number (integer). It is a required field.").int("The total_stock field must be an integer.").min(0, {message: "The minimum value of the total_stock field is 0."}).max(600, {message: "The maximum value of the total_stock field is 600"}),

    quantity_sold: z.number("The quantity_sold field must be a number (integer). It is a required field.").int("The quantity_sold field must be an integer. ").min(0, {message: "The minimum value of the quantity_sold field is 0."}).max(600, {message: "The maximum value of the quantity_sold field is 600."}),

    current_stock: z.number("The current_stock field must be a number (integer). It is a required field.").int("The current_stock field must be an integer. ").min(0, {message: "The minimum value of the current_stock field is 0."}).max(600, {message: "The maximum value of the current_stock field is 600."}),
    
    _id: objectIdSchema
}).strict();

const shortResponseSchemaWithLetters = z.object({
    sku: z.string("The sku field must be a string. It is a required field.").length(10, {message: "The sku must be 10 characters long."}).regex(customValidators.tenCharacterRegex, {message: "The sku can only contain lowercase letters and numbers."}),

    lower_size_letter: z.enum(customValidators.sizeLetterArray, {message: "The lower_size_letter field is a required field. It must be one of the following values: XXL, XL, L, M, S."}),
    
    total_stock: z.number("The total_stock field must be a number (integer). It is a required field.").int("The total_stock field must be an integer.").min(0, {message: "The minimum value of the total_stock field is 0."}).max(600, {message: "The maximum value of the total_stock field is 600."}),

    quantity_sold: z.number("The quantity_sold field must be a number (integer). It is a required field.").int("The quantity_sold field must be an integer.").min(0, {message: "The minimum value of the quantity_sold field is 0."}).max(600, {message: "The maximum value of the quantity_sold field is 600."}),

    current_stock: z.number("The current_stock field must be a number (integer). It is a required field.").int("The current_stock field must be an integer.").min(0, {message: "The minimum value of the current_stock field is 0."}).max(600, {message: "The maximum value of the current_stock field is 600."}),
    
    _id: objectIdSchema
}).strict();

const shortResponseSchemaWithNumbers = z.object({
    sku: z.string("The sku field must be a string. It is a required field.").length(10, {message: "The sku must be 10 characters long."}).regex(customValidators.tenCharacterRegex, {message: "The sku can only contain lowercase letters and numbers."}),
    
    lower_size_number: customValidators.zodIsLowerSizeNumber,
    
    total_stock: z.number("The total_stock field must be a number (integer). It is a required field.").int("The total_stock field must be an integer.").min(0, {message: "The minimum value of the total_stock field is 0."}).max(600, {message: "The maximum value of the total_stock field is 600"}),

    quantity_sold: z.number("The quantity_sold field must be a number (integer). It is a required field.").int("The quantity_sold field must be an integer. ").min(0, {message: "The minimum value of the quantity_sold field is 0."}).max(600, {message: "The maximum value of the quantity_sold field is 600."}),

    current_stock: z.number("The current_stock field must be a number (integer). It is a required field.").int("The current_stock field must be an integer. ").min(0, {message: "The minimum value of the current_stock field is 0."}).max(600, {message: "The maximum value of the current_stock field is 600."}),
    
    _id: objectIdSchema
}).strict();

const shirtSchemaArray = z.array(shirtSchema);

const pantSchemaWithLettersArray = z.array(pantSchemaWithLetters);

const pantSchemaWithNumbersArray = z.array(pantSchemaWithNumbers);

const shortSchemaWithNumbersArray = z.array(shortSchemaWithLetters);

const shortSchemaWithLettersArray = z.array(shortSchemaWithNumbers);
///////////////////////////////////////////////////////////////////////////////
const shirtRequestSchemaArray = z.array(shirtRequestSchema);

const pantRequestSchemaWithLettersArray = z.array(pantRequestSchemaWithLetters);

const pantRequestSchemaWithNumbersArray = z.array(pantRequestSchemaWithNumbers);

const shortRequestSchemaWithNumbersArray = z.array(shortRequestSchemaWithNumbers);

const shortRequestSchemaWithLettersArray = z.array(shortRequestSchemaWithLetters);
///////////////////////////////////////////////////////////////////////////////////
const shirtResponseSchemaArray = z.array(shirtResponseSchema);

const pantResponseSchemaWithLettersArray = z.array(pantResponseSchemaWithLetters);

const pantResponseSchemaWithNumbersArray = z.array(pantResponseSchemaWithNumbers);

const shortResponseSchemaWithNumbersArray = z.array(shortResponseSchemaWithNumbers);

const shortResponseSchemaWithLettersArray = z.array(shortResponseSchemaWithLetters);

const productItemSchemasUnion = z.union([shirtSchemaArray, pantSchemaWithLettersArray, pantSchemaWithNumbersArray, shortSchemaWithLettersArray, shortSchemaWithNumbersArray]);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const productItemRequestSchemasUnion = z.union([shirtRequestSchemaArray, pantRequestSchemaWithLettersArray, pantRequestSchemaWithNumbersArray, shortRequestSchemaWithNumbersArray, shortRequestSchemaWithLettersArray]);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
const productItemResponseSchemasUnion = z.union([shirtResponseSchemaArray, pantResponseSchemaWithLettersArray, pantResponseSchemaWithNumbersArray, shortResponseSchemaWithNumbersArray, shortResponseSchemaWithLettersArray]);

module.exports = { 
    productItemSchemasUnion, 
    productItemRequestSchemasUnion,
    productItemResponseSchemasUnion
};