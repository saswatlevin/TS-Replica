const Product = require('../../Models/Product');
const pruneObject = require('../../pruneObject');
const _ = require('lodash');

const checkProductItemExists = async(req) => {
    console.log("In checkProductItemExists (HELPER FUNCTION)");

    try{
        const product_id = req.body.product_id;
        const sku = req.body.sku;


        const product_item_query = {product_id: product_id, "product_items.sku": sku};
        //console.log("product_item_query in checkProductItemExists ", product_item_query);

        const result = await Product.findOne(product_item_query);

        if (result === null) {
            console.log("##DEBUG - checkProductItemExists returns false");
            return false;
        }

        else {
            console.log("##DEBUG - checkProductItemExists returns true");
            return true;
        }
    }

    catch(error){
        console.log("Error in checkProductItemExists ", error);
        throw error;
    }

};

const checkDuplicateProductItemExists = async(req) => {
    console.log("In checkDuplicateProductItemExists (HELPER FUNCTION)");

    try{
        var product_item_query = {};

        const product_id = req.body.product_id;

        const request_body = req.body;
        
        if (request_body?.upper_size_number !== undefined && request_body?.upper_size_letter !== undefined){
            product_item_query = {product_id: product_id, "product_items.upper_size_number": request_body.upper_size_number, "product_items.upper_size_letter": request_body.upper_size_letter};
        
        }

        else if (request_body?.lower_size_number !== undefined && request_body?.inseam_length !== undefined){
            product_item_query = {product_id: product_id, "product_items.lower_size_number": request_body.lower_size_number, "product_items.inseam_length": request_body.inseam_length};
        }

        else if (request_body?.lower_size_letter !== undefined && request_body?.inseam_length !== undefined){
            product_item_query = {product_id: product_id, "product_items.lower_size_letter": request_body.lower_size_letter, "product_items.inseam_length": request_body.inseam_length};
       }

       else if (request_body?.lower_size_letter !== undefined){
            product_item_query = {product_id: product_id, "product_items.lower_size_letter": request_body.lower_size_letter};
       }

       else if (request_body?.lower_size_number !== undefined){
            product_item_query = {product_id: product_id, "product_items.lower_size_number": request_body.lower_size_number};
       }

       else {
        console.log("No duplicate product_item risk.");
       }

        //console.log("product_item_query in checkDuplicateProductItemExists ", product_item_query);
        const result = await Product.findOne(product_item_query);
        //console.log("##DEBUG - result in checkDuplicateProductItemExists ", result);

        if (result === null){
            console.log("##DEBUG - checkDuplicateProductItemExists returns false");
            return false;
        }

        else{
            console.log("##DEBUG - checkDuplicateProductItemExists returns true");
            return true;
        }
    }

    catch(error){
        console.log("Error in checkProductItemExists ", error);
        throw error;
    }

};

const checkProductItemValueExists = async(req) => {
    console.log("In checkProductItemValueExists (HELPER FUNCTION)");

    try {

        const product_id = req.body.product_id;
        
        const request_body_deep_clone = _.cloneDeep(req.body);

        const product_item_search_query = {};

        for (const [key, value] of Object.entries(request_body_deep_clone)) {
            
            if (key !== "product_id") {
                product_item_search_query[`product_items.${key}`] = value;
            }
        }

        //console.log("##DEBUG - product_item_search_query in checkProductItemValueExists - ", product_item_search_query);

        const result = await Product.findOne(product_item_search_query);

        if (result === null) {
            console.log("##DEBUG - checkProductItemValueExists returns false");
            return false;
        }

        else {
            console.log("##DEBUG - checkProductItemValueExists returns true");
            return true;
        }
    }
    
    catch(error) {
        console.log("Error in checkProductItemValueExists ", error);
        throw error;
    }
};

const checkProductItemAvailable = async(req) => {
    console.log("In checkProductItemCurrentStock (HELPER FUNCTION)");

    try {

        const product_id = req.body.product_id;

        const sku = req.body.sku;

        const query = {"CartItems.product_id": product_id, "CartItems.sku": sku};

        const result = await Product.findOne(query).lean();

        if (result.current_stock > 0) {
            return true;
        }

        else {
            return false;
        }
    }

    catch (error) {
        console.log("Error in checkCartItemCurrentStock ", error);
        throw error;
    }
}

const checkMinimumProductItemQuantity = async(req) => {
    console.log("In checkMinimumProductItemQuantity (HELPER FUNCTION)");

    try {

            const product_id = req.body.product_id;

            const query = {product_id: product_id};

            const result = await findOne(query).lean();

            const product_items = result.product_items;

            if (product_items.length === 1) {
                return true;
            }

            else {
                return false;
            }
    }

    catch (error) {
        console.log("Error in checkMinimumProductItemQuantity ", error);
        throw error;
    }
}

const getProductItem = async(req) => {
    console.log("In getProductItem (HELPER FUNCTION)");

    try {
        const product_id = req.body.product_id;
        const sku = req.product.sku;

        const query = {product_id: product_id, sku: sku}; 

        const result = await Product.findOne(query).lean();

        return result;
    }

    catch(error) {
        console.log("Error in getProductItem ", error);
    }
}

const updateProductItemStock = async(req, res) => {
    console.log("In updateProductItemStock (HELPER FUNCTION)");

    try {
        
        const product_item = await getProductItem();
    
        const product_id = req.body.product_id;
    
        const sku = req.body.sku;

        const filter = {product_id: product_id, sku: sku};
        console.log("filter ", filter);
    
        var new_quantity_sold = 0;
        var new_current_stock = 0;
        var new_quantity_returned = 0;

        var update_query = {};

        if (req.body.cart_item_quantity !== undefined) {
            console.log("Updating quantity_sold");
      
            new_quantity_sold = req.body.cart_item_quantity + product_item.new_quantity_sold;
      
            console.log("new_quantity_sold ", new_quantity_sold);
      
            new_current_stock = product_item.total_stock - new_quantity_sold + product_item.quantity_returned;
      
            console.log("new_current_stock ", new_current_stock);

            update_query = {"product_items.current_stock": new_current_stock, "product_items.quantity_sold": new_quantity_sold};

            console.log("update_query ", update_query);

        }

        if (req.body.quantity_returned !== undefined) {
            console.log("Updating quantity_returned");

            new_quantity_returned = product_item.quantity_returned + req.body.quantity_returned;

            console.log("new_quantity_returned ", new_quantity_returned);

            new_current_stock = product_item.total_stock - product_item.quantity_sold + product_item.quantity_returned;

            console.log("new_current_stock ", new_current_stock);

            update_query = {"product_items.current_stock": new_current_stock, "product_items.quantity_returned": new_quantity_returned};

            console.log("update_query ", update_query);
        }

        const stock_update_result = await Product.findOneAndUpdate(filter, query, {new: true}, {runValidators: true});

        console.log("result in updateProductItemStock ", stock_update_result);

    }

    catch (error) {
        console.log("Error in updateProductItemStock ", error);
    }

    
}

module.exports = { 
    checkProductItemExists, 
    checkDuplicateProductItemExists,
    checkProductItemValueExists,
    checkProductItemAvailable,
    checkMinimumProductItemQuantity,
    getProductItem,
    updateProductItemStock
};