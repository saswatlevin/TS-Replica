import mongoose from 'mongoose';
import ProductImage from './ProductImage';
import ProductItem from './ProductItem';
import ProductGarmentWeight from './ProductGarmentWeight';

const productSchema = new mongoose.Schema({
    product_id: {
        type: String,
        required: [true, "product_id is the primary key, a 12-character string and is a required field."]
    },
    
    product_name: {
        type: String,
        required: [true, "product_name is a string and is a required field."]
    },

    docType: {
        type: String,
        required: [true, "docType is a string and is a required field."]
    },
    
    product_color: {
        type: String,
        required: [true, "product_color is a string and is a required field."]
    },
    
    product_description: {
        type: String,
        required: [true, "product_description is a string and is a required field."]
    },
    
    product_price: {
        type: Number,
        required: [true, "product_price is a number and is a required field."]
    },
    
    product_category: {
        type: String,
        required: [true, "product_category is a string and is a required field."]
    },
    
    product_subcategory: {
        type: String,
        required: [true, "product_subcategory is a string and is a required field."]
    },
    
    product_subcategory_type: {
        type: String,
        required: [true, "product_subcategory_type is a string and is a required field."]
    },
    
    product_fit: {
        type: String,
        required: [true, "product_fit is a string and is a required field."]
    },
    
    product_garment_weight: {
        type: ProductGarmentWeight,
        required: [true, "product_garment_weight is a ProductGarmentWeight and is a required field."]
    },

    product_supply_type: {
        type: String,
        required: [true, "product_supply_type is a string and is a required field."]
    },
    
    product_specifications: {
        type: String,
        required: [true, "product_specifications is a string and is a required field."]
    },
    
    product_material: {
        type: String,
        required: [true, "product_material is a string and is a required field."]
    },

    product_images: {
        type: [ProductImage],
        required: [true, "product_images is an array of ProductImages and is a required field."]
    },
    
    product_items: {
        type: [ProductItem],
        required: [true, "product_items is an array of ProductItems and is a required field."]
    }
});

export default mongoose.model('Product', productSchema, 'Products');