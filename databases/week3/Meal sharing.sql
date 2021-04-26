-- Create all the sql for creating the data model

set names utf8mb4;
CREATE DATABASE MealSharing;

CREATE TABLE meal (
id int unsigned NOT NULL AUTO_INCREMENT,
title varchar(255) NOT NULL,
description TEXT,
location varchar(255) NOT NULL,
`when` DATETIME NOT NULL,
max_reservations INT unsigned NOT NULL,
price decimal(10,2) NOT NULL,
created_date DATE NOT NULL,
PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE reservation (
id INT unsigned NOT NULL AUTO_INCREMENT,
number_of_guests INT unsigned NOT NULL DEFAULT 0,
meal_id INT unsigned NOT NULL,
created_date DATE NOT NULL,
contact_phonenumber VARCHAR(20) NOT NULL,
contact_name VARCHAR(200) NOT NULL,
contact_email VARCHAR(100),
PRIMARY KEY (id),
CONSTRAINT `fk_reservation_meal` FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE review (
id INT unsigned NOT NULL AUTO_INCREMENT,
title VARCHAR(255) NOT NULL,
description TEXT,
meal_id INT unsigned NOT NULL,
stars INT unsigned NOT NULL DEFAULT=0,
created_date DATE NOT NULL,
PRIMARY KEY (id),
CONSTRAINT `fk_meal_2` FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;