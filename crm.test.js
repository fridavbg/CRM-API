const request = require("supertest");
const crm = require("./src/crm");

describe("Test /crm/customers", () => {
    test("GET /crm/customers", async () => {
        const req = {};

        const res = {
            url: "",
            data: {},
            render: function (url, data) {
                this.url = url;
                this.data = data;
            },
        };
        crm.getCustomers(req, res);
        console.log("Json:" + JSON.stringify(res.data.json));
    });
    // More things come here
});
