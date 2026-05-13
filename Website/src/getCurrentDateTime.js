const getCurrentDateTime = () => {
    console.log("In getCurrentDateTime ");

    const currentDate = new Date();
    const iso8601DateTimeString = currentDate.toISOString().slice(0, 19);

    return iso8601DateTimeString;
};

module.exports = getCurrentDateTime;