CREATE DATABASE IF NOT EXISTS notes_db;
CREATE TABLE notes_db.notes(
   idNote INT AUTO_INCREMENT,
   val INT,
   idUser INT NOT NULL,
   idProduct INT NOT NULL,
   PRIMARY KEY(idNote)
);