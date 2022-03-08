const express = require("express");
const app = express();

const fetch = require("node-fetch");

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


app.get("/proxy", async (req, res) => {
    const response = await fetch("https://www.google.com")
    const website = await response.text();
    res.send(website);
});

/* Assignment
    use node-fetch before version 3.0.0 to use require to import
    create a route with the endpoint /proxy
    fetch google's homepage
    Use response.text() to parse the response
    and display it to the client who requests /proxy

    Bonus: use async/await to make it look nicer

*/

const PORT = process.env.PORT || 6000;

const server = app.listen(PORT, () => {
    console.log("Server running on port", server.address().port);
});

