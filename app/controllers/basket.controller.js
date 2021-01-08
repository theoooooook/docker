const Basket = require("../models/basket.model.js");

// Create and Save a new Basket
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Basket
    const basket = new Basket({
      // TO DEFINE
    });
  
    // Save Basket in the database
    Basket.create(basket, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Basket."
        });
      else res.send(data);
    });
  };

// Retrieve all Baskets from the database.
exports.findAll = (req, res) => {
    Basket.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving baskets."
        });
      else res.send(data);
    });
  };

// Find a single Basket with a basketId
exports.findOne = (req, res) => {
    Basket.findById(req.params.basketId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Basket with id ${req.params.basketId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Basket with id " + req.params.basketId
          });
        }
      } else res.send(data);
    });
  };

// Update a Basket identified by the basketId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Basket.updateById(
      req.params.basketId,
      new Basket(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Basket with id ${req.params.basketId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Basket with id " + req.params.basketId
            });
          }
        } else res.send(data);
      }
    );
  };

// Delete a Basket with the specified basketId in the request
exports.delete = (req, res) => {
    Basket.remove(req.params.basketId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Basket with id ${req.params.basketId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Basket with id " + req.params.basketId
          });
        }
      } else res.send({ message: `Basket was deleted successfully!` });
    });
  };

// Delete all Baskets from the database.
exports.deleteAll = (req, res) => {
    Basket.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all baskets."
        });
      else res.send({ message: `All Baskets were deleted successfully!` });
    });
  };