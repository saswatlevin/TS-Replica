const _ = require('lodash');
const cloneDeep = require('lodash/cloneDeep');
const { sanitize } = require('express-xss-sanitizer');

const dataSanitizer = (dataObject) => {
    console.log("In dataSanitizer");

    const dataObjectDeepCopy = cloneDeep(dataObject);

    const sanitizedData = sanitize(dataObjectDeepCopy);

    return sanitizedData;

}

module.exports = dataSanitizer;