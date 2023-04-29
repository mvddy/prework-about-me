-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

USE ecommerce_db

CREATE TABLE Category(
    id INT NOT NULL,
    category_name 

    type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,



Doesn't allow null values.

Set as primary key.

Uses auto increment.

category_name

String.

Doesn't allow null values.

Product

id

Integer.

Doesn't allow null values.

Set as primary key.

Uses auto increment.

product_name

String.

Doesn't allow null values.

price

Decimal.

Doesn't allow null values.

Validates that the value is a decimal.

stock

Integer.

Doesn't allow null values.

Set a default value of 10.

Validates that the value is numeric.

category_id

Integer.

References the Category model's id.

Tag

id

Integer.

Doesn't allow null values.

Set as primary key.

Uses auto increment.

tag_name

String.
ProductTag

id

Integer.

Doesn't allow null values.

Set as primary key.

Uses auto increment.

product_id

Integer.

References the Product model's id.

tag_id

Integer.

References the Tag model's id.