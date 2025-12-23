const z = require('zod');
const customValidators = require('../Validators/CustomValidators/customFormatValidators');
const productValidators = require('../Validators/CustomValidators/productValidators');
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

    product_items: productItemRequestSchemasUnion
}).strict();

const updateProductSchema = z.object({
    product_id: productValidators.zodIsProductId.optional(),

    product_color: productValidators.zodIsProductColor.optional(),

    product_description: productValidators.zodIsProductDescription.optional(),
    
    product_category: productValidators.zodIsProductCategory.optional(),

    product_subcategory: productValidators.zodIsProductSubcategory.optional(),

    product_subcategory_type: productValidators.zodIsSubcategoryType.optional(),
   
    product_fit: productValidators.zodIsProductFit.optional(),

    product_material: productValidators.zodIsProductMaterial.optional(),

    product_specifications: productValidators.zodIsProductSpecifications.optional()
}).strict();

const updateProductNameSchema = z.object({
    product_id: productValidators.zodIsProductId,
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

        __v: customValidators.zodIsDocumentVersion
}).strict();


const updateProductPriceSchema = z.object({
    product_id: productValidators.zodIsProductId,
    product_price: productValidators.zodIsProductPrice
}).strict();

const productIdSchema = z.object({
    product_id: productValidators.zodIsProductId
}).strict();

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
    searchProductsArrayResponseSchema
};