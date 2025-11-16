const z = require('zod');
const customValidators = require('../Validators/CustomValidators/customFormatValidators');
const productValidators = require('../Validators/productValidators');
const objectIdSchema = require('./objectIdSchema');
const productImageArraySchema  = require('./productImageSchemas');
const productItemSchemaUnion = require('./productItemSchemas');
// const { shirtJackOxford, pantBreakwaterRinsed, pantPainterCanvas, shortApresNavy, shortCampAgedPenny } = require('./TestObjects/testProductObjects');

const productGarmentWeightSchema = z.object({
    garment_weight_description: productValidators.zodIsGarmentWeightDescription,

    garment_weight: productValidators.zodIsGarmentWeight,
   
}).strict();

const productSupplyTypeSchema = z.object({
    supply_type_description: productValidators.zodIsSupplyTypeDescription,
    

    supply_type: productValidators.zodIsSupplyType,
    
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
    
    product_images: productImageArraySchema,

    product_items: productItemSchemaUnion
}).strict();

const updateProductSchema = z.object({
    product_name: productValidators.zodIsProductName,
    
    product_color: productValidators.zodIsProductColor,

    product_description: productValidators.zodIsProductDescription,
    
    product_category: productValidators.zodIsProductCategory,

    product_subcategory: productValidators.zodIsProductSubcategory,

    product_subcategory_type: productValidators.zodIsSubcategoryType,
   
    // Remove \" from regex in the future.
    product_fit: productValidators.zodIsProductFit,

    product_garment_weight: productGarmentWeightSchema,

    product_material: productValidators.zodIsProductMaterial,

    product_supply_type: productSupplyTypeSchema,

    product_specifications: productValidators.zodIsProductSpecifications
}).strict();

const searchProductSchema = z.object({
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

    product_specifications: productValidators.zodIsProductSpecifications
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
    
    product_images: productImageArraySchema,

    product_items: productItemSchemaUnion,
    
    __v: customValidators.zodIsDocumentVersion
}).strict();

const updateProductPriceSchema = z.object({
    product_price: productValidators.zodIsProductPrice
}).strict();

module.exports = {
    productRequestSchema,
    updateProductSchema,
    searchProductSchema,
    productResponseSchema,
    updateProductPriceSchema
};