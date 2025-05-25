const crypto = require("crypto");

// Generates a unique random string of specified length.
const createRandomString = (stringLength) => {
    return crypto.randomBytes(stringLength).toString('hex');

}

module.exports = createRandomString;