/**
 * General routes.
 */
"use strict";

const express = require("express");
const router = express.Router();
const fs = require("fs");
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
        json: customersJson,
    };
    res.render("crm/customers", data);
});

/**
 * CREATE ROUTE
 * /crm/create/:
 *   get:
 *     summary: Display form to create a customer
 *     description: CRUD - Create information of a customer
 */
router.get("/crm/create", async (req, res) => {
    let data = {
        title: `Create account ${sitename}`,
    };

    res.render("crm/customer-create", data);
});

/**
 * PRODUCT ROUTE
 * /crm/create/:
 *   post:
 *     summary: Post information of a customer
 *     description: CRUD - CREATE information for a produkt
 */
router.post("/crm/create", urlencodedParser, async (req, res) => {
    console.log(JSON.stringify(req.body, null, 4));

    // fs.writeFile('../data/customer.json', JSON.stringify(req.body, null, 4), 'utf-8', function(err) {
    //     if (err) throw err
    //     console.log('JSON file updated successfully!')
    // })

    res.redirect(`/crm/customers`);
});

module.exports = router;
