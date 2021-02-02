const sql = require("../../models/database.js");
// constructor
const Basket = function(basket) {
  //TO DEFINE
  this.isPaid = isPaid;
  this.idUser = idUser;
};

Basket.create = (newBasket, result) => {
  sql.query("INSERT INTO baskets SET ?", newBasket, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created basket: ", { id: res.insertId, ...newBasket });
    result(null, { id: res.insertId, ...newBasket });
  });
};

Basket.findById = (basketId, result) => {
  sql.query(`SELECT * FROM baskets WHERE idBasket = ${basketId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found basket: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Basket with the id
    result({ kind: "not_found" }, null);
  });
};

Basket.getAll = result => {
  sql.query("SELECT * FROM baskets", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("baskets: ", res);
    result(null, res);
  });
};

Basket.updateById = (id, basket, result) => {
  sql.query(
    // QUERY TO DEFINE WITH PROPER PARAMETERS
    "UPDATE baskets SET name = ?, type = ?, city = ? WHERE idBasket = ?",
    [basket.name, basket.type, basket.city, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Basket with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated basket: ", { id: id, ...basket });
      result(null, { id: id, ...basket });
    }
  );
};

Basket.remove = (id, result) => {
  sql.query("DELETE FROM baskets WHERE idBasket = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Basket with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted basket with id: ", id);
    result(null, res);
  });
};

Basket.removeAll = result => {
  sql.query("DELETE FROM baskets", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} baskets`);
    result(null, res);
  });
};

module.exports = Basket;