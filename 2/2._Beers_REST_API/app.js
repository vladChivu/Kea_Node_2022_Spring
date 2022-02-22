const express = require("express");
const app = express();

app.use(express.json());

const beers = [
    { id: 1, type: "Pilsner" },
    { id: 2, brand: "Carlsberg", alcoholPercentage: 4.6 },
    { id: 3, expirationDate: new Date() },
];

let CURRENT_ID = 3;

app.get("/beers", (req, res) => {
    res.send({ data: beers });
});

app.get("/beers/:id", (req, res) => {
    const foundBeer = beers.find(beer => beer.id === Number(req.params.id));
    foundBeer ? res.send({ data: foundBeer }) : res.status(204).send({});
});

app.post("/beers", (req, res) => {
    const beerToCreate = req.body;
    beerToCreate.id = ++CURRENT_ID;
    beers.push(beerToCreate);
    res.send({ data: beerToCreate });
});


app.patch("/beers/:id", (req, res) => {
    const foundBeerIndex = beers.findIndex(beer => beer.id === Number(req.params.id));
    if (foundBeerIndex !== -1) {
        const foundBeer = beers[foundBeerIndex];
        const beerToUpdateWith = req.body;
        const updatedBeer = { ...foundBeer, ...beerToUpdateWith, id: foundBeer.id };
        beers[foundBeerIndex] = updatedBeer;
    
        res.send({ data: updatedBeer });
    } else {
        res.status(404).send({});
    }
});

app.delete("/beers/:id", (req, res) => {
    const foundBeerIndex = beers.findIndex(beer => beer.id === Number(req.params.id));
    if (foundBeerIndex !== -1) {
        beers.splice(foundBeerIndex, 1);
        res.send({});
    } else {
        res.status(404).send({});
    }
});

app.listen(8080, () => {
    console.log("Server is running on port", 8080);
});