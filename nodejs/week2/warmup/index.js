const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.get("/numbers/add", (req, res) => {
    const firstNumber = parseFloat(req.query.first);
    const secondNumber = parseFloat(req.query.second);
    let sum = firstNumber + secondNumber;

    sum || sum == 0 ? res.send(`${sum}`) : res.status(404).send("Invalid Inputs");
});

app.get("/numbers/multiply/:first/:second", (req, res) => {
    const firstNumber = parseFloat(req.params.first);
    const secondNumber = parseFloat(req.params.second);
    console.log(secondNumber);
    let multiple = firstNumber * secondNumber;
    console.log(multiple);

    multiple || multiple == 0 ? res.send(`${multiple}`) : res.status(404).send("Invalid Inputs");
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
