// CHECKS IF THE FILTER CONTAINS NECESSARY KEYS
const checkFilter = (apiName, filter) => {
    if (apiName === "updateUser") { 

        for (key of filter) {
            if (key === "email" || key === "user_id") {
                return key;
            }
        }

        
    }
    return false;
}

module.exports = {
    checkFilter
};
