CREATE DATABASE IF NOT EXISTS authentifications_db;
CREATE TABLE authentifications_db.authentifications(
   idAuth INT AUTO_INCREMENT,
   token VARCHAR(50),
   dateLog DATETIME,
   idUser INT NOT NULL,
   PRIMARY KEY(idAuth)
);