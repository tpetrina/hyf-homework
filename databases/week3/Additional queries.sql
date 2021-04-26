-- Additional queries

INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ("Pizza", "Try it now!!", "orestad", "2021-04-30", 7, 100, "2021-04-19");

INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ("Fish", "Fresh salmon", "Orestad", "2021-05-01", 15, 160, "2021-04-21");

INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ("Breakfast", "sausages, bacon, baked-beans, fried eggs, mushrooms, tomatoes and toast with coffee", "Orestad", "2021-05-04", 15, 200, "2021-04-21");

INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ("Ice cream", "Different tastes", "Orestad", "2021-05-02", 6, 150, "2021-04-23");


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
LEFT JOIN reservation
ON meal.id = meal_id
GROUP BY meal.id
HAVING  max_reservations > reservation_guests or reservation_guests is null;


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
SELECT meal.title , review.stars
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