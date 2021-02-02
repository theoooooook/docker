const sql = require("../../models/database.js");

// constructor
const Note = function(note) {  
  this.val = note.val;
  this.idUser = note.idUser;
  this.idProduct = note.idProduct;
};

Note.create = (newNote, result) => {
  sql.query("INSERT INTO notes SET ?", newNote, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created note: ", { id: res.insertId, ...newNote });
    result(null, { id: res.insertId, ...newNote });
  });
};

Note.findById = (noteId, result) => {
  sql.query(`SELECT * FROM notes WHERE idNote = ${noteId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found note: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Note with the id
    result({ kind: "not_found" }, null);
  });
};

Note.getAll = result => {
  sql.query("SELECT * FROM notes", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("notes: ", res);
    result(null, res);
  });
};

Note.updateById = (id, note, result) => {
  sql.query(
    // QUERY TO DEFINE WITH PROPER PARAMETERS
    "UPDATE notes SET val = ?, idUser = ?, idProduct = ? WHERE idNote = ?",
    [note.val, note.idUser, note.idProduct, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Note with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated note: ", { id: id, ...note });
      result(null, { id: id, ...note });
    }
  );
};

Note.remove = (id, result) => {
  sql.query("DELETE FROM notes WHERE idNote = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Note with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted note with id: ", id);
    result(null, res);
  });
};

Note.removeAll = result => {
  sql.query("DELETE FROM notes", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} notes`);
    result(null, res);
  });
};

module.exports = Note;