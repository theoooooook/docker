const express = require('express')
const productRouter = express.Router()
const products = require("./product.controller.js");

// Create a new Customer
productRouter.post("/products", products.create);

// Retrieve all Customers
productRouter.get("/products", products.findAll);

// Retrieve a single Customer with productId
productRouter.get("/products/:productId", products.findOne);

// Update a Customer with productId
productRouter.put("/products/:productId", products.update);

// Delete a Customer with productId
productRouter.delete("/products/:productId", products.delete);

// Create a new Customer
productRouter.delete("/products", products.deleteAll);


module.exports = productRouter