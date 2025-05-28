const _ = require('lodash');

// Removes Key-Value pairs from a given object. 
const pruneObject = (givenObject, keyList) => {
    var givenObjectCopy = JSON.parse(JSON.stringify(givenObject));
    var prunedObject = _.omit(givenObjectCopy, keyList);

    
    console.log("givenObjectCopy ", givenObjectCopy);
    console.log("prunedObject ", prunedObject);

    return prunedObject; 
}

module.exports = pruneObject;