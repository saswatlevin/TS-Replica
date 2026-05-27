const z = require('zod');
const productItemValidators = require('../Validators/CustomValidators/productItemValidators');
const customValidators = require('../Validators/CustomValidators/customFormatValidators');
const productValidators = require('../Validators/CustomValidators/productValidators');
const cartItemValidators = require('../Validators/CustomValidators/cartItemValidators');
const objectIdSchema = require('./objectIdSchema');
const {productImageArrayRequestSchema, productImageArrayResponseSchema } = require('./productImageSchemas');
const {productItemRequestSchemaArray, productItemResponseSchemaArray} = require('./productItemSchemas');
const discountValidators = require('../Validators/CustomValidators/discountValidators');

const testProductRequestSchemas = require('./TestObjects/testProductRequestSchemas');
const testProductResponseSchemas = require('./TestObjects/testProductResponseSchemas');
const testProductCreateResponseSchemas = require('./TestObjects/testProductCreateResponseSchemas');

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

    product_items: productItemRequestSchemaArray,

    discount_code: discountValidators.zodIsDiscountCode,

    discount_percentage: discountValidators.zodIsDiscountPercentage

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

    product_items: productItemResponseSchemaArray,

    discount_code: discountValidators.zodIsDiscountCode,

    discount_percentage: discountValidators.zodIsDiscountPercentage,

    discount_amount: discountValidators.zodIsDiscountAmount,
    
    discounted_total: discountValidators.zodIsDiscountedTotal,
    
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
    
        product_items: productItemResponseSchemaArray,

        discount_code: discountValidators.zodIsDiscountCode,

        discount_percentage: discountValidators.zodIsDiscountPercentage,

        discount_amount: discountValidators.zodIsDiscountAmount,
    
        discounted_total: discountValidators.zodIsDiscountedTotal,

        __v: customValidators.zodIsDocumentVersion
}).strict();


const updateProductPriceSchema = z.object({
    product_id: productValidators.zodIsProductId,
    
    product_price: productValidators.zodIsProductPrice
}).strict();

const updateProductDiscountSchema = z.object({
    product_id: productValidators.zodIsProductId,
    
    discount_code: discountValidators.zodIsDiscountCode,

    discount_percentage: discountValidators.zodIsDiscountPercentage
}).strict();

const productIdSchema = z.object({
    product_id: productValidators.zodIsProductId
}).strict();

const searchProductItemResponseSchema = z.object({
    product_items : productItemResponseSchemaArray
}).strict();

const searchProductItemArrayResponseSchema = z.array(searchProductItemResponseSchema);

const searchProductsArrayResponseSchema = z.array(productResponseSchema);

//REQUEST SCHEMA TESTS
//const the_apres_short_navy_linen_tweed_request_result = productRequestSchema.parse(testProductRequestSchemas.the_apres_short_navy_linen_tweed_request_schema);
//console.log("REQUEST - the_apres_short_navy_linen_tweed - ", the_apres_short_navy_linen_tweed_request_result);

//const the_breakwater_pant_in_rinsed_indigo_stripe_request_result =  productRequestSchema.parse(testProductRequestSchemas.the_breakwater_pant_in_rinsed_indigo_stripe_request_schema);
//console.log("REQUEST - the_breakwater_pant_in_rinsed_indigo_stripe - ", the_breakwater_pant_in_rinsed_indigo_stripe_request_result);

//const the_camp_short_in_aged_penny_chipped_canvas_request_result = productRequestSchema.parse(testProductRequestSchemas.the_camp_short_in_aged_penny_chipped_canvas_request_schema);
//console.log("REQUEST - the_camp_short_in_aged_penny_chipped_canvas - ", the_camp_short_in_aged_penny_chipped_canvas_request_result);

//const the_craftsman_shirt_in_bark_plaid_cotton_request_result = productRequestSchema.parse(testProductRequestSchemas.the_craftsman_shirt_in_bark_plaid_cotton_request_schema);
//console.log("REQUEST - the_craftsman_shirt_in_bark_plaid_cotton - ", the_craftsman_shirt_in_bark_plaid_cotton_request_result);

//const the_painter_pant_in_seeded_natural_chipped_canvas_request_result = productRequestSchema.parse(testProductRequestSchemas.the_painter_pant_in_seeded_natural_chipped_canvas_request_schema);
//console.log("REQUEST - the_painter_pant_in_seeded_natural_chipped_canvas_request_result - ", the_painter_pant_in_seeded_natural_chipped_canvas_request_result);

//RESPONSE SCHEMA TESTS
//const the_apres_short_navy_linen_tweed_request_result = productRequestSchema.parse(testProductRequestSchemas.the_apres_short_navy_linen_tweed_request_schema);
//console.log("REQUEST - the_apres_short_navy_linen_tweed - ", the_apres_short_navy_linen_tweed_request_result);

//const the_breakwater_pant_in_rinsed_indigo_stripe_request_result =  productRequestSchema.parse(testProductRequestSchemas.the_breakwater_pant_in_rinsed_indigo_stripe_request_schema);
//console.log("REQUEST - the_breakwater_pant_in_rinsed_indigo_stripe - ", the_breakwater_pant_in_rinsed_indigo_stripe_request_result);

//const the_camp_short_in_aged_penny_chipped_canvas_request_result = productRequestSchema.parse(testProductRequestSchemas.the_camp_short_in_aged_penny_chipped_canvas_request_schema);
//console.log("REQUEST - the_camp_short_in_aged_penny_chipped_canvas - ", the_camp_short_in_aged_penny_chipped_canvas_request_result);

//const the_craftsman_shirt_in_bark_plaid_cotton_request_result = productRequestSchema.parse(testProductRequestSchemas.the_craftsman_shirt_in_bark_plaid_cotton_request_schema);
//console.log("REQUEST - the_craftsman_shirt_in_bark_plaid_cotton - ", the_craftsman_shirt_in_bark_plaid_cotton_request_result);

//const the_painter_pant_in_seeded_natural_chipped_canvas_request_result = productRequestSchema.parse(testProductRequestSchemas.the_painter_pant_in_seeded_natural_chipped_canvas_request_schema);
//console.log("REQUEST - the_painter_pant_in_seeded_natural_chipped_canvas_request_result - ", the_painter_pant_in_seeded_natural_chipped_canvas_request_result);

//RESPONSE SCHEMA TESTS
//const the_apres_short_navy_linen_tweed_request_result = productRequestSchema.parse(testProductRequestSchemas.the_apres_short_navy_linen_tweed_request_schema);
//console.log("REQUEST - the_apres_short_navy_linen_tweed - ", the_apres_short_navy_linen_tweed_request_result);

//const the_breakwater_pant_in_rinsed_indigo_stripe_request_result =  productRequestSchema.parse(testProductRequestSchemas.the_breakwater_pant_in_rinsed_indigo_stripe_request_schema);
//console.log("REQUEST - the_breakwater_pant_in_rinsed_indigo_stripe - ", the_breakwater_pant_in_rinsed_indigo_stripe_request_result);

//const the_camp_short_in_aged_penny_chipped_canvas_request_result = productRequestSchema.parse(testProductRequestSchemas.the_camp_short_in_aged_penny_chipped_canvas_request_schema);
//console.log("REQUEST - the_camp_short_in_aged_penny_chipped_canvas - ", the_camp_short_in_aged_penny_chipped_canvas_request_result);

//const the_craftsman_shirt_in_bark_plaid_cotton_request_result = productRequestSchema.parse(testProductRequestSchemas.the_craftsman_shirt_in_bark_plaid_cotton_request_schema);
//console.log("REQUEST - the_craftsman_shirt_in_bark_plaid_cotton - ", the_craftsman_shirt_in_bark_plaid_cotton_request_result);

//const the_painter_pant_in_seeded_natural_chipped_canvas_request_result = productRequestSchema.parse(testProductRequestSchemas.the_painter_pant_in_seeded_natural_chipped_canvas_request_schema);
//console.log("REQUEST - the_painter_pant_in_seeded_natural_chipped_canvas_request_result - ", the_painter_pant_in_seeded_natural_chipped_canvas_request_result);


//RESPONSE SCHEMA TESTS
//const the_apres_short_navy_linen_tweed_response_result = productResponseSchema.parse(testProductResponseSchemas.the_apres_short_navy_linen_tweed_response_schema);
//console.log("RESPONSE - the_apres_short_navy_linen_tweed - ", the_apres_short_navy_linen_tweed_response_result);

//const the_breakwater_pant_in_rinsed_indigo_stripe_response_result =  productResponseSchema.parse(testProductResponseSchemas.the_breakwater_pant_in_rinsed_indigo_stripe_response_schema);
//console.log("RESPONSE - the_breakwater_pant_in_rinsed_indigo_stripe - ", the_breakwater_pant_in_rinsed_indigo_stripe_response_result);

//const the_camp_short_in_aged_penny_chipped_canvas_response_result = productResponseSchema.parse(testProductResponseSchemas.the_camp_short_in_aged_penny_chipped_canvas_response_schema);
//console.log("RESPONSE - the_camp_short_in_aged_penny_chipped_canvas - ", the_camp_short_in_aged_penny_chipped_canvas_response_result);

//const the_craftsman_shirt_in_bark_plaid_cotton_response_result = productResponseSchema.parse(testProductResponseSchemas.the_craftsman_shirt_in_bark_plaid_cotton_response_schema);
//console.log("RESPONSE - the_craftsman_shirt_in_bark_plaid_cotton - ", the_craftsman_shirt_in_bark_plaid_cotton_response_result);

//const the_painter_pant_in_seeded_natural_chipped_canvas_response_result = productResponseSchema.parse(testProductResponseSchemas.the_painter_pant_in_seeded_natural_chipped_canvas_response_schema);
//console.log("RESPONSE - the_painter_pant_in_seeded_natural_chipped_canvas - ", the_painter_pant_in_seeded_natural_chipped_canvas_response_result);


// CREATE RESPONSE TESTS
//const the_apres_short_navy_linen_tweed_create_response_result = createProductResponseSchema.parse(testProductCreateResponseSchemas.the_apres_short_navy_linen_tweed_create_response_schema);
//console.log("CREATE RESPONSE - the_apres_short_navy_linen_tweed - ", the_apres_short_navy_linen_tweed_create_response_result);

//const the_breakwater_pant_in_rinsed_indigo_stripe_create_response_result =  createProductResponseSchema.parse(testProductCreateResponseSchemas.the_breakwater_pant_in_rinsed_indigo_stripe_create_response_schema);
//console.log("CREATE RESPONSE - the_breakwater_pant_in_rinsed_indigo_stripe - ", the_breakwater_pant_in_rinsed_indigo_stripe_create_response_result);

//const the_camp_short_in_aged_penny_chipped_canvas_create_response_result = createProductResponseSchema.parse(testProductCreateResponseSchemas.the_camp_short_in_aged_penny_chipped_canvas_create_response_schema);
//console.log("CREATE RESPONSE - the_camp_short_in_aged_penny_chipped_canvas - ", the_camp_short_in_aged_penny_chipped_canvas_create_response_result);

//const the_craftsman_shirt_in_bark_plaid_cotton_create_response_result = createProductResponseSchema.parse(testProductCreateResponseSchemas.the_craftsman_shirt_in_bark_plaid_cotton_create_response_schema);
//console.log("CREATE RESPONSE - the_craftsman_shirt_in_bark_plaid_cotton - ", the_craftsman_shirt_in_bark_plaid_cotton_create_response_result);

//const the_painter_pant_in_seeded_natural_chipped_canvas_create_response_result = createProductResponseSchema.parse(testProductCreateResponseSchemas.the_painter_pant_in_seeded_natural_chipped_canvas_create_response_schema);
//console.log("CREATE RESPONSE - the_painter_pant_in_seeded_natural_chipped_canvas - ", the_painter_pant_in_seeded_natural_chipped_canvas_create_response_result);


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
    updateProductDiscountSchema,
    productIdSchema,
    searchProductItemResponseSchema,
    searchProductItemArrayResponseSchema,
    searchProductsArrayResponseSchema
};