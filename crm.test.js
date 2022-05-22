const request = require("supertest");
const crm = require("./src/crm");

describe("Test /crm/customers", () => {
    test("GET /crm/customers", async () => {
        const res = {
            url: "",
            data: {},
            render: function (url, data) {
                this.url = url;
                this.data = data;
            },
        };
        crm.getCustomers(request, res);
        let customerObj = res.data.json;
        expect(customerObj[0]).toMatchObject({
            id: 1,
            name: "Test",
            surname: "Testson",
            email: "test@test.com",
            birthdate: "22/04/2002",
        });
    });
});

describe("Test /crm/create", () => {
    test("GET /crm/create", async () => {
        const res = {
            url: "",
            data: {},
            render: function (url, data) {
                this.url = url;
                this.data = data;
            },
        };
        crm.getCustomers(request, res);
        let customerObj = res.data.json;
        expect(customerObj[0]).toHaveProperty("id");
    });
});

describe("Test /crm/customers/show/:id", () => {
    test("GET /crm/customers/show/:id", async () => {
        const res = {
            url: "",
            data: {},
            render: function (url, data) {
                this.url = url;
                this.data = data;
            },
        };
        crm.getCustomers(request, res);
        let customerObj = res.data.json;
        expect(customerObj[0]).toHaveProperty("id");
    });
});

describe("Test /crm/customers/update/:id", () => {
    test("GET /crm/customers/update/:id", async () => {
        const res = {
            url: "",
            data: {},
            render: function (url, data) {
                this.url = url;
                this.data = data;
            },
        };
        crm.getCustomers(request, res);
        let customerObj = res.data.json;
        expect(customerObj[0]).toHaveProperty("id");
        expect(customerObj[0].id).toEqual(1);
    });
});

describe("Test /crm/customers/delete/:id", () => {
    test("GET /crm/customers/delete/:id", async () => {
        const res = {
            url: "",
            data: {},
            render: function (url, data) {
                this.url = url;
                this.data = data;
            },
        };
        crm.getCustomers(request, res);
        let customerObj = res.data.json;
        expect(customerObj[0]).toHaveProperty("id");
        expect(customerObj[0].id).toEqual(1);
    });
});