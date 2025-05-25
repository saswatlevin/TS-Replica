const express = require('express');
const mongoose = require('mongoose');
const connectToDB  = require('./Middleware/connectToDB');
require('dotenv').config();

const app = express();

connectToDB();

// Middleware to handle JSON request body.
app.use(express.json());

// Routes
app.use('/', require('./Middleware/Routes/defaultRoute'));
app.use('/users', require('./Middleware/Routes/userRoutes'));

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB ');
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
}); 