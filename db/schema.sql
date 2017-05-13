CREATE DATABASE IF NOT EXISTS burgers_db;

USE burgers_db;

CREATE TABLE IF NOT EXISTS burgers 
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(200) NOT NULL,
	devoured boolean NOT NULL,
    date TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);

SELECT * FROM burgers