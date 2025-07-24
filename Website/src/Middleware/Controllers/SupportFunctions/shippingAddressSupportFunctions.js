const User = require('../../Models/User')

const checkUserExists = async(req, res, next) => {
    console.log("In checkUserExists");
    
    const user_id = req?.params?.user_id;

    const userIDObject = {user_id: user_id};

    // Check if findOne is called with the correct input and return value is as expected.
    const result = await User.findOne(userIDObject);

    if (result === null) {
        return false;
    }

    else {
        return true;
    }
};

module.exports = {
    checkUserExists
};

