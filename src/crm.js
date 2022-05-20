/**
 * A module exporting functions to access the customer database.
 */

"use strict";

const fs = require("fs");
let jsonData;

module.exports = {
    showCustomers: showCustomers,
};

/**
 * Show all entries in the customer json.
 */

async function showCustomers() {
    jsonData = await fs.readFile("../data/customer.json", "utf8");
    return JSON.parse(jsonData);
}
