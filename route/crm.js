/**
 * General routes.
 */
"use strict";

const express = require("express");
const router = express.Router();
// const rock = require("../src/rock");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const sitename = "Customer relationship management API";

/**
 * INDEX ROUTE
 * /exam/index:
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

module.exports = router;
