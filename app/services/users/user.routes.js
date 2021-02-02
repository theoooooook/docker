const express = require('express')
const userRouter = express.Router()
const users = require("./user.controller.js");

// Create a new Customer
userRouter.post("/users", users.create);

// Retrieve all Customers
userRouter.get("/users", users.findAll);

// Retrieve a single Customer with userId
userRouter.get("/users/:userId", users.findOne);

// Update a Customer with userId
userRouter.put("/users/:userId", users.update);

// Delete a Customer with userId
userRouter.delete("/users/:userId", users.delete);

// Create a new Customer
userRouter.delete("/users", users.deleteAll);


module.exports = userRouter