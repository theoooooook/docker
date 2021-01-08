const Parking = require("../models/parking.model.js");

// Create and Save a new Parking
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Parking
    const parking = new Parking({
      name: req.body.name,
      type: req.body.type,
      city: req.body.city
    });
  
    // Save Parking in the database
    Parking.create(parking, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Parking."
        });
      else res.send(data);
    });
  };

// Retrieve all Parkings from the database.
exports.findAll = (req, res) => {
    Parking.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving parkings."
        });
      else res.send(data);
    });
  };

// Find a single Parking with a parkingId
exports.findOne = (req, res) => {
    Parking.findById(req.params.parkingId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Parking with id ${req.params.parkingId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Parking with id " + req.params.parkingId
          });
        }
      } else res.send(data);
    });
  };

// Update a Parking identified by the parkingId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Parking.updateById(
      req.params.parkingId,
      new Parking(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Parking with id ${req.params.parkingId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Parking with id " + req.params.parkingId
            });
          }
        } else res.send(data);
      }
    );
  };

// Delete a Parking with the specified parkingId in the request
exports.delete = (req, res) => {
    Parking.remove(req.params.parkingId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Parking with id ${req.params.parkingId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Parking with id " + req.params.parkingId
          });
        }
      } else res.send({ message: `Parking was deleted successfully!` });
    });
  };

// Delete all Parkings from the database.
exports.deleteAll = (req, res) => {
    Parking.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all parkings."
        });
      else res.send({ message: `All Parkings were deleted successfully!` });
    });
  };