const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Welcome to World Wide Express</h1>");
});

app.get("/weather", (req, res) => {
    res.sendFile(__dirname + "/public/weather.html");
});

app.listen(8080, () => {
    console.log("Server running on port", 8080);
});
