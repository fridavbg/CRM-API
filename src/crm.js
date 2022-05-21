const fs = require("fs");
const util = require("util");

async function getCustomerData() {
    const jsonData = fs.readFileSync("../data/customer.json");
    return JSON.parse(jsonData);
}

console.log(getCustomerData());

module.exports = {
    getCustomerData: getCustomerData,
};

