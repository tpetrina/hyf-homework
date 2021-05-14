const { response, request } = require("express");
const express = require("express");
const app = express();
const router = express.Router();

app.use(express.urlencoded());

router.get("/multiply", (request, response) => {
    try {
        const multiplyResult = Object.values(request.query)
            .reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])
            .map((param) => Number(param))
            .reduce((multiply, currentNum) => multiply * currentNum);
        isNaN(multiplyResult) ? response.status(400).send("Invalid input") : response.send(`${multiplyResult}`);
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
        isNaN(sumResult) ? response.status(400).send("Invalid input") : response.send(`${sumResult}`);
    } catch (error) {
        response.status(404).send("values undefined");
    }
})

router.post("/multiply", (request, response) => {
    try {
        const multiplyResult = Object.values(request.body)
            .reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])
            .map((param) => Number(param))
            .reduce((multiply, currentNum) => multiply * currentNum);
        isNaN(multiplyResult) ? response.status(400).send("Invalid input") : response.send(`${multiplyResult}`);
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
        isNaN(divisionResult) ? response.status(400).send("Invalid input") : response.send(`${divisionResult}`);
    } catch (error) {
        response.status(404).send("values undefined");
    }
})
app.use("/calculator", router);

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
