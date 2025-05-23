const express = require('express');
const mongoose = require('mongoose');
const connectToDB  = require('./Middleware/connectToDB');
require('dotenv').config();

const app = express();

connectToDB();

// Middleware (optional)
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB ');
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
}); 