const express = require('express')
const basketRouter = express.Router()
const baskets = require("../controllers/basket.controller.js");

// Create a new Customer
basketRouter.post("/baskets", baskets.create);

// Retrieve all Customers
basketRouter.get("/baskets", baskets.findAll);

// Retrieve a single Customer with basketId
basketRouter.get("/baskets/:basketId", baskets.findOne);

// Update a Customer with basketId
basketRouter.put("/baskets/:basketId", baskets.update);

// Delete a Customer with basketId
basketRouter.delete("/baskets/:basketId", baskets.delete);

// Create a new Customer
basketRouter.delete("/baskets", baskets.deleteAll);


module.exports = basketRouter