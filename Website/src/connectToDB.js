const mongoose = require('mongoose');
require('dotenv').config();

const connectToDB = async() => {
    
    try {
        console.log("Attempting to connect to database at ", process.env.CURRENT_DB_URI);
        await mongoose.connect(process.env.CURRENT_DB_URI);
    }

    catch(error) {
        console.log("Failed to connect to database ", error);
    }
} 

module.exports =  connectToDB;