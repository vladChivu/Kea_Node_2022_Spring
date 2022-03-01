const express = require("express");
const app = express();

/* const animalsUtils = require("./animals/animalsUtils.js");
console.log("You like this many animals:", animalsUtils.calcuateFavoriteAnimals()); */

app.use(express.static("public"));

const animalsRouter = require("./routers/animalsrouter.js");
app.use(animalsRouter);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

app.get("/message", (req, res) => {
    res.send("<h1>Welcome to World Wide Express</h1>");
});

app.get("/weather", (req, res) => {
    res.sendFile(__dirname + "/public/weather.html");
});


const PORT = process.env.PORT || 6000;

const server = app.listen(PORT, () => {
    console.log("Server running on port", server.address().port);
});

