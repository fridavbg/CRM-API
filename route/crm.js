/**
 * General routes.
 */
"use strict";

const express = require("express");
const router = express.Router();
// const customers = require("../src/crm");
const customersJson = require("../data/customer.json");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const sitename = "Customer relationship management API";

/**
 * INDEX ROUTE
 * /crm/index:
 *   get:
 *     summary: Display welcome page
 *     description: Render welcome page
 */
router.get("/crm/index", (req, res) => {
    let data = {
        title: `Welcome  ${sitename}`,
    };

    res.render("crm/", data);
});

/**
 * INDEX ROUTE
 * /crm/customers:
 *   get:
 *     summary: Display customer information
 *     description: Render customer page
 */
router.get("/crm/customers", async (req, res) => {
    let data = {
        title: `Customers |  ${sitename}`,
        json: customersJson
    };
    res.render("crm/customers", data);
});

/**
 * CREATE ROUTE
 * /crm/create/:
 *   get:
 *     summary: Display from to create a customer
 *     description: CRUD - Create information of a customer
 */
router.get("/crm/create", async (req, res) => {
    let data = {
        title: `Create account ${sitename}`,
    };

    res.render("crm/customer-create", data);
});

module.exports = router;
