const z = require('zod');
const mongoose= require('mongoose');

const objectIdSchema = z.object({
    _id: z.custom((val) => mongoose.Types.ObjectId.isValid(val))
    
});



module.exports = objectIdSchema;

