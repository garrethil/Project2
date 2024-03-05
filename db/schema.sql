-- // Create real_db
DROP DATABASE IF EXISTS ecommerce_db;
CREATE DATABASE ecommerce_db;

CREATE TABLE listing (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    address_name VARCHAR(30) NOT NULL,
    description VARCHAR(300) NOT NULL,
    location_id INT,
    building_type INT,
    listing_type INT
);

CREATE TABLE city (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    city_name VARCHAR(30) NOT NULL
);

CREATE TABLE buildingType (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    b_type VARCHAR(30) NOT NULL
);

CREATE TABLE listingType (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    l_type VARCHAR(30) NOT NULL
);

