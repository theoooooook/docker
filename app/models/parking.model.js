const sql = require("./database.js");

// constructor
const Parking = function(parking) {
  this.name = parking.name;
  this.type = parking.type;
  this.city = parking.city;
};

Parking.create = (newParking, result) => {
  sql.query("INSERT INTO parkings SET ?", newParking, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created parking: ", { id: res.insertId, ...newParking });
    result(null, { id: res.insertId, ...newParking });
  });
};

Parking.findById = (parkingId, result) => {
  sql.query(`SELECT * FROM parkings WHERE id = ${parkingId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found parking: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Parking with the id
    result({ kind: "not_found" }, null);
  });
};

Parking.getAll = result => {
  sql.query("SELECT * FROM parkings", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("parkings: ", res);
    result(null, res);
  });
};

Parking.updateById = (id, parking, result) => {
  sql.query(
    "UPDATE parkings SET name = ?, type = ?, city = ? WHERE id = ?",
    [parking.name, parking.type, parking.city, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Parking with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated parking: ", { id: id, ...parking });
      result(null, { id: id, ...parking });
    }
  );
};

Parking.remove = (id, result) => {
  sql.query("DELETE FROM parkings WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Parking with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted parking with id: ", id);
    result(null, res);
  });
};

Parking.removeAll = result => {
  sql.query("DELETE FROM parkings", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} parkings`);
    result(null, res);
  });
};

module.exports = Parking;