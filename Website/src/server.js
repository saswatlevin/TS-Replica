const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectToDB  = require('./Middleware/connectToDB');
const responseValidator = require('./Middleware/Validators/responseValidator');
require('dotenv').config();
//const shippingAddressSchema = require('./Middleware/Schemas/shippingAddressSchemas');
//const productSchema = require('./Middleware/Schemas/productSchemas');
//const userSchemas = require('./Middleware/Schemas/userSchemas');
//const orderSchemas = require('./Middleware/Schemas/orderSchemas');
//const reviewSchemas = require('./Middleware/Schemas/reviewSchemas');


connectToDB();

// Middleware to handle JSON request body.
app.use(express.json());

app.use(responseValidator);

// Routes
app.use('/', require('./Middleware/Routes/defaultRoute'));
app.use('/users', require('./Middleware/Routes/userRoutes'));

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB ');
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
}); 