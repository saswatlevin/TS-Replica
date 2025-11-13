const mongoose = require('mongoose');
const Product = require('../../Models/Product');

const checkProduct = async(req, res, next) => {
    console.log("In checkProduct");
    const product_id = req.params.product_id;
    
    const product_search_object = {product_id: product_id};
    
    const result = await Product.findOne(product_search_object);
    
    if (result.length === 0) {
       return false;
    }

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

module.exports = {
    checkProduct,
    checkDuplicateProduct
}