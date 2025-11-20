const mongoose = require('mongoose');
const Product = require('../../Models/Product');

const checkProduct = async(req) => {
    console.log("In checkProduct");

    const product_id = req.params.product_id;
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
};

const checkDuplicateProduct = async(request_body) => {
    console.log("In checkDuplicateProduct");
    
    const product_name = request_body.product_name;
    const product_description = request_body.product_description;
    
    const product_search_object = {
        product_name: product_name, 
        product_description: product_description
    };
    
    const result = await Product.findOne(product_search_object);
    
    if (result === null) {
       return false;
    }
    
    return true;
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
        return error;
    }
}

const checkProductValueExists = async(req) => {
    console.log("In checkProductValueExists");
    
    try {

        const product_id = req.params.product_id;
        
        const product_search_object = {
            product_id: product_id, 
            ...req.body
        };
        //console.log("##DEBUG product_search_object in checkProductValueExists ", product_search_object);

        const result = await Product.findOne(product_search_object);
        //console.log("##DEBUG result in checkProductValueExists ", result);

        if (result === null) {
            //console.log("##DEBUG Returning false in checkProductValueExists ");
            return false;
        }

        //console.log("##DEBUG Returning true in checkProductValueExists ");
        return true;
    }

    catch(error) {
        console.log("Error in checkProductValueExists ", error);
        return error;
    }
}

const checkProductGarmentWeightValueExists = async(req) => {
    console.log("In checkProductGarmentWeightValueExists");
    
    try {
        const request_body = req.body;
        //console.log("##DEBUG request_body in checkProductGarmentWeightValueExists ", request_body);
        const product_id = req.params.product_id;
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
        return error;
    }
}


module.exports = {
    checkProduct,
    checkDuplicateProduct,
    insertAt,
    checkProductValueExists,
    checkProductGarmentWeightValueExists
}