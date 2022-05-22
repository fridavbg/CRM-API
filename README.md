# Customer relationship management API

The objective is to create a HTTP API to manage customer data for a small shop. It will work as the backend for a CRM graphical interface that is being developed by a different team. As a developer of the backend project, you will be in charge of the API design and implementation. 

Initialize app

```
npm i
```

Start app on localhost 1337

```
npm start
```

## ENDPOINTS

[Welcome Page](http://localhost:1337/crm/index)

```
/crm/index
```
[Customers](http://localhost:1337/crm/customers)

Get all customers. For each customer, the same information must be obtained as in the previous point.

```
/crm/customers
```

[Create new Customer](http://localhost:1337/crm/create)

- Create a new customer. A customer must have the following attributes: name, surname, email and birthdate.

```
/crm/create
```

[Display One Customer](http://localhost:1337/crm/customers/show/:id)

- Get a single customer with all the attributes mentioned above.

```
/crm/customers/show/:id
```

[Update One Customer](http://localhost:1337/crm/customers/update/:id)

- Update all the attributes (at once) of an existing customer mentioned above.

```
/crm/customers/update/:id
```

[Delete One Customer](http://localhost:1337/crm/customers/delete/:id)

- Delete an existing customer.

```
/crm/customers/delete/:id
```

