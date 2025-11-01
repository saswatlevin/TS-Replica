import mongoose from 'mongoose';

const productGarmentWeightSchema = new mongoose.Schema({

    garment_weight_description: {
        type: String,
        required: [true, "garment_weight_description is a string and is a required field."]
    },
    
    garment_weight: {
        type: String,
        required: [true, "garment_weight is a string and is a required field."]
    }
});

export default mongoose.model('ProductGarmentWeight', productGarmentWeightSchema, 'ProductGarmentWeights');