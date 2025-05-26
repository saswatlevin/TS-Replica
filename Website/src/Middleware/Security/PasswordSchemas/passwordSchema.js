var passwordValidator = require('password-validator');

var passwordSchema = new passwordValidator();

passwordSchema
.is().min(12)
.is().max(100)
.has().lowercase()
.has().uppercase()
.has().digits(1)
.has().not().spaces();

module.exports = passwordSchema;