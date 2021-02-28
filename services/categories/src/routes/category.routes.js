const express = require('express')
const userRouter = express.Router()
const categories = require("../controller/user.controller.js.js");

// Create a new Customer
userRouter.post("/categories", categories.create);

// Retrieve all Customers
userRouter.get("/categories", categories.findAll);

// Retrieve a single Customer with userId
userRouter.get("/categories/:userId", categories.findOne);

// Update a Customer with userId
userRouter.put("/categories/:userId", categories.update);

// Delete a Customer with userId
userRouter.delete("/categories/:userId", categories.delete);

// Create a new Customer
userRouter.delete("/categories", categories.deleteAll);


module.exports = userRouter