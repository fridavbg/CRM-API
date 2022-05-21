const fs = require("fs");
const util = require("util");

module.exports = {
    getCustomerData: getCustomerData,
};

async function getCustomerData() {
    const jsonData = fs.readFileSync("../data/customer.json");
    return JSON.parse(jsonData);
}

console.log(getCustomerData());
