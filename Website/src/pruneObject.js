const _ = require('lodash');

// Removes Key-Value pairs from a given object. 
const pruneObject = (givenObject, keyList) => {
    console.log("In pruneObject");
    
    try {
        var givenObjectCopy = _.cloneDeep(givenObject);
        var prunedObject = _.omit(givenObjectCopy, keyList);

    
        //console.log("givenObjectCopy ", givenObjectCopy);
        //console.log("prunedObject ", prunedObject);

        return prunedObject; 
    }

    catch (error) {
        console.log("Error in pruneObject ", error);
        throw error;
    }
}

module.exports = pruneObject;