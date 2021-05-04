const { response, request } = require("express");
const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/:id", async (request, response) => {
  try {
    const mealId = parseInt(request.params.id);

    if (isNaN(mealId)) {
      response.status(400).json("id must be an integer");
      return;
    }
    if (mealId <= meals.length) {
      const mealById = meals.filter((meal) => meal.id === mealId);
      console.log(mealById);
      console.log("Hani");
      response.json(mealById[0]);
    } else {
      response.json({});
    }

  } catch (error) {
    throw error;
  }
});

router.get("/", (request, response) => {

  try {

    if ('maxPrice' in request.query) {
      const maxPrice = parseFloat(request.query.maxPrice);

      if (isNaN(maxPrice)) {
        response.status(400).send(`Maximum price should be an integer`)
        return;
      }
      const mealsByMaxPrice = meals.filter((meal) => meal.price <= maxPrice);
      response.send(mealsByMaxPrice);
    }

    if ('title' in request.query) {
      const title = request.query.title;
      const mealByTitle = meals.filter((meal) => meal.title.includes(`${title}`));
      response.send(mealByTitle);
    }

    if ('createdAfter' in request.query) {
      const createdAfter = request.query.createdAfter;
      const createdAfterDate = new Date(createdAfter);

      if (!createdAfterDate.getDate()) {
        return response.status(400).send('Date must be a valid date')
      }
      const mealsByDate = meals.filter(meal => new Date(meal.createdAt).getDate() > (createdAfterDate.getDate() + 1));
      response.send(mealsByDate);
    }

    if ('limit' in request.query) {
      const limit = request.query.limit;
      if (isNaN(limit)) {
        response.status(400).send(`Limit should be an integer`)
        return;
      }
      const getLimitedMeals = meals.slice(0, limit)
      response.send(getLimitedMeals);
    }
    response.json(meals);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
