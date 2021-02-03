CREATE DATABASE IF NOT EXISTS comments_db;
CREATE TABLE comments_db.comments(
   idComment INT AUTO_INCREMENT,
   message VARCHAR(255),
   idUser INT NOT NULL,
   idProduct INT NOT NULL,
   PRIMARY KEY(idComment)
);