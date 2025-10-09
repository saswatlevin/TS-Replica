const mongoose = require('mongoose');
const Product = require('../Models/Product');

const checkProduct = async(req, res, next) => {
    console.log("In checkProduct");
    const product_id = req.params.product_id;
    const product_id_object = {product_id: product_id};
    const result = await Product.find(product_id_object);
    
    if (result.length === 0) {
       return false;
    }

    return true;
};

module.exports = checkProduct;