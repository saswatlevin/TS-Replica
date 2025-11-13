const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectToDB  = require('./Middleware/connectToDB');
const responseValidator = require('./Middleware/Validators/responseValidator');
const globalErrorHandler = require('./Middleware/ErrorHandlers/globalErrorHandler');
require('dotenv').config();
//const shippingAddressSchema = require('./Middleware/Schemas/shippingAddressSchemas');
//const productSchema = require('./Middleware/Schemas/productSchemas');
//const userSchemas = require('./Middleware/Schemas/userSchemas');
//const orderSchemas = require('./Middleware/Schemas/orderSchemas');
//const reviewSchemas = require('./Middleware/Schemas/reviewSchemas');


connectToDB();

// Middleware to handle JSON request body.
app.use(express.json());
// Middleware to handle URL Form Data.
app.use(express.urlencoded({extended: true}));

// Server response validator
app.use(responseValidator);

// Routes
app.use('/', require('./Middleware/Routes/defaultRoute'));
app.use('/users', require('./Middleware/Routes/userRoutes'));
app.use('/shippingaddresses', require('./Middleware/Routes/shippingAddressRoutes'));

// Route to handle unknown URLs
app.use('/{*any}', require('./Middleware/Routes/urlNotFoundRoute'));

// Error handler to handle operational errors in middleware 
app.use(globalErrorHandler);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB ');
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
}); 