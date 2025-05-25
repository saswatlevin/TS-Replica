const createDocument = (valuesArray, objectTemplate) => {
    
    var valueIndex = 0;
    const keysArray = objectTemplate.keys();

    for (const key of keysArray) {
    
        objectTemplate[key] = valuesArray[valueIndex];
        ++valueIndex;
    }

    return objectTemplate;

}

module.exports = createDocument;