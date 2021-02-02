const sql = require("../db/database.js");

// constructor
const Authentification = function(authentification) {
  //TO DEFINE
};

Authentification.create = (newAuthentification, result) => {
  sql.query("INSERT INTO authentifications SET ?", newAuthentification, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created authentification: ", { id: res.insertId, ...newAuthentification });
    result(null, { id: res.insertId, ...newAuthentification });
  });
};

Authentification.findById = (authentificationId, result) => {
  sql.query(`SELECT * FROM authentifications WHERE idAuth = ${authentificationId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found authentification: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Authentification with the id
    result({ kind: "not_found" }, null);
  });
};

Authentification.getAll = result => {
  sql.query("SELECT * FROM authentifications", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("authentifications: ", res);
    result(null, res);
  });
};

Authentification.updateById = (id, authentification, result) => {
  sql.query(
    // QUERY TO DEFINE WITH PROPER PARAMETERS
    "UPDATE authentifications SET name = ?, type = ?, city = ? WHERE idAuth = ?",
    [authentification.name, authentification.type, authentification.city, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Authentification with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated authentification: ", { id: id, ...authentification });
      result(null, { id: id, ...authentification });
    }
  );
};

Authentification.remove = (id, result) => {
  sql.query("DELETE FROM authentifications WHERE idAuth = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Authentification with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted authentification with id: ", id);
    result(null, res);
  });
};

Authentification.removeAll = result => {
  sql.query("DELETE FROM authentifications", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} authentifications`);
    result(null, res);
  });
};

module.exports = Authentification;