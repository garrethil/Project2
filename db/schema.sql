-- // Create real_db
DROP DATABASE IF EXISTS real_db;
CREATE DATABASE real_db;

CREATE TABLE listing (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    address_name VARCHAR(30) NOT NULL,
    description VARCHAR(300) NOT NULL,
    price DECIMAL NOT NULL,
    user_id INT,
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
    building_type VARCHAR(30) NOT NULL
);

CREATE TABLE listingType (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    listing_type VARCHAR(30) NOT NULL
);

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    user_name VARCHAR(30) NOT NULL,
    pswd VARCHAR(30) NOT NULL
)

