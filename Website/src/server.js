const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectToDB = require('./connectToDB');
const responseValidator = require('./Validators/responseValidator');
const globalErrorHandler = require('./ErrorHandlers/globalErrorHandler');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const passport = require('passport');
require('./Auth/passport')(passport);
require('dotenv').config();


connectToDB();

// Middleware to handle JSON request body.
app.use(express.json());
// Middleware to handle URL Form Data.
app.use(express.urlencoded({ extended: true }));

// For Cross Origin Request Safety
app.use(cors());
// To Parse data from HTTPOnly Cookies
app.use(cookieParser());
// Initialize Passport.js
app.use(passport.initialize());

// Server response validator
app.use(responseValidator);

// Routes
app.use('/', require('./Routes/defaultRoute'));
app.use('/users', require('./Routes/userRoutes'));
app.use('/shippingaddresses', require('./Routes/shippingAddressRoutes'));
app.use('/products', require('./Routes/productRoutes'));
app.use('/productimages', require('./Routes/productImageRoutes'));
app.use('/productitems', require('./Routes/productItemRoutes'));
app.use('/cartitems', require('./Routes/cartItemRoutes'));
app.use('/reviews', require('./Routes/reviewRoutes'));

// Route to handle unknown URLs
app.use('/{*any}', require('./Routes/urlNotFoundRoute'));

// Error handler to handle operational errors in middleware 
app.use(globalErrorHandler);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB ');
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
}); 