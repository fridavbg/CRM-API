/**
 * General routes.
 */
"use strict";

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const customers = require("../src/crm");

/**
 * INDEX ROUTE
 * /crm/index:
 *   get:
 *     summary: Display welcome page
 *     description: Render welcome page
 */
router.get("/crm/index", customers.index);

/**
 * CUSTOMERS ROUTE
 * /crm/customers:
 *   get:
 *     summary: Display All customer information
 *     description: Render customer page
 */

router.get("/crm/customers", customers.getCustomers);

/**
 * CREATE ROUTE
 * /crm/create/:
 *   get:
 *     summary: Display form to create a customer
 *     description: CRUD - Create information of a customer
 */
router.get("/crm/create", customers.getCustomerForm);

/**
 * CREATE ROUTE
 * /crm/create/:
 *   post:
 *     summary: Post information of a customer
 *     description: CRUD - CREATE information for a produkt
 */
router.post("/crm/create", urlencodedParser, customers.createCustomer);

/**
 * SHOW ROUTE
 * /crm/customers/show/:id
 *   post:
 *     summary: Show information of One customer
 *     description: CRUD - Display information for One customer
 */
router.get("/crm/customers/show/:id", customers.getCustomerById);

/**
 * UPDATE ROUTE
 * /crm/customers/update/:id
 *   post:
 *     summary: Update information of One customer
 *     description: CRUD - Update information for One customer
 */
router.get("/crm/customers/update/:id", customers.getUpdateForm);

/**
 * UPDATE ROUTE
 * /crm/customers/update/:id
 *   post:
 *     summary: Update information of One customer
 *     description: CRUD - Update information for One customer
 */
router.post("/crm/update", urlencodedParser, customers.updateCustomer);

/**
 * DELETE ROUTE
 * /crm/customers/delete/:id
 *   get:
 *     summary: Update information of One customer
 *     description: CRUD - Update information for One customer
 */
router.get("/crm/customers/delete/:id", customers.getDeleteForm);

/**
 * DELETE ROUTE
 * /crm/customers/delete/
 *   post:
 *     summary: Delete information of One customer
 *     description: CRUD - Delete information for One customer
 */
router.post("/crm/delete", urlencodedParser, customers.deleteCustomer);

module.exports = router;
