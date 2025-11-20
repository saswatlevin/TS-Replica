const z = require('zod');
const customValidators = require('../Validators/CustomValidators/customFormatValidators');
const productValidators = require('../Validators/productValidators');
const objectIdSchema = require('./objectIdSchema');
const {productImageArrayRequestSchema, productImageArraySchema, productImageArrayResponseSchema } = require('./productImageSchemas');
const {productItemSchemasUnion, productItemRequestSchemasUnion, productItemResponseSchemasUnion} = require('./productItemSchemas');
// const { shirtJackOxford, pantBreakwaterRinsed, pantPainterCanvas, shortApresNavy, shortCampAgedPenny } = require('./TestObjects/testProductObjects');

const productGarmentWeightSchema = z.object({
    garment_weight_description: productValidators.zodIsGarmentWeightDescription,

    garment_weight: productValidators.zodIsGarmentWeight
   
}).strict();

const productGarmentWeightResponseSchema = z.object({
    garment_weight_description: productValidators.zodIsGarmentWeightDescription,

    garment_weight: productValidators.zodIsGarmentWeight,

    _id: objectIdSchema
   
}).strict();

const productSupplyTypeSchema = z.object({
    supply_type_description: productValidators.zodIsSupplyTypeDescription,
    

    supply_type: productValidators.zodIsSupplyType
    
}).strict();

const productSupplyTypeResponseSchema = z.object({
    supply_type_description: productValidators.zodIsSupplyTypeDescription,

    supply_type: productValidators.zodIsSupplyType,

    _id: objectIdSchema
    
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

    product_items: productItemRequestSchemasUnion
}).strict();

const updateProductSchema = z.object({
    product_name: productValidators.zodIsProductName.optional(),
    
    product_color: productValidators.zodIsProductColor.optional(),

    product_description: productValidators.zodIsProductDescription.optional(),
    
    product_category: productValidators.zodIsProductCategory.optional(),

    product_subcategory: productValidators.zodIsProductSubcategory.optional(),

    product_subcategory_type: productValidators.zodIsSubcategoryType.optional(),
   
    product_fit: productValidators.zodIsProductFit.optional(),

    product_material: productValidators.zodIsProductMaterial.optional(),

    product_specifications: productValidators.zodIsProductSpecifications.optional()
}).strict();

const searchProductSchema = z.object({
    product_name: productValidators.zodIsProductName.optional(),
    
    product_color: productValidators.zodIsProductColor.optional(),

    product_subcategory: productValidators.zodIsProductSubcategory.optional()

}).strict();


const productResponseSchema = z.object({
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

    product_garment_weight: productGarmentWeightResponseSchema,

    product_material: productValidators.zodIsProductMaterial,

    product_supply_type: productSupplyTypeResponseSchema,

    product_specifications: productValidators.zodIsProductSpecifications,
    
    product_images: productImageArrayResponseSchema,

    product_items: productItemResponseSchemasUnion,
    
    _id: objectIdSchema,

    __v: customValidators.zodIsDocumentVersion
}).strict();

const updateProductPriceSchema = z.object({
    product_price: productValidators.zodIsProductPrice
}).strict();

const productIdSchema = z.object({
    product_id: productValidators.zodIsProductId
}).strict();



module.exports = {
    productGarmentWeightSchema,
    productRequestSchema,
    updateProductSchema,
    searchProductSchema,
    productResponseSchema,
    updateProductPriceSchema,
    productIdSchema
};