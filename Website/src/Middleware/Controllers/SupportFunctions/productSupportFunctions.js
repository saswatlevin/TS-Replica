const mongoose = require('mongoose');
const Product = require('../../Models/Product');

const checkProduct = async(req) => {
    
    // USES REQ.BODY -> PRODUCT ID
    console.log("In checkProduct");

    try{
        const product_id = req.body.product_id;
        //console.log("##DEBUG - product_id in checkProduct ", product_id);

        const product_search_object = {product_id: product_id};
        //console.log("##DEBUG - product_search_object in checkProduct ", product_search_object);
    
        const result = await Product.findOne(product_search_object);
        //console.log("##DEBUG - result in checkProduct ", result);
    
        if (result === null || result.length === 0) {
            //console.log("##DEBUG - Returning false in checkProduct");
            return false;
        }

        //console.log("##DEBUG - Returning true in checkProduct");
        return true;
    }

    catch(error) {
        console.log("Error in checkProduct ", error);
        throw error;
    }
};

const checkProductNameExists = async(req) => {
    console.log("In checkProductNameExists");

    try {

        const product_id = req.body.product_id;
        const product_name = req.body.product_name;
        
        const product_search_object = {
            product_id: product_id,
            product_name: product_name
        };

        const result = await Product.findOne(product_search_object);

        if (result === null) {
            return false;
        }
    
        return true;
    }

    catch(error) {
        console.log("Error in checkProductNameExists ", error);
        throw error;
    }
};

const checkProductPriceExists = async(req) => {
    console.log("In checkProductPriceExists");

    try {

        const product_id = req.body.product_id;

        var product_search_object = {};

        if (req?.product_price !== undefined && (req?.discount_code === undefined && req?.discount_percentage === undefined)) {
            product_search_object = {product_price: req.product_price};
        } 

        if (req?.product_price === undefined && (req?.discount_code !== undefined && req?.discount_percentage !== undefined)) {
            product_search_object = {discount_code: req.discount_code, discount_percentage: req.discount_percentage};
        }

        if (req?.product_price !== undefined && (req?.discount_code !== undefined && req?.discount_percentage !== undefined)) {
            product_search_object = {product_price: req.product_price, discount_code: req.discount_code, discount_percentage: req.discount_percentage};
        }
        
        console.log("##DEBUG in checkProductPriceExists - product_search_object ", product_search_object);

        const result = await Product.findOne(product_search_object);
        //console.log("##DEBUG in checkProductPriceExists - result - ", result);

        if (result === null) {
            console.log("##DEBUG in checkProductPriceExists - Returning false ");
            return false;
        }
        
        console.log("##DEBUG in checkProductPriceExists - Returning true ");
        return true;
    }

    catch(error) {
        console.log("Error in checkProductPriceExists ", error);
        throw error;
    }
};

const checkDuplicateProduct = async(req) => {
    console.log("In checkDuplicateProduct");
    
    try {
        const product_name = req.body.product_name;
        const product_description = req.body.product_description;
    
        const product_search_object = {
            product_name: product_name, 
            product_description: product_description
        };
        
        //console.log("product_search_object in checkDuplicateProduct() ", product_search_object);
        const result = await Product.findOne(product_search_object);
        //console.log("result in checkDuplicateProduct() ", result);
    
        if (result === null) {
            return false;
        }
    
        return true;
    }

    catch(error) {
        console.log("Error in checkDuplicateProduct ", error);
        throw error;
    }

};

const insertAt = (obj, key, value, position) => {
    console.log("In insertAt");

    try {
        const entries = Object.entries(obj);
        entries.splice(position, 0, [key, value]);
        return Object.fromEntries(entries);
    }

    catch(error) {
        console.log("Error in insertAt ", error);
        throw error;
    }
}

const checkProductValueExists = async(req) => {
    // USES REQ.BODY -> PRODUCT ID
    console.log("In checkProductValueExists");
    
    try {
        
        const product_search_object = req.body;

        console.log("##DEBUG product_search_object in checkProductValueExists ", product_search_object);

        const result = await Product.findOne(product_search_object);
        //console.log("##DEBUG result in checkProductValueExists ", result);

        if (result === null) {
            console.log("##DEBUG Returning false in checkProductValueExists ");
            return false;
        }

        console.log("##DEBUG Returning true in checkProductValueExists ");
        return true;
    }

    catch(error) {
        console.log("Error in checkProductValueExists ", error);
        throw error;
    }
}

const checkProductGarmentWeightValueExists = async(req) => {
    console.log("In checkProductGarmentWeightValueExists");
    
    try {
        // USES REQ.BODY -> PRODUCT ID
        const request_body = req.body;
        //console.log("##DEBUG request_body in checkProductGarmentWeightValueExists ", request_body);
        const product_id = req.body.product_id;
        //console.log("##DEBUG product_id in checkProductGarmentWeightValueExists ", product_id);

        const search_object = request_body;
        //console.log("##DEBUG product_garment_weight_search_object in checkProductGarmentWeightValueExists ", search_object);
        
        const result = await Product.findOne(
            {
                product_id: product_id,
                "product_garment_weight.garment_weight_description": search_object.garment_weight_description,
                "product_garment_weight.garment_weight": search_object.garment_weight,
                
            }
        );

        //console.log("##DEBUG result in checkProductGarmentWeightValueExists ", result);

        
        if (result === null) {
            return false;
        }

        else {    
            return true;
        }
    }

    catch(error) {
        console.log("Error in checkProductGarmentWeightValueExists ", error);
        throw error;
    }
}

const checkProductSupplyTypeValueExists = async(req) => {
    console.log("In checkProductSupplyTypeValueExists");
    
    try {
        // USES REQ.PARAMS -> PRODUCT ID
        const request_body = req.body;
        //console.log("##DEBUG request_body in checkProductSupplyTypeValueExists ", request_body);
        const product_id = req.body.product_id;
        //console.log("##DEBUG product_id in checkProductSupplyTypeValueExists ", product_id);

        const search_object = request_body;
        //console.log("##DEBUG product_supply_type_search_object in checkProductSupplyTypeValueExists ", search_object);
        
        const result = await Product.findOne(
            {
                product_id: product_id,
                "product_supply_type.supply_type_description": search_object.supply_type_description,
                "product_supply_type.supply_type": search_object.supply_type,
                
            }
        );

        //console.log("##DEBUG result in checkProductSupplyTypeValueExists ", result);

        
        if (result === null) {
            return false;
        }

        else {    
            //console.log("##DEBUG Returning true in checkProductSupplyTypeValueExists ");
            return true;
        }
    }

    catch(error) {
        console.log("Error in checkProductSupplyTypeValueExists ", error);
        throw error;
    }
}

const getProductPrice = async(req) => {
    console.log("In getProductPrice (HELPER FUNCTION)");
    
    try {
        const product_id = req.body.product_id;
        // console.log("product_id ", product_id);

        const query = {product_id: product_id};
        // console.log("query ", query);

        const result = await Product.findOne(query).lean();

        const product_price = result.product_price;

        return product_price;
    }   

    catch (error) {
        console.log("Error in getProductPrice ", error);
        throw error;
    }
}

const getProductDiscountPercentage = async(req) => {
    console.log("In getProductDiscountCodeAndPercentage (HELPER FUNCTION)");
    
    try {
        const product_id = req.body.product_id;
        const query = {product_id: product_id};

        const result = await Product.findOne(query).lean();

        const discount_percentage = result.discount_percentage;        

        return discount_percentage;       
    }

    catch (error) {
        console.log("Error in getProductDiscountCodeAndPercentage ", error);
        throw error;
    }
}


const checkProductDiscountCodeAndPercentageExists = async(req) => {
    console.log("In checkProductDiscountCodeAndPercentage (HELPER FUNCTION)");
    
    try {

        const product_id = req.body.product_id;

        const discount_code = req.body.discount_code;

        const discount_percentage = req.body.discount_percentage;

        const query = {product_id: product_id,  discount_percentage: discount_percentage, discount_code: discount_code};

        const result = await Product.findOne(query).lean();

        if (result === null) {
            return false;
        } 

        else {
            return true;
        }       
    }

    catch (error) {
        console.log("Error in checkProductDiscountCodeAndPercentage ", error);
        throw error;
    }
}

module.exports = {
    checkProduct,
    checkDuplicateProduct,
    checkProductNameExists,
    checkProductPriceExists,
    insertAt,
    checkProductValueExists,
    checkProductGarmentWeightValueExists,
    checkProductSupplyTypeValueExists,
    getProductDiscountPercentage,
    checkProductDiscountPercentageExists
};