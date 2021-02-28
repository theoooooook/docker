const express = require('express')
const categoryRouter = express.Router()
const categories = require("../controller/category.controller.js");

// Create a new Customer
categoryRouter.post("/categories", categories.create);

// Retrieve all Customers
categoryRouter.get("/categories", categories.findAll);

// Retrieve a single Customer with userId
categoryRouter.get("/categories/:categoryId", categories.findOne);

// Update a Customer with userId
categoryRouter.put("/categories/:categoryId", categories.update);

// Delete a Customer with userId
categoryRouter.delete("/categories/:ucategoryId", categories.delete);

// Create a new Customer
categoryRouter.delete("/categories", categories.deleteAll);


module.exports = categoryRouter