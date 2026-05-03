// Shirt, Pant, Jean == Chino, Short
const z = require('zod');
const productValidators = require('../Validators/CustomValidators/productValidators');
const productItemValidators = require('../Validators/CustomValidators/productItemValidators');
const objectIdSchema = require('./objectIdSchema');

/*console.log("SKU ---->>>> ", productItemValidators.zodIsSKU);
console.log("###################################");
console.log("PRODUCT ID ---->>>> ", productValidators.zodIsProductId);
console.log("###################################");
console.log("TOTAL STOCK ---->>>> ", productItemValidators.zodIsTotalStock);
console.log("###################################");
console.log("QUANTITY SOLD ---->>>> ", productItemValidators.zodIsQuantitySold);
console.log("###################################");
console.log("QUANTITY RETURNED ---->>>> ", productItemValidators.zodIsQuantityReturned);
console.log("###################################");
console.log("CURRENT STOCK ---->>>> ", productItemValidators.zodIsCurrentStock);
console.log("###################################");
console.log("INSEAM LENGTH ---->>>> ", productItemValidators.zodIsInseamLength);
console.log("###################################");
console.log("UPPER SIZE LETTER ---->>>> ", productItemValidators.zodIsUpperSizeLetter);
console.log("###################################");
console.log("LOWER SIZE LETTER ---->>>> ", productItemValidators.zodIsLowerSizeLetter);
console.log("###################################");
console.log("UPPER SIZE NUMBER ---->>>> ", productItemValidators.zodIsUpperSizeNumber);
console.log("###################################");
console.log("LOWER SIZE NUMBER ---->>>> ", productItemValidators.zodIsLowerSizeNumber);
console.log("###################################");*/


const baseSchema = z.object({
    total_stock: productItemValidators.zodIsTotalStock,

    quantity_sold: productItemValidators.zodIsQuantitySold,

    quantity_returned: productItemValidators.zodIsQuantityReturned,

    current_stock: productItemValidators.zodIsCurrentStock
});

const baseUpdateSchema = z.object({
    total_stock: productItemValidators.zodIsTotalStock.optional(),

    quantity_sold: productItemValidators.zodIsQuantitySold.optional(),

    quantity_returned: productItemValidators.zodIsQuantityReturned.optional(),

    current_stock: productItemValidators.zodIsCurrentStock.optional()
});

const shirtRequestSchema = z.object({

    upper_size_letter: productItemValidators.zodIsUpperSizeLetter,
    
    upper_size_number: productItemValidators.zodIsUpperSizeNumber,
    
}).merge(baseSchema).strict();

// Used for jeans and chinos too.
const pantRequestSchemaWithNumbers = z.object({

    lower_size_number: productItemValidators.zodIsLowerSizeNumber,

    inseam_length: productItemValidators.zodIsInseamLength
}).merge(baseSchema).strict();

const pantRequestSchemaWithLetters = z.object({
    lower_size_letter: productItemValidators.zodIsLowerSizeLetter,

    inseam_length: productItemValidators.zodIsInseamLength
}).merge(baseSchema).strict();

const shortRequestSchemaWithLetters = z.object({
    lower_size_letter: productItemValidators.zodIsLowerSizeLetter
}).merge(baseSchema).strict();

const shortRequestSchemaWithNumbers = z.object({
    lower_size_number: productItemValidators.zodIsLowerSizeNumber
}).merge(baseSchema).strict();

///////////////////////////////////////////////////////////////////////////////

const shirtCreateRequestSchema = z.object({
    product_id: productValidators.zodIsProductId,

    upper_size_letter: productItemValidators.zodIsUpperSizeLetter,
    
    upper_size_number: productItemValidators.zodIsUpperSizeNumber,
    
}).merge(baseSchema).strict();

// Used for jeans and chinos too.
const pantCreateRequestSchemaWithNumbers = z.object({  
    product_id: productValidators.zodIsProductId,

    lower_size_number: productItemValidators.zodIsLowerSizeNumber,

    inseam_length: productItemValidators.zodIsInseamLength
}).merge(baseSchema).strict();

const pantCreateRequestSchemaWithLetters = z.object({
    product_id: productValidators.zodIsProductId,

    lower_size_letter: productItemValidators.zodIsLowerSizeLetter,

    inseam_length: productItemValidators.zodIsInseamLength
}).merge(baseSchema).strict();

const shortCreateRequestSchemaWithLetters = z.object({
    product_id: productValidators.zodIsProductId,

    lower_size_letter: productItemValidators.zodIsLowerSizeLetter
}).merge(baseSchema).strict();

const shortCreateRequestSchemaWithNumbers = z.object({
    product_id: productValidators.zodIsProductId,

    lower_size_number: productItemValidators.zodIsLowerSizeNumber
}).merge(baseSchema).strict();
/////////////////////////////////////////////////////////////////////////
const shirtUpdateRequestSchema = z.object({
    product_id: productValidators.zodIsProductId,

    sku: productItemValidators.zodIsSKU,

    upper_size_letter: productItemValidators.zodIsUpperSizeLetter.optional(),
    
    upper_size_number: productItemValidators.zodIsUpperSizeNumber.optional(),
    
}).merge(baseUpdateSchema).strict();

// Used for jeans and chinos too.
const pantUpdateRequestSchemaWithNumbers = z.object({  
    product_id: productValidators.zodIsProductId,

    sku: productItemValidators.zodIsSKU,

    lower_size_number: productItemValidators.zodIsLowerSizeNumber.optional(),

    inseam_length: productItemValidators.zodIsInseamLength.optional()
}).merge(baseUpdateSchema).strict();

const pantUpdateRequestSchemaWithLetters = z.object({
    product_id: productValidators.zodIsProductId,

    sku: productItemValidators.zodIsSKU,

    lower_size_letter: productItemValidators.zodIsLowerSizeLetter.optional(),

    inseam_length: productItemValidators.zodIsInseamLength.optional()
}).merge(baseUpdateSchema).strict();

const shortUpdateRequestSchemaWithLetters = z.object({
    product_id: productValidators.zodIsProductId,

    sku: productItemValidators.zodIsSKU,

    lower_size_letter: productItemValidators.zodIsLowerSizeLetter.optional()
}).merge(baseUpdateSchema).strict();

const shortUpdateRequestSchemaWithNumbers = z.object({
    product_id: productValidators.zodIsProductId,

    sku: productItemValidators.zodIsSKU,

    lower_size_number: productItemValidators.zodIsLowerSizeNumber.optional()
}).merge(baseUpdateSchema).strict();
/////////////////////////////////////////////////////////////////////////
const productItemDeleteRequestSchema = z.object({
    product_id: productValidators.zodIsProductId,

    sku: productItemValidators.zodIsSKU
}).strict();
/////////////////////////////////////////////////////////////////////////
const productItemSearchRequestSchema = z.object({
    product_id: productValidators.zodIsProductId
}).strict();
////////////////////////////////////////////////////////////////////////
const getProductItemRequestSchema = z.object({
    product_id: productValidators.zodIsProductId,
    sku: productItemValidators.zodIsSKU
}).strict();
////////////////////////////////////////////////////////////////////////
const shirtResponseSchema = z.object({
    sku: productItemValidators.zodIsSKU,

    upper_size_letter: productItemValidators.zodIsUpperSizeLetter,
    
    upper_size_number: productItemValidators.zodIsUpperSizeNumber
}).merge(baseSchema).strict();

// Used for jeans and chinos too.
const pantResponseSchemaWithNumbers = z.object({    
    sku: productItemValidators.zodIsSKU,

    lower_size_number: productItemValidators.zodIsLowerSizeNumber,

    inseam_length: productItemValidators.zodIsInseamLength
}).merge(baseSchema).strict();

const pantResponseSchemaWithLetters = z.object({
    sku: productItemValidators.zodIsSKU,

    lower_size_letter: productItemValidators.zodIsLowerSizeLetter,

    inseam_length: productItemValidators.zodIsInseamLength
}).merge(baseSchema).strict();

const shortResponseSchemaWithLetters = z.object({
    sku: productItemValidators.zodIsSKU,

    lower_size_letter: productItemValidators.zodIsLowerSizeLetter
}).merge(baseSchema).strict();

const shortResponseSchemaWithNumbers = z.object({
    sku: productItemValidators.zodIsSKU,
    
    lower_size_number: productItemValidators.zodIsLowerSizeNumber
}).merge(baseSchema).strict();


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
/////////////////////////////////////////////////////////////////////////////////////////////////////
const productItemRequestSchemasUnion = z.union([shirtRequestSchemaArray, pantRequestSchemaWithLettersArray, pantRequestSchemaWithNumbersArray, shortRequestSchemaWithNumbersArray, shortRequestSchemaWithLettersArray]);
//////////////////////////////////////////////////////////////////////////////////////////////////////
const productItemCreateRequestSchemasUnion = z.union([shirtCreateRequestSchema, pantCreateRequestSchemaWithLetters, pantCreateRequestSchemaWithNumbers, shortCreateRequestSchemaWithNumbers, shortCreateRequestSchemaWithLetters]);
//////////////////////////////////////////////////////////////////////////////////////////////////////
const productItemUpdateRequestSchemasUnion = z.union([shirtUpdateRequestSchema, pantUpdateRequestSchemaWithLetters, pantUpdateRequestSchemaWithNumbers, shortUpdateRequestSchemaWithNumbers, shortUpdateRequestSchemaWithLetters]);
//////////////////////////////////////////////////////////////////////////////////////////////////////
const productItemResponseSchemasUnion = z.union([shirtResponseSchemaArray, pantResponseSchemaWithLettersArray, pantResponseSchemaWithNumbersArray, shortResponseSchemaWithNumbersArray, shortResponseSchemaWithLettersArray]);

module.exports = {
    productItemRequestSchemasUnion,
    productItemCreateRequestSchemasUnion,
    productItemDeleteRequestSchema,
    productItemSearchRequestSchema,
    getProductItemRequestSchema,
    productItemUpdateRequestSchemasUnion,
    productItemResponseSchemasUnion
};