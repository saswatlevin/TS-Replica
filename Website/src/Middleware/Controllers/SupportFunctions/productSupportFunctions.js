const mongoose = require('mongoose');
const Product = require('../../Models/Product');

const checkProduct = async(req) => {
    
    // USES REQ.PARAMS
    console.log("In checkProduct");

    try{
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
    }

    catch(error) {
        console.log("Error in checkProduct ", error);
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
    // USES REQ.PARAMS
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
        throw error;
    }
}

const checkProductGarmentWeightValueExists = async(req) => {
    console.log("In checkProductGarmentWeightValueExists");
    
    try {
        // USES REQ.PARAMS
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
        throw error;
    }
}

const checkProductSupplyTypeValueExists = async(req) => {
    console.log("In checkProductSupplyTypeValueExists");
    
    try {
        // USES REQ.PARAMS
        const request_body = req.body;
        //console.log("##DEBUG request_body in checkProductSupplyTypeValueExists ", request_body);
        const product_id = req.params.product_id;
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
            console.log("##DEBUG Returning true in checkProductSupplyTypeValueExists ");
            return true;
        }
    }

    catch(error) {
        console.log("Error in checkProductSupplyTypeValueExists ", error);
        throw error;
    }
}

module.exports = {
    checkProduct,
    checkDuplicateProduct,
    insertAt,
    checkProductValueExists,
    checkProductGarmentWeightValueExists,
    checkProductSupplyTypeValueExists
};