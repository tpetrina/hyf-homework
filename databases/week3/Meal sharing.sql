-- Create all the sql for creating the data model

set names utf8mb4;
CREATE DATABASE MealSharing;

CREATE TABLE meal (
id int unsigned NOT NULL AUTO_INCREMENT,
title varchar(255) NOT NULL,
description TEXT,
location varchar(255) NOT NULL,
`when` DATETIME NOT NULL,
max_reservations INT,
price decimal NOT NULL,
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
CONSTRAINT `fk_meal` FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE
);


CREATE TABLE review (
id INT unsigned NOT NULL AUTO_INCREMENT,
title VARCHAR(255) NOT NULL,
description TEXT,
meal_id INT unsigned NOT NULL,
stars INT unsigned,
created_date DATE NOT NULL,
PRIMARY KEY (id),
CONSTRAINT `fk_meal_2` FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



-- Queries

-- Meal queries

INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ("Ghorme Sabzi", "A great Persian dishes", "orestad", "2021-04-20", 10, 200, "2021-04-19");

-- Get all meals
SELECT * FROM meal;

-- Add a new meal
INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ("Pizza", "Try it now!!", "orestad", "2021-04-30", 7, 100, "2021-04-19");

-- Get a meal with any id, fx 1
SELECT *
From meal
WHERE id= 1;

-- Update a meal with any id. Update any attribute fx the title or multiple attributes
UPDATE meal
SET title= "Pasta", price = 150
WHERE id = 2;

-- Delete a meal with any id
DELETE FROM meal
WHERE id=1;


-- Reservation queries

INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (4, 2, "2021-04-19", "45 45 45 45", "Hani Far", "hani.far@gmail.com");

-- Get all reservations
SELECT * FROM reservation;

-- Add a new reservation
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (6, 2, "2021-04-19", "46 46 46 46", "Suzy Az", "suzy.az@gmail.com");

-- Get a reservation with any id, fx 1
SELECT * 
FROM reservation
WHERE id =1;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
SET number_of_guests = 5, contact_phonenumber = "45 45 46 46"
WHERE id = 1;


-- Delete a reservation with any id, fx 1
DELETE FROM reservation
WHERE id = 1;


-- Review queries

INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ("Perfect", "We had a great time and the food was delicious", 2, 5, "2021-04-30");

-- Get all reviews
SELECT * FROM review;

-- Add a new review
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ("Great", "food and drinks were delicious.", 2, 4, "2021-04-30");


-- Get a review with any id, fx 1
SELECT * 
FROM review
WHERE id =1;

-- Update a review with any id. Update any attribute fx the title or multiple attributes
UPDATE review
SET stars = 5
WHERE id = 2;


-- Delete a review with any id, fx 1
DELETE FROM review
WHERE id = 1;


-- Additional queries
INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ("Pizza", "Try it now!!", "orestad", "2021-04-30", 7, 100, "2021-04-19");

INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ("Fish", "Fresh salmon", "Orestad", "2021-05-01", 15, 160, "2021-04-21");

INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ("Breakfast", "sausages, bacon, baked-beans, fried eggs, mushrooms, tomatoes and toast with coffee", "Orestad", "2021-05-04", 15, 200, "2021-04-21");


INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (4, 3, "2021-04-26", "47 47 37 37", "Mary Mary", "mary.m@gmail.com");

INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (7, 4, "2021-04-27", "48 48 38 38", "Ava Sol", "ava.s@gmail.com");

INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (2, 2, "2021-04-27", "49 48 38 38", "Sara Sol", "Sara.s@gmail.com");

INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ("Relaxing", "recommend this host", 3, 4, "2021-05-01");

INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ("Exciting", "I would definitely recommend this place tomy friends", 2, 5, "2021-05-02");

INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ("Good", "recommend this host", 4, 3, "2021-05-01");


-- Get meals that has a price smaller than a specific price
SELECT * From meal
WHERE meal.price < 190;


-- Get meals that still has available reservations
SELECT title, max_reservations, SUM(number_of_guests) AS reservation_guests FROM meal
JOIN reservation
ON meal.id = meal_id
GROUP BY meal_id
HAVING max_reservations > SUM(number_of_guests);


-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT *
FROM meal
WHERE meal.title LIKE "%fast%";

-- Get meals that has been created between two dates
SELECT *
FROM meal
WHERE created_date BETWEEN '2021-04-20' AND '2021-04-21';

-- Get only specific number of meals
SELECT *
FROM meal
limit 3;


-- Get the meals that have good reviews
SELECT meal.title AS meal, review.stars
FROM meal
JOIN review ON meal.id=review.meal_id
WHERE review.stars >= 4;


-- Get reservations for a specific meal sorted by created_date
SELECT *
FROM reservation
JOIN meal on meal.id = reservation.meal_id
WHERE meal.title = "Pasta"
ORDER BY reservation.created_date;

-- Sort all meals by average number of stars in the reviews
    
SELECT meal.title, AVG(review.stars) AS star
FROM meal
LEFT JOIN review
ON meal.id = review.meal_id
GROUP BY meal.title
ORDER BY star DESC;
