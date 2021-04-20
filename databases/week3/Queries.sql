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