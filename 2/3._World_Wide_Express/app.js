const express = require("express");
const app = express();

app.use(express.static("public"));

// const { calculateAmountOfCoolDinosaurs } = require("./dinosaurs/dinosaurs.js");
// console.log(calculateAmountOfCoolDinosaurs());

const dinosaurrouter = require("./routers/dinosaurrouter.js");
app.use(dinosaurrouter.router);


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

app.get("/welcome", (req, res) => {
    res.send(`
        <h1>Welcome to my website</h1>
        <h2>Take a look ${true}</h2>
    `);
});

app.get("/bored", (req, res) => {
    res.sendFile(__dirname + "/public/activities.html")
});



const PORT = process.env.PORT || 9000;

const server = app.listen(PORT, () => {
    console.log("The server is running on port", server.address().port);
});
