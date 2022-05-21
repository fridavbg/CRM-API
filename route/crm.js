/**
 * General routes.
 */
"use strict";

const express = require("express");
const router = express.Router();
const fs = require("fs");
// const customersJson = require("../data/customer.json");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const sitename = "Customer relationship management API";

const customersJson = [];

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
 * CUSTOMERS ROUTE
 * /crm/customers:
 *   get:
 *     summary: Display All customer information
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
 * CREATE ROUTE
 * /crm/create/:
 *   post:
 *     summary: Post information of a customer
 *     description: CRUD - CREATE information for a produkt
 */
router.post("/crm/create", urlencodedParser, async (req, res) => {
    const customer = {
        id: customersJson.length + 1,
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        birthdate: req.body.birthdate,
    };

    customersJson.push(customer);

    res.redirect(`/crm/customers`);
});

/**
 * SHOW ROUTE
 * /crm/customers/show/:id
 *   post:
 *     summary: Show information of One customer
 *     description: CRUD - Display information for One customer
 */
router.get("/crm/customers/show/:id", async (req, res) => {
    let id = req.params.id;
    let data = {
        title: `Customer | ${id} ${sitename}`,
        json: customersJson[id - 1],
    };
    console.log(customersJson[id]);

    res.render(`crm/customer-view`, data);
});

/**
 * UPDATE ROUTE
 * /crm/customers/update/:id
 *   post:
 *     summary: Update information of One customer
 *     description: CRUD - Update information for One customer
 */
router.get("/crm/customers/update/:id", async (req, res) => {
    let id = req.params.id;
    let data = {
        title: `Customer | ${id} ${sitename}`,
        json: customersJson[id - 1],
    };

    res.render(`crm/customer-update`, data);
});

/**
 * UPDATE ROUTE
 * /crm/customers/update/:id
 *   post:
 *     summary: Update information of One customer
 *     description: CRUD - Update information for One customer
 */
router.post("/crm/update", urlencodedParser, async (req, res) => {
    const id = req.body.id;

    const customer = customersJson.find((c) => c.id === parseInt(id));

    customer.name = req.body.name;
    customer.surname = req.body.surname;
    customer.email = req.body.email;
    customer.birthdate = req.body.birthdate;

    res.redirect(`/crm/customers`);
});

/**
 * DELETE ROUTE
 * /crm/customers/delete/:id
 *   post:
 *     summary: Update information of One customer
 *     description: CRUD - Update information for One customer
 */
router.get("/crm/customers/delete/:id", async (req, res) => {
    let id = req.params.id;
    let data = {
        title: `Customer | ${id} ${sitename}`,
        json: customersJson[id - 1],
    };

    res.render(`crm/customer-delete`, data);
});

module.exports = router;
