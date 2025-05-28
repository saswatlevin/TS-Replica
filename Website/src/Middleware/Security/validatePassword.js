var passwordValidator = require('password-validator');
const passwordSchema = require('./PasswordSchemas/passwordSchema');

const validatePassword = (password) => {
    const result = passwordSchema.validate(password);
    return result;
}

module.exports = validatePassword;
