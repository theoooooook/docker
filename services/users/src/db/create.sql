CREATE DATABASE IF NOT EXISTS users_db;
CREATE TABLE users_db.users(
   idUser INT AUTO_INCREMENT,
   firstname VARCHAR(50),
   lastname VARCHAR(50),
   username VARCHAR(50),
   password VARCHAR(255),
   address VARCHAR(255),
   PRIMARY KEY(idUser)
);