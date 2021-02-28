CREATE DATABASE IF NOT EXISTS baskets_db;
CREATE TABLE baskets_db.baskets(
   idBasket INT AUTO_INCREMENT,
   isPaid INT,
   idUser INT NOT NULL,
   PRIMARY KEY(idBasket)
);