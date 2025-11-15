const Product = require('../../Models/Product');

const checkDuplicateProductImageExists = async(req, res, next) => {
     console.log("In checkDuplicateProductImageExists");

     try{
        const product_id = req.params.product_id;
        const image_uri = req.body.image_uri;

        const product_image_query = {"ProductImages.image_uri": image_uri};

        const result = await Product.findOne(product_image_query);

        if(result === null){
            return false;
        }

        else{
            return true;
        }
     }

     catch(error){
        console.log("Error in checkDuplicateProductImageExists ", error);
        return error;
     }
};

const checkProductImageExists = async(req, res, next) => {
    console.log("In checkImageExists");

    try{
        const image_id = req.body.image_id;

        const product_image_query = {"ProductImages.image_id": image_id};

        const result = await Product.findOne(product_image_query);

        if(result === null){
            return false;
        }

        else{
            return true;
        }
     }

     catch(error){
        console.log("Error in checkProductImageExists ", error);
        return error;
     }

}

module.exports = { 
    checkDuplicateProductImageExists, 
    checkProductImageExists 
}; 