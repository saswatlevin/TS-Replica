const z = require('zod');
const productItemValidators = require('../Validators/CustomValidators/productItemValidators');
const customValidators = require('../Validators/CustomValidators/customFormatValidators');
const productValidators = require('../Validators/CustomValidators/productValidators');
const cartItemValidators = require('../Validators/CustomValidators/cartItemValidators');
const objectIdSchema = require('./objectIdSchema');
const {productImageArrayRequestSchema, productImageArrayResponseSchema } = require('./productImageSchemas');
const {productItemRequestSchemasUnion, productItemResponseSchemasUnion} = require('./productItemSchemas');

const productGarmentWeightSchema = z.object({
    garment_weight_description: productValidators.zodIsGarmentWeightDescription,

    garment_weight: productValidators.zodIsGarmentWeight
   
}).strict();

const productSupplyTypeSchema = z.object({
    supply_type_description: productValidators.zodIsSupplyTypeDescription,

    supply_type: productValidators.zodIsSupplyType
}).strict();

const productGarmentWeightRequestSchema = z.object({
    product_id: productValidators.zodIsProductId,

    garment_weight_description: productValidators.zodIsGarmentWeightDescription,

    garment_weight: productValidators.zodIsGarmentWeight
}).strict();

const productSupplyTypeRequestSchema = z.object({
    product_id: productValidators.zodIsProductId,
    
    supply_type_description: productValidators.zodIsSupplyTypeDescription,

    supply_type: productValidators.zodIsSupplyType
}).strict();


const productRequestSchema = z.object({
    product_name: productValidators.zodIsProductName,
    
    product_color: productValidators.zodIsProductColor,

    product_description: productValidators.zodIsProductDescription,

    product_price: productValidators.zodIsProductPrice,

    product_category: productValidators.zodIsProductCategory,
    

    product_subcategory: productValidators.zodIsProductSubcategory,
    

    product_subcategory_type: productValidators.zodIsSubcategoryType,
   

    // Remove \" from regex in the future.
    product_fit: productValidators.zodIsProductFit,

    product_garment_weight: productGarmentWeightSchema,

    product_material: productValidators.zodIsProductMaterial,

    product_supply_type: productSupplyTypeSchema,

    product_specifications: productValidators.zodIsProductSpecifications,
    
    product_images: productImageArrayRequestSchema,

    product_items: productItemRequestSchemasUnion,

    discount_code: z.enum(["None", "10PERCENT", "20PERCENT", "30PERCENT", "40PERCENT", "50PERCENT"], {message: "The discount_code field accepts one of the following values: None, 10PERCENT, 20PERCENT, 30PERCENT, 40PERCENT, 50PERCENT. It is a required field."}),

    discount_percentage: z.number("The discount_percentage field must be a number (integer).").int("The discount_percentage field must be an integer value.").min(0, {message: "The discount_percentage field only takes positive integer values. Its minimum limit is 1."}).max(100, {message: "The maximum limit of the discount_percentage field is 100."}),

    discount_amount: z.number("The discount_amount field must be a number (integer).").int("The discount_amount field must be an integer value.").min(0, {message: "The discount_amount field only takes positive integer values. Its minimum limit is 1."}).max(10000, {message: "The maximum limit of the discount_amount field is 10000."}),
    
    discounted_total: z.number("The discounted_total field must be a number (integer).").int("The discounted_total field must be an integer value.").min(0, {message: "The discounted_total field only takes positive integer values. Its minimum limit is 1."}).max(10000, {message: "The maximum limit of the discounted_total field is 10000."})

}).strict();

const updateProductSchema = z.object({
    product_id: productValidators.zodIsProductId,

    product_color: productValidators.zodIsProductColor.optional(),

    product_description: productValidators.zodIsProductDescription.optional(),
    
    product_category: productValidators.zodIsProductCategory.optional(),

    product_subcategory: productValidators.zodIsProductSubcategory.optional(),

    product_subcategory_type: productValidators.zodIsSubcategoryType.optional(),
   
    product_fit: productValidators.zodIsProductFit.optional(),

    product_material: productValidators.zodIsProductMaterial.optional(),

    product_specifications: productValidators.zodIsProductSpecifications.optional(),

    discount_code: z.enum(["None", "10PERCENT", "20PERCENT", "30PERCENT", "40PERCENT", "50PERCENT"], {message: "The discount_code field accepts one of the following values: None, 10PERCENT, 20PERCENT, 30PERCENT, 40PERCENT, 50PERCENT. It is a required field."}).optional(),

    discount_percentage: z.number("The discount_percentage field must be a number (integer).").int("The discount_percentage field must be an integer value.").min(0, {message: "The discount_percentage field only takes positive integer values. Its minimum limit is 0."}).max(100, {message: "The maximum limit of the discount_percentage field is 100."}).optional(),

    discount_amount: z.number("The discount_amount field must be a number (integer).").int("The discount_amount field must be an integer value.").min(0, {message: "The discount_amount field only takes positive integer values. Its minimum limit is 0."}).max(10000, {message: "The maximum limit of the discount_amount field is 10000."}).optional(),
    
    discounted_total: z.number("The discounted_total field must be a number (integer).").int("The discounted_total field must be an integer value.").min(0, {message: "The discounted_total field only takes positive integer values. Its minimum limit is 0."}).max(10000, {message: "The maximum limit of the discounted_total field is 10000."}).optional()

}).strict();

const updateProductNameSchema = z.object({
    cart_item_id: cartItemValidators.zodIscartItemId,
    
    product_id: productValidators.zodIsProductId,

    sku: productItemValidators.zodIsSKU,

    product_name: productValidators.zodIsProductName
}).strict();

const searchProductSchema = z.object({
    product_name: productValidators.zodIsProductName.optional(),
    
    product_color: productValidators.zodIsProductColor.optional(),

    product_subcategory: productValidators.zodIsProductSubcategory.optional()

}).strict();


const createProductResponseSchema = z.object({
    product_id: productValidators.zodIsProductId,
    
    docType: productValidators.zodIsProductDocType,

    product_name: productValidators.zodIsProductName,
    
    product_color: productValidators.zodIsProductColor,

    product_description: productValidators.zodIsProductDescription,

    product_price: productValidators.zodIsProductPrice,

    product_category: productValidators.zodIsProductCategory,
    
    product_subcategory: productValidators.zodIsProductSubcategory,
    
    product_subcategory_type: productValidators.zodIsSubcategoryType,
    
    // Remove \" from regex in the future.
    product_fit: productValidators.zodIsProductFit,

    product_garment_weight: productGarmentWeightSchema,

    product_material: productValidators.zodIsProductMaterial,

    product_supply_type: productSupplyTypeSchema,

    product_specifications: productValidators.zodIsProductSpecifications,
    
    product_images: productImageArrayResponseSchema,

    product_items: productItemResponseSchemasUnion,

    discount_code: z.enum(["None", "10PERCENT", "20PERCENT", "30PERCENT", "40PERCENT", "50PERCENT"], {message: "The discount_code field accepts one of the following values: None, 10PERCENT, 20PERCENT, 30PERCENT, 40PERCENT, 50PERCENT. It is a required field."}),

    discount_percentage: z.number("The discount_percentage field must be a number (integer).").int("The discount_percentage field must be an integer value.").min(0, {message: "The discount_percentage field only takes positive integer values. Its minimum limit is 0."}).max(100, {message: "The maximum limit of the discount_percentage field is 100."}),

    discount_amount: z.number("The discount_amount field must be a number (integer).").int("The discount_amount field must be an integer value.").min(0, {message: "The discount_amount field only takes positive integer values. Its minimum limit is 0."}).max(10000, {message: "The maximum limit of the discount_amount field is 10000."}),
    
    discounted_total: z.number("The discounted_total field must be a number (integer).").int("The discounted_total field must be an integer value.").min(0, {message: "The discounted_total field only takes positive integer values. Its minimum limit is 0."}).max(10000, {message: "The maximum limit of the discounted_total field is 10000."}),
    
    _id: objectIdSchema,

    __v: customValidators.zodIsDocumentVersion
}).strict();

const productResponseSchema = z.object({
        _id: objectIdSchema,
    
        product_id: productValidators.zodIsProductId,
        
        docType: productValidators.zodIsProductDocType,
    
        product_name: productValidators.zodIsProductName,
        
        product_color: productValidators.zodIsProductColor,
    
        product_description: productValidators.zodIsProductDescription,
    
        product_price: productValidators.zodIsProductPrice,
    
        product_category: productValidators.zodIsProductCategory,
        
        product_subcategory: productValidators.zodIsProductSubcategory,
        
        product_subcategory_type: productValidators.zodIsSubcategoryType,
        
        // Remove \" from regex in the future.
        product_fit: productValidators.zodIsProductFit,
    
        product_garment_weight: productGarmentWeightSchema,
    
        product_material: productValidators.zodIsProductMaterial,
    
        product_supply_type: productSupplyTypeSchema,
    
        product_specifications: productValidators.zodIsProductSpecifications,
        
        product_images: productImageArrayResponseSchema,
    
        product_items: productItemResponseSchemasUnion,

        discount_code: z.enum(["None", "10PERCENT", "20PERCENT", "30PERCENT", "40PERCENT", "50PERCENT"], {message: "The discount_code field accepts one of the following values: None, 10PERCENT, 20PERCENT, 30PERCENT, 40PERCENT, 50PERCENT. It is a required field."}),

        discount_percentage: z.number("The discount_percentage field must be a number (integer).").int("The discount_percentage field must be an integer value.").min(0, {message: "The discount_percentage field only takes positive integer values. Its minimum limit is 0."}).max(100, {message: "The maximum limit of the discount_percentage field is 100."}),

        discount_amount: z.number("The discount_amount field must be a number (integer).").int("The discount_amount field must be an integer value.").min(0, {message: "The discount_amount field only takes positive integer values. Its minimum limit is 0."}).max(10000, {message: "The maximum limit of the discount_amount field is 10000."}),
    
        discounted_total: z.number("The discounted_total field must be a number (integer).").int("The discounted_total field must be an integer value.").min(0, {message: "The discounted_total field only takes positive integer values. Its minimum limit is 0."}).max(10000, {message: "The maximum limit of the discounted_total field is 10000."}),

        __v: customValidators.zodIsDocumentVersion
}).strict();


const updateProductPriceSchema = z.object({
    cart_item_id: cartItemValidators.zodIscartItemId,

    product_id: productValidators.zodIsProductId,
    
    sku: productItemValidators.zodIsSKU,
    
    product_price: productValidators.zodIsProductPrice
}).strict();

const productIdSchema = z.object({
    product_id: productValidators.zodIsProductId
}).strict();

const searchProductItemResponseSchema = z.object({
    product_items : productItemResponseSchemasUnion
}).strict();

const searchProductItemArrayResponseSchema = z.array(searchProductItemResponseSchema);

const searchProductsArrayResponseSchema = z.array(productResponseSchema);

module.exports = {
    productGarmentWeightSchema,
    productSupplyTypeSchema,
    productGarmentWeightRequestSchema,
    productSupplyTypeRequestSchema,
    productRequestSchema,
    updateProductSchema,
    updateProductNameSchema,
    searchProductSchema,
    createProductResponseSchema,
    productResponseSchema,
    updateProductPriceSchema,
    productIdSchema,
    searchProductItemResponseSchema,
    searchProductItemArrayResponseSchema,
    searchProductsArrayResponseSchema
};