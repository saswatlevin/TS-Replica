const getCurrentDateTime = () => {
    const currentDate = new Date();
    const iso8601DateTimeString = currentDate.toISOString();

    return iso8601DateTimeString;
};

module.exports = getCurrentDateTime;