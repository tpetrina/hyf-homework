const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reviews = require("./data/reviews");
const reservations = require("./data/reservations");

function getMealReviews() {
  const mealsWithReviews = meals.map((meal) => {
    meal.reviews = reviews.filter((review) =>
      review.mealId === meal.id
    );
    return meal;
  });
  return mealsWithReviews;
}

function getCheapMeals() {
  const mealsWithReviews = getMealReviews();
  return cheapMeals = mealsWithReviews.filter((meal) => meal.price < 100);
}

function getLargMeals() {
  const mealsWithReviews = getMealReviews();
  return largeMeals = mealsWithReviews.filter((meal) => meal.maxNumberOfGuests >= 10);
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

app.get("/meals", async (request, response) => {
  response.json(getMealReviews());
});

app.get("/cheap-meals", async (request, response) => {
  response.json(getCheapMeals());
});

app.get("/large-meals", async (request, response) => {
  response.json(getLargMeals());
});

app.get("/meal", async (request, response) => {
  const index = Math.round(getRandomNumber(0, meals.length - 1));
  response.json(meals[index]);
});

app.get("/reservations", async (request, response) => {
  response.json(reservations);
});

app.get("/reservation", async (request, response) => {
  const index = Math.round(getRandomNumber(0, reservations.length - 1));
  response.json(reservations[index]);
});

module.exports = app;
