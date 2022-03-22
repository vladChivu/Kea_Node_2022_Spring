import express from "express";
const app = express();

app.use(express.static("public"));

// app.get("/computer", (req, res) => {
//     res.sendFile(__dirname + "/public/computer.html");
// });


function guardHouse(req, res, next) {
    const username = "Hans";
    if (username === "Hans") {
        req.username = "Hans";
        next();
    } else {
        res.send({ message: `You don't have permission to enter` });
    }
}

app.get("/frontdoor", guardHouse, (req, res) => {
    res.send({ doorbell: `You have permission to enter, ${req.username}.` });
});

function greeter(req, res, next) {
    console.log("Welcome to the mansion.");
    next();
}

app.get("/room", greeter, (req, res, next) => {
    // res.send({ message: "You are in room 1" });
    console.log("You are in room 1 but I will lead you to room 2");
    next();
});

app.get("/room", greeter, (req, res, next) => {
    res.send({ message: "You are in room 2" });
});

app.get("*", (req, res) => {
    res.send("<h1>Page not found: 404</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Running on server", PORT));