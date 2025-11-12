const mongoose = require('mongoose');
const Product = require('../../Models/Product');

const checkProduct = async(req, res, next) => {
    console.log("In checkProduct");
    const product_id = req.params.product_id;
    
    const product_name = req.body.product_name;
    
    const product_search_object = {product_id: product_id, 
    product_name: product_name};
    
    const result = await Product.findOne(product_search_object);
    
    if (result.length === 0) {
       return false;
    }

    return true;
};

module.exports = checkProduct;