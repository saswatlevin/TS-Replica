const Product = require('../../Models/Product');

const checkProductImageExists = async(req) => {
    console.log("In checkProductImageExists (HELPER FUNCTION)");

    try{

        const product_id = req.body.product_id;

        const image_id = req.body.image_id;

        const product_image_query = {product_id: product_id, "product_images.image_id": image_id};

        const result = await Product.findOne(product_image_query).lean();

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

        const product_image_query = {product_id: product_id};

        const result = await Product.findOne(product_image_query).lean();

        const product_image_subdocument_array_length = result.product_images.length;
        
        console.log("Length of the Product Images subdocument array ", product_image_subdocument_array_length);

        return product_image_subdocument_array_length;
    }

    catch(error) {
        console.log("Error in getProductImageArrayLength ", error);
        throw error;
    }
};

const getProductImageURI = async(req, mongodb_transaction_session) => {
    console.log("In getProductImageURI (HELPER FUNCTION)");

    const session_opt = mongodb_transaction_session ? { session: mongodb_transaction_session } : {};

    try{

        const product_id = req.body.product_id;
        //console.log("##DEBUG - product_id in getProductImageURI ", product_id);

        const image_id = req.body.image_id;
        //console.log("##DEBUG - image_id in getProductImageURI ", image_id);

        const query = {product_id: product_id, "product_images.image_id": image_id};

        const result = await Product.findOne(query, {product_images: 1, _id: 0},  { ...session_opt }).lean();

        const product_images = result?.product_images;
        //console.log("##DEBUG - result.product_images in getProductImageFlag - ", result?.product_images);

        const selected_product_image = product_images.find(img => img.image_id === image_id);
        //console.log("##DEBUG - selected_product_image in getProductImageFlag - ", selected_product_image);

        const image_uri = selected_product_image.image_uri;
        console.log("##DEBUG - image_uri in getProductImageURI - ", image_uri);

        return image_uri;

    }

    catch(error) {
        console.log("Error in getProductImageURI ", error);
        throw error;
    }
};

const getProductImageFlag = async(req) => {
    console.log("In getProductImageFlag (HELPER FUNCTION)");

    try {
        const product_id = req.body.product_id;

        const image_id = req.body.image_id;

        const query = {product_id: product_id, "product_images.image_id": image_id};

        const result = await Product.findOne(query, {product_images: 1, _id: 0}).lean();

        //console.log("##DEBUG - result.product_images in getProductImageFlag - ", result?.product_images);

        const product_images = result?.product_images;

        const selected_product_image = product_images.find(img => img.image_id === image_id);

        const main_image = selected_product_image.main_image;

        //console.log("##DEBUG - selected_product_image in getProductImageFlag - ", selected_product_image);

        //console.log("##DEBUG - selected_product_image.main_image in getProductImageFlag - ", selected_product_image.main_image);

        return main_image;
    }

    catch (error) {
        console.log("Error in getProductImageFlag ", error);
        throw error;
    }
};

module.exports = { 
    checkProductImageExists,
    getProductImageArrayLength,
    getProductImageURI,
    getProductImageFlag
}; 