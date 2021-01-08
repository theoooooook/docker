const Authentification = require("../models/authentification.model.js");

// Create and Save a new Authentification
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Authentification
    const authentification = new Authentification({
      // TO DEFINE
    });
  
    // Save Authentification in the database
    Authentification.create(authentification, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Authentification."
        });
      else res.send(data);
    });
  };

// Retrieve all Authentifications from the database.
exports.findAll = (req, res) => {
    Authentification.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving authentifications."
        });
      else res.send(data);
    });
  };

// Find a single Authentification with a authentificationId
exports.findOne = (req, res) => {
    Authentification.findById(req.params.authentificationId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Authentification with id ${req.params.authentificationId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Authentification with id " + req.params.authentificationId
          });
        }
      } else res.send(data);
    });
  };

// Update a Authentification identified by the authentificationId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Authentification.updateById(
      req.params.authentificationId,
      new Authentification(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Authentification with id ${req.params.authentificationId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Authentification with id " + req.params.authentificationId
            });
          }
        } else res.send(data);
      }
    );
  };

// Delete a Authentification with the specified authentificationId in the request
exports.delete = (req, res) => {
    Authentification.remove(req.params.authentificationId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Authentification with id ${req.params.authentificationId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Authentification with id " + req.params.authentificationId
          });
        }
      } else res.send({ message: `Authentification was deleted successfully!` });
    });
  };

// Delete all Authentifications from the database.
exports.deleteAll = (req, res) => {
    Authentification.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all authentifications."
        });
      else res.send({ message: `All Authentifications were deleted successfully!` });
    });
  };