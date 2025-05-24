const createDocument = (valuesArray, objectTemplate) => {
    
    var valueIndex = 0;
    const keysArray = objectTemplate.keys();

    for (const key of keysArray) {
    
        keysArray[key] = valuesArray[valueIndex];
        ++valueIndex;
    }

}

module.exports = createDocument;