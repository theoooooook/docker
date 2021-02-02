const express = require('express')
const authentificationRouter = express.Router()
const authentifications = require("./authentification.controller.js");

// Create a new Customer
authentificationRouter.post("/authentifications", authentifications.create);

// Retrieve all Customers
authentificationRouter.get("/authentifications", authentifications.findAll);

// Retrieve a single Customer with authentificationId
authentificationRouter.get("/authentifications/:authentificationId", authentifications.findOne);

// Update a Customer with authentificationId
authentificationRouter.put("/authentifications/:authentificationId", authentifications.update);

// Delete a Customer with authentificationId
authentificationRouter.delete("/authentifications/:authentificationId", authentifications.delete);

// Create a new Customer
authentificationRouter.delete("/authentifications", authentifications.deleteAll);


module.exports = authentificationRouter