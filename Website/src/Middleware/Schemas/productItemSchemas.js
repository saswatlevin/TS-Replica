// Shirt, Pant, Jean == Chino, Short
const z = require('zod');
const customValidators = require('../CustomValidators/customValidators');

// Define relationships between total_stock, quantity_sold and current_stock.
const shirtSchema = z.object({
    sku: customValidators.zodIsTenCharacterId,

    upper_size_letter: customValidators.upperSizeLetterEnum,
    
    upper_size_number: customValidators.zodIsUpperSizeNumber,
    
    total_stock: z.number("The total_stock field must be a number (integer). It is a required field.").int("The total_stock field must be an integer.").min(1, {message: "The minimum value of the total_stock field is 1"}).max(600, {message: "The maximum value of the total_stock field is 600"}),

    quantity_sold: z.number("The quantity_sold field must be a number (integer). It is a required field.").int("The quantity_sold field must be an integer. ").min(1, {message: "The minimum value of the quantity_sold field is 1."}).max(600, {message: "The maximum value of the quantity_sold field is 600."}),

    current_stock: z.number("The current_stock field must be a number (integer). It is a required field.").int("The current_stock field must be an integer. ").min(1, {message: "The minimum value of the current_stock field is 1."}).max(600, {message: "The maximum value of the current_stock field is 600."})
});

// Used for jeans and chinos too.
const pantSchemaWithNumbers = z.object({
    sku: customValidators.zodIsTenCharacterId,
    
    lower_size_number: customValidators.zodIsLowerSizeNumber,

    inseam_length: z.literal([32, 34], {message: "The inseam_length field is a required field. It must be one of the following integer values: 32, 34."}),
    
    total_stock: z.number("The total_stock field must be a number (integer). It is a required field.").int("The total_stock field must be an integer.").min(1, {message: "The minimum value of the total_stock field is 1"}).max(600, {message: "The maximum value of the total_stock field is 600"}),

    quantity_sold: z.number("The quantity_sold field must be a number (integer). It is a required field.").int("The quantity_sold field must be an integer. ").min(1, {message: "The minimum value of the quantity_sold field is 1."}).max(600, {message: "The maximum value of the quantity_sold field is 600."}),

    current_stock: z.number("The current_stock field must be a number (integer). It is a required field.").int("The current_stock field must be an integer. ").min(1, {message: "The minimum value of the current_stock field is 1."}).max(600, {message: "The maximum value of the current_stock field is 600."})
});

const pantSchemaWithLetters = z.object({
    sku: customValidators.zodIsTenCharacterId,
    
    lower_size_letter: z.enum(["XXL", "XL", "L", "M", "S", "XS"], {message: "The lower_size_letter field must be one of the following values: XXL, XL, L, M, S."}),
    //.min(1, {message: "The lower_size_letter field is a required field."}),

    inseam_length: z.literal([32, 34], {message: "The inseam_length field must be one of the following integer values: 32, 34."}),
    
    total_stock: z.number("The total_stock field must be a number (integer). It is a required field.").int("The total_stock field must be an integer.").min(1, {message: "The minimum value of the total_stock field is 1"}).max(600, {message: "The maximum value of the total_stock field is 600"}),

    quantity_sold: z.number("The quantity_sold field must be a number (integer). It is a required field.").int("The quantity_sold field must be an integer. ").min(1, {message: "The minimum value of the quantity_sold field is 1."}).max(600, {message: "The maximum value of the quantity_sold field is 600."}),

    current_stock: z.number("The current_stock field must be a number (integer). It is a required field.").int("The current_stock field must be an integer. ").min(1, {message: "The minimum value of the current_stock field is 1."}).max(600, {message: "The maximum value of the current_stock field is 600."})
});

const shortSchemaWithLetters = z.object({
    sku: customValidators.zodIsTenCharacterId,
    
    lower_size_letter: z.enum(["XXL", "XL", "L", "M", "S", "XS"], {message: "The lower_size_letter field must be one of the following values: XXL, XL, L, M, S."}),
    //.min(1, {message: "The lower_size_letter field is a required field."}),
    
    total_stock: z.number("The total_stock field must be a number (integer). It is a required field.").int("The total_stock field must be an integer.").min(1, {message: "The minimum value of the total_stock field is 1"}).max(600, {message: "The maximum value of the total_stock field is 600"}),

    quantity_sold: z.number("The quantity_sold field must be a number (integer). It is a required field.").int("The quantity_sold field must be an integer. ").min(1, {message: "The minimum value of the quantity_sold field is 1."}).max(600, {message: "The maximum value of the quantity_sold field is 600."}),

    current_stock: z.number("The current_stock field must be a number (integer). It is a required field.").int("The current_stock field must be an integer. ").min(1, {message: "The minimum value of the current_stock field is 1."}).max(600, {message: "The maximum value of the current_stock field is 600."})
});

const shortSchemaWithNumbers = z.object({
    sku: customValidators.zodIsTenCharacterId,
    
    lower_size_number: customValidators.zodIsLowerSizeNumber,
    
    total_stock: z.number("The total_stock field must be a number (integer). It is a required field.").int("The total_stock field must be an integer.").min(1, {message: "The minimum value of the total_stock field is 1"}).max(600, {message: "The maximum value of the total_stock field is 600"}),

    quantity_sold: z.number("The quantity_sold field must be a number (integer). It is a required field.").int("The quantity_sold field must be an integer. ").min(1, {message: "The minimum value of the quantity_sold field is 1."}).max(600, {message: "The maximum value of the quantity_sold field is 600."}),

    current_stock: z.number("The current_stock field must be a number (integer). It is a required field.").int("The current_stock field must be an integer. ").min(1, {message: "The minimum value of the current_stock field is 1."}).max(600, {message: "The maximum value of the current_stock field is 600."})
});

const shirtSchemaArray = z.array(shirtSchema);

const pantSchemaWithLettersArray = z.array(pantSchemaWithLetters);

const pantSchemaWithNumbersArray = z.array(pantSchemaWithNumbers);

const shortSchemaWithNumbersArray = z.array(shortSchemaWithLetters);

const shortSchemaWithLettersArray = z.array(shortSchemaWithNumbers);



const productItemSchemasUnion = z.union([shirtSchemaArray, pantSchemaWithLettersArray, pantSchemaWithNumbersArray, shortSchemaWithLettersArray, shortSchemaWithNumbersArray]);

module.exports = productItemSchemasUnion;