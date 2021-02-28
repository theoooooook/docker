CREATE DATABASE IF NOT EXISTS products_db;
CREATE TABLE products_db.products(
   idProduct INT AUTO_INCREMENT,
   name VARCHAR(50),
   price FLOAT,
   description VARCHAR(255),
   source VARCHAR(255),
   PRIMARY KEY(idProduct)
);