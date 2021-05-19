const { response, request } = require("express");
const express = require("express");
const app = express();
const router = express.Router();

app.use(express.urlencoded());

function sendResponse(result, response) {
    isNaN(result) ? response.status(400).send("Invalid input") : response.send(`${result}`);
}

router.get("/multiply", (request, response) => {
    try {
        const multiplyResult = Object.values(request.query)
            .reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])
            .map((param) => Number(param))
            .reduce((multiply, currentNum) => multiply * currentNum);
        sendResponse(multiplyResult, response);
    } catch (error) {
        response.status(404).send("values undefined");
    }
});

router.get("/add", (request, response) => {
    try {
        const sumResult = Object.values(request.query)
            .reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])
            .map((param) => Number(param))
            .reduce((sum, currentNum) => sum + currentNum);
        sendResponse(sumResult, response);
    } catch (error) {
        response.status(404).send("values undefined");
    }
})

router.get("/subtract", (request, response) => {
    try {
        const difference = Object.values(request.query)
            .reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])
            .map((param) => Number(param))
            .reduce((previous, current) => previous - current);
        sendResponse(difference, response);
    } catch (error) {
        response.status(404).send("values undefined");
    }
})

router.get("/divide", (request, response) => {
    try {
        const result = Object.values(request.query)
            .reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])
            .map((param) => Number(param))
            .reduce((previous, current) => previous / current);
        sendResponse(result, response);
    } catch (error) {
        response.status(404).send("values undefined");
    }
});

router.post("/add", (request, response) => {
    try {
        const sumResult = Object.values(request.body)
            .reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])
            .map((param) => Number(param))
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        sendResponse(sumResult, response);
    } catch (error) {
        response.status(404).send("values undefined");
    }
});

router.post("/subtract", (request, response) => {
    try {
        const difference = Object.values(request.body)
            .reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])
            .map((param) => Number(param))
            .reduce((previous, current) => previous - current);
        sendResponse(difference, response);
    } catch (error) {
        response.status(404).send("values undefined");
    }
});

router.post("/multiply", (request, response) => {
    try {
        const multiplyResult = Object.values(request.body)
            .reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])
            .map((param) => Number(param))
            .reduce((multiply, currentNum) => multiply * currentNum);
        sendResponse(multiplyResult, response);
    } catch (error) {
        response.status(404).send("values undefined");
    }
})

router.post("/division", (request, response) => {
    try {
        const divisionResult = Object.values(request.body)
            .reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])
            .map((param) => Number(param))
            .reduce((devide, currentNum) => devide / currentNum);
        sendResponse(divisionResult, response);
    } catch (error) {
        response.status(404).send("values undefined");
    }
})
app.use("/calculator", router);

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));


