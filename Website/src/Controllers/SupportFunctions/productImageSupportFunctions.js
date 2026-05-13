const Product = require('../../Models/Product');

const checkDuplicateProductImageExists = async(req) => {
     console.log("In checkDuplicateProductImageExists (HELPER FUNCTION)");

     try{
        const product_id = req.body.product_id;
        const image_uri = req.body.image_uri;

        const product_image_query = {product_id: product_id, "product_images.image_uri": image_uri};

        const result = await Product.findOne(product_image_query);

        //console.log("##DEBUG - result in checkDuplicateProductImageExists ", result);

        if(result === null){
            console.log("##DEBUG - checkDuplicateProductImageExists returns false");
            return false;
        }

        else{
            console.log("##DEBUG - checkDuplicateProductImageExists returns true");
            return true;
        }
     }

     catch(error){
        console.log("Error in checkDuplicateProductImageExists ", error);
        throw error;
     }
};

const checkProductImageExists = async(req) => {
    console.log("In checkProductImageExists (HELPER FUNCTION)");

    try{

        const product_id = req.body.product_id;

        const image_id = req.body.image_id;

        const product_image_query = {product_id: product_id, "product_images.image_id": image_id};

        const result = await Product.findOne(product_image_query);

        if(result === null){
            console.log("##DEBUG - checkProductImageExists returns false");
            return false;
        }

        else{
            console.log("##DEBUG - checkProductImageExists returns true");
            return true;
        }
     }

     catch(error){
        console.log("Error in checkProductImageExists ", error);
        throw error;
     }

};

const getProductImageArrayLength = async(req) => {
    console.log("In getProductImageArrayLength (HELPER FUNCTION)");

    try{

        const product_id = req.body.product_id;

        const image_id = req.body.image_id;

        const product_image_query = {product_id: product_id};

        const result = await Product.findOne(product_image_query);

        const product_image_subdocument_array_length = result.product_images.length;
        
        console.log("Length of the Product Images subdocument array ", product_image_subdocument_array_length);

        return product_image_subdocument_array_length;
    }

    catch(error) {
        console.log("Error in getProductImageArrayLength ", error);
        throw error;
    }
};

module.exports = { 
    checkDuplicateProductImageExists, 
    checkProductImageExists,
    getProductImageArrayLength
}; 