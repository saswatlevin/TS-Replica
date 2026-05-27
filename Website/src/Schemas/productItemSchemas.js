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

const shirtRequestSchema = z.object({
    item_type: productItemValidators.zodIsShirtLiteral,

    upper_size_letter: productItemValidators.zodIsUpperSizeLetter,
    
    upper_size_number: productItemValidators.zodIsUpperSizeNumber
    
}).merge(baseSchema).strict();

// Used for jeans and chinos too.
const pantRequestSchemaWithNumbers = z.object({
    item_type: productItemValidators.zodIsPantWithNumberLiteral,

    lower_size_number: productItemValidators.zodIsLowerSizeNumber,

    inseam_length: productItemValidators.zodIsInseamLength
}).merge(baseSchema).strict();

const pantRequestSchemaWithLetters = z.object({
    item_type: productItemValidators.zodIsPantWithLetterLiteral,

    lower_size_letter: productItemValidators.zodIsLowerSizeLetter,

    inseam_length: productItemValidators.zodIsInseamLength
}).merge(baseSchema).strict();

const shortRequestSchemaWithLetters = z.object({
    item_type: productItemValidators.zodIsShortWithOnlyLetterLiteral,

    lower_size_letter: productItemValidators.zodIsLowerSizeLetter
}).merge(baseSchema).strict();

const shortRequestSchemaWithNumbers = z.object({
    item_type: productItemValidators.zodIsShortWithOnlyNumberLiteral,

    lower_size_number: productItemValidators.zodIsLowerSizeNumber
}).merge(baseSchema).strict();

///////////////////////////////////////////////////////////////////////////////

const shirtCreateRequestSchema = z.object({
    item_type: productItemValidators.zodIsShirtLiteral,

    product_id: productValidators.zodIsProductId,

    upper_size_letter: productItemValidators.zodIsUpperSizeLetter,
    
    upper_size_number: productItemValidators.zodIsUpperSizeNumber,
    
}).merge(baseSchema).strict();

// Used for jeans and chinos too.
const pantCreateRequestSchemaWithNumbers = z.object({
    item_type: productItemValidators.zodIsPantWithNumberLiteral,

    product_id: productValidators.zodIsProductId,

    lower_size_number: productItemValidators.zodIsLowerSizeNumber,

    inseam_length: productItemValidators.zodIsInseamLength
}).merge(baseSchema).strict();

const pantCreateRequestSchemaWithLetters = z.object({
    item_type: productItemValidators.zodIsPantWithLetterLiteral,

    product_id: productValidators.zodIsProductId,

    lower_size_letter: productItemValidators.zodIsLowerSizeLetter,

    inseam_length: productItemValidators.zodIsInseamLength
}).merge(baseSchema).strict();

const shortCreateRequestSchemaWithLetters = z.object({
    item_type: productItemValidators.zodIsShortWithOnlyLetterLiteral,

    product_id: productValidators.zodIsProductId,

    lower_size_letter: productItemValidators.zodIsLowerSizeLetter
}).merge(baseSchema).strict();

const shortCreateRequestSchemaWithNumbers = z.object({
    item_type: productItemValidators.zodIsShortWithOnlyNumberLiteral,

    product_id: productValidators.zodIsProductId,

    lower_size_number: productItemValidators.zodIsLowerSizeNumber
}).merge(baseSchema).strict();
/////////////////////////////////////////////////////////////////////////
const shirtUpdateRequestSchema = z.object({
    item_type: productItemValidators.zodIsShirtLiteral,

    product_id: productValidators.zodIsProductId,

    sku: productItemValidators.zodIsSKU,

    upper_size_letter: productItemValidators.zodIsUpperSizeLetter.optional(),
    
    upper_size_number: productItemValidators.zodIsUpperSizeNumber.optional()
    
}).strict();

// Used for jeans and chinos too.
const pantUpdateRequestSchemaWithNumbers = z.object({  
    item_type: productItemValidators.zodIsPantWithNumberLiteral,

    product_id: productValidators.zodIsProductId,

    sku: productItemValidators.zodIsSKU,

    lower_size_number: productItemValidators.zodIsLowerSizeNumber.optional(),

    inseam_length: productItemValidators.zodIsInseamLength.optional()
}).strict();

const pantUpdateRequestSchemaWithLetters = z.object({
    item_type: productItemValidators.zodIsPantWithLetterLiteral,

    product_id: productValidators.zodIsProductId,

    sku: productItemValidators.zodIsSKU,

    lower_size_letter: productItemValidators.zodIsLowerSizeLetter.optional(),

    inseam_length: productItemValidators.zodIsInseamLength.optional()
}).strict();

const shortUpdateRequestSchemaWithLetters = z.object({
    item_type: productItemValidators.zodIsShortWithOnlyLetterLiteral,

    product_id: productValidators.zodIsProductId,

    sku: productItemValidators.zodIsSKU,

    lower_size_letter: productItemValidators.zodIsLowerSizeLetter.optional()
}).strict();

const shortUpdateRequestSchemaWithNumbers = z.object({
    item_type: productItemValidators.zodIsShortWithOnlyNumberLiteral,

    product_id: productValidators.zodIsProductId,

    sku: productItemValidators.zodIsSKU,

    lower_size_number: productItemValidators.zodIsLowerSizeNumber.optional()
}).strict();

////////////////////////////////////////////////////////////////////////
const shirtResponseSchema = z.object({
    item_type: productItemValidators.zodIsShirtLiteral,

    sku: productItemValidators.zodIsSKU,

    upper_size_letter: productItemValidators.zodIsUpperSizeLetter,
    
    upper_size_number: productItemValidators.zodIsUpperSizeNumber
}).merge(baseSchema).strict();

// Used for jeans and chinos too.
const pantResponseSchemaWithNumbers = z.object({   
    item_type: productItemValidators.zodIsPantWithNumberLiteral,

    sku: productItemValidators.zodIsSKU,

    lower_size_number: productItemValidators.zodIsLowerSizeNumber,

    inseam_length: productItemValidators.zodIsInseamLength
}).merge(baseSchema).strict();

const pantResponseSchemaWithLetters = z.object({
    item_type: productItemValidators.zodIsPantWithLetterLiteral,

    sku: productItemValidators.zodIsSKU,

    lower_size_letter: productItemValidators.zodIsLowerSizeLetter,

    inseam_length: productItemValidators.zodIsInseamLength
}).merge(baseSchema).strict();

const shortResponseSchemaWithLetters = z.object({
    item_type: productItemValidators.zodIsShortWithOnlyLetterLiteral,

    sku: productItemValidators.zodIsSKU,

    lower_size_letter: productItemValidators.zodIsLowerSizeLetter
}).merge(baseSchema).strict();

const shortResponseSchemaWithNumbers = z.object({
    item_type: productItemValidators.zodIsShortWithOnlyNumberLiteral,

    sku: productItemValidators.zodIsSKU,
    
    lower_size_number: productItemValidators.zodIsLowerSizeNumber
}).merge(baseSchema).strict();

///////////////////////////////////////////////////////////////////////////////
//<<<DISCRIMINATED UNIONS>>>
const productItemRequestSchemasDiscriminatedUnion = z.discriminatedUnion("item_type", [

    shirtRequestSchema,

    pantRequestSchemaWithLetters,

    pantRequestSchemaWithNumbers,

    shortRequestSchemaWithNumbers,

    shortRequestSchemaWithLetters
]);

const productItemCreateRequestSchemasDiscriminatedUnion = z.discriminatedUnion("item_type", [

    shirtCreateRequestSchema,

    pantCreateRequestSchemaWithLetters,

    pantCreateRequestSchemaWithNumbers,

    shortCreateRequestSchemaWithNumbers,

    shortCreateRequestSchemaWithLetters
]);

const productItemUpdateRequestSchemasDiscriminatedUnion = z.discriminatedUnion("item_type", [

    shirtUpdateRequestSchema,

    pantUpdateRequestSchemaWithLetters,

    pantUpdateRequestSchemaWithNumbers,

    shortUpdateRequestSchemaWithNumbers,

    shortUpdateRequestSchemaWithLetters
]);


const productItemResponseSchemasDiscriminatedUnion = z.discriminatedUnion("item_type", [

    shirtResponseSchema,

    pantResponseSchemaWithLetters,

    pantResponseSchemaWithNumbers,

    shortResponseSchemaWithNumbers,

    shortResponseSchemaWithLetters
]);
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//<<<ARRAYS OF DISCRIMINATED UNIONS>>>
const productItemRequestSchemaArray = z.array(productItemRequestSchemasDiscriminatedUnion);

const productItemResponseSchemaArray = z.array(productItemResponseSchemasDiscriminatedUnion);
//////////////////////////////////////////////////////////////////////////////
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

module.exports = {
    productItemRequestSchemaArray,
    productItemResponseSchemaArray,
    productItemCreateRequestSchemasDiscriminatedUnion,
    productItemUpdateRequestSchemasDiscriminatedUnion,
    productItemDeleteRequestSchema,
    productItemSearchRequestSchema,
    getProductItemRequestSchema  
};