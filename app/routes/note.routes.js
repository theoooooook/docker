const express = require('express')
const noteRouter = express.Router()
const notes = require("../controllers/note.controller.js");

// Create a new Customer
noteRouter.post("/notes", notes.create);

// Retrieve all Customers
noteRouter.get("/notes", notes.findAll);

// Retrieve a single Customer with noteId
noteRouter.get("/notes/:noteId", notes.findOne);

// Update a Customer with noteId
noteRouter.put("/notes/:noteId", notes.update);

// Delete a Customer with noteId
noteRouter.delete("/notes/:noteId", notes.delete);

// Create a new Customer
noteRouter.delete("/notes", notes.deleteAll);


module.exports = noteRouter