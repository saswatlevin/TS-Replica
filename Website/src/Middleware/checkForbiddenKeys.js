// CHECKS A REQUEST BODY'S KEY LIST FOR KEYS THAT
// A CONTROLLER FUNCTION CAN'T UPDATE 
const checkForbiddenKeys = (apiName, keyList) => {
    if (apiName === "updateUser") {
        
        for (key of keyList) {
            if (key === "ShippingAddresses" || key === "CartItems" || key === "docType" || key === "password" || key === "date_created_at") {
                return key;
            }
        }
        
        return false;
    }

    return false;
}

module.exports = checkForbiddenKeys;