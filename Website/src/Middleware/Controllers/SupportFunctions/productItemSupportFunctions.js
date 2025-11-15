const Product = require('../../Models/Product');

const checkProductItemExists = async(req, res, next) => {
    console.log("In checkProductItemExists");

    try{
        const product_id = req.params.product_id;
        const sku = req.body.sku;


        const product_item_query = {"ProductItems.sku": sku};

        const result = await Product.findOne(product_item_query);

        if (result === null){
            return false;
        }

        else{
            return true;
        }
    }

    catch(error){
        console.log("Error in checkProductItemExists ", error);
        return error;
    }

};

const checkDuplicateProductItemExists = async(req, res, next) => {
    console.log("In checkDuplicateProductItemExists");

    try{
        var product_item_query = {};

        const request_body = req.body;
        
        if (request_body.upper_size_number !== undefined && request_body.upper_size_letter !== undefined){
            product_item_query = {"ProductItems.upper_size_number": request_body.upper_size_number, "ProductItems.upper_size_letter": request_body.upper_size_letter};
        
        }

        else if (request_body.lower_size_number !== undefined && request_body.inseam_length !== undefined){
            product_item_query = {"ProductItems.lower_size_number": request_body.lower_size_number, "ProductItems.inseam_length": request_body.inseam_length};
        }

        else if (request_body.lower_size_letter !== undefined && request_body.inseam_length !== undefined){
            product_item_query = {"ProductItems.lower_size_letter": request_body.lower_size_letter, "ProductItems.inseam_length": request_body.inseam_length};
        }

       else if (request_body.lower_size_letter !== undefined){
            product_item_query = {"ProductItems.lower_size_letter": request_body.lower_size_letter};
       }

       else if (request_body.lower_size_number !== undefined){
            product_item_query = {"ProductItems.lower_size_number": request_body.lower_size_number};
       }

       else {
        throw new Error("Invalid request body in checkDuplicateProductItemExists.");
       }

        const result = await Product.findOne(product_item_query);

        if (result === null){
            return false;
        }

        else{
            return true;
        }
    }

    catch(error){
        console.log("Error in checkProductItemExists ", error);
        return error;
    }

};

module.exports = { 
    checkProductItemExists, 
    checkDuplicateProductItemExists 
};