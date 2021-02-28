CREATE DATABASE IF NOT EXISTS categories_db;
CREATE TABLE categories_db.categories(
   idCategory INT AUTO_INCREMENT,
   categ_name VARCHAR(50),
   PRIMARY KEY(idCategory)
);