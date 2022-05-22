const sitename = "Customer relationship management API";

const customersJson = [
    {
        id: 1,
        name: "Test",
        surname: "Testson",
        email: "test@test.com",
        birthdate: "22/04/2002",
    },
];

/**
 * index ROUTE
 * Render welcome page
 */
async function index(req, res) {
    let data = {
        title: `Welcome  ${sitename}`,
    };

    res.render("crm/index", data);
}

/**
 * Customers ROUTE
 * Render all customers
 */
async function getCustomers(req, res) {
    let data = {
        title: `Customers |  ${sitename}`,
        json: customersJson,
    };
    res.render("crm/customers", data);
}

/**
 * Customers ROUTE
 * Render customer-create form
 */
async function getCustomerForm(req, res) {
    let data = {
        title: `Create customer ${sitename}`,
    };

    res.render("crm/customer-create", data);
}

/**
 * Customers ROUTE
 * Create a customer
 */
async function createCustomer(req, res) {
    const customer = {
        id: customersJson.length + 1,
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        birthdate: req.body.birthdate,
    };

    if (!customer) {
        res.status(404).send(
            "Please provide full information in order to create a customer"
        );
    }

    customersJson.push(customer);
    res.redirect(`/crm/customers`);
}

async function getCustomerById(req, res) {
    let id = req.params.id;

    if (!id) {
        res.status(404).send("No customer with that id exists");
    }

    let data = {
        title: `Customer | ${id} ${sitename}`,
        json: customersJson[id - 1],
    };
    console.log(customersJson[id]);

    res.render(`crm/customer-view`, data);
}

async function getUpdateForm(req, res) {
    let id = req.params.id;

    if (!id) {
        res.status(404).send("No customer with that id exists");
    }

    let data = {
        title: `Customer | ${id} ${sitename}`,
        json: customersJson[id - 1],
    };

    res.render(`crm/customer-update`, data);
}

async function updateCustomer(req, res) {
    const id = req.body.id;

    const customer = customersJson.find((c) => c.id === parseInt(id));

    if (!customer) {
        res.status(404).send("No customer with that id exists");
    }

    customer.name = req.body.name;
    customer.surname = req.body.surname;
    customer.email = req.body.email;
    customer.birthdate = req.body.birthdate;

    res.redirect(`/crm/customers`);
}

async function getDeleteForm(req, res) {
    let id = req.params.id;

    if (!id) {
        res.status(404).send("No customer with that id exists");
    }
    let data = {
        title: `Customer | ${id} ${sitename}`,
        json: customersJson[id - 1],
    };

    res.render(`crm/customer-delete`, data);
}

async function deleteCustomer(req, res) {
    const id = req.body.id;

    const customer = customersJson.find((c) => c.id === parseInt(id));

    const index = customersJson.indexOf(customer);

    if (!customer) {
        res.status(404).send("No customer with that id exists");
    }

    customersJson.splice(index, 1);

    res.redirect(`/crm/customers`);
}
module.exports = {
    index: index,
    getCustomers: getCustomers,
    getCustomerForm: getCustomerForm,
    createCustomer: createCustomer,
    getCustomerById: getCustomerById,
    getUpdateForm: getUpdateForm,
    updateCustomer: updateCustomer,
    getDeleteForm: getDeleteForm,
    deleteCustomer: deleteCustomer,
};
