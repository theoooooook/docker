const express = require('express')
const parkingRouter = express.Router()
const parkings = require("../controllers/parking.controller.js");

// Create a new Customer
parkingRouter.post("/parkings", parkings.create);

// Retrieve all Customers
parkingRouter.get("/parkings", parkings.findAll);

// Retrieve a single Customer with parkingId
parkingRouter.get("/parkings/:parkingId", parkings.findOne);

// Update a Customer with parkingId
parkingRouter.put("/parkings/:parkingId", parkings.update);

// Delete a Customer with parkingId
parkingRouter.delete("/parkings/:parkingId", parkings.delete);

// Create a new Customer
parkingRouter.delete("/parkings", parkings.deleteAll);


module.exports = parkingRouter