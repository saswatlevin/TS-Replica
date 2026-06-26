const jwt = require('jsonwebtoken');
const ResourceNotFoundError = require('../OperationalErrors/ResourceNotFoundError');
const AuthorizationError = require('../OperationalErrors/AuthorizationError');

const secretKey = process.env.SECRET_KEY;

const generateToken = (payload) => {
  console.log("In generateToken");
  console.log("payload in generateToken ", payload);
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
  return token;
};

const verifyToken = (requiredRoleArray) => (req, res, next) => {
  
  console.log("In verifyToken");
  const token = req.cookies.token;
  if (!token) {
    const token_not_found_error = new ResourceNotFoundError('Token not found');
    throw token_not_found_error;
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    console.log("In jwt.verify");
    if (err) {
      throw err;
      //return res.status(401).json({ message: 'Invalid token' });
    }
    
    req.user_id = decoded.user_id;
    console.log("requiredRoleArray in jwt.verify is ", requiredRoleArray);
    const user_id = decoded.user_id;
    console.log("user_id in jwt.verify is ", user_id);
    const decoded_user_role = decoded.user_role;
    console.log("decoded_user_role in jwt.verify is ", decoded_user_role);

    if (requiredRoleArray.includes(decoded_user_role) === false) {
      const unauthorized_role_error = new AuthorizationError(`The user with user_id ${user_id} does not have the authorized role to perform this action`);
      throw unauthorized_role_error;
    }

    next();
  });
};

module.exports = { 
  generateToken, 
  verifyToken 
};