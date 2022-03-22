import express from "express";
const app = express();

app.use(express.static("public"));

/* app.get("/clothes", (req, res) => {
    res.sendFile(__dirname + "/public/clothes.html");
}); */


function ipLogger(req, res, next) {
    next();
}

app.get("/frontgate", ipLogger, (req, res) => {
    res.send({});
});

let isHatchOpen = true;
function allowEscape(req, res, next) {
    if (isHatchOpen) {
        console.log("Go on");
        req.escapee = "Jimmy";
        next();
    } else {
        res.send({ message: "You are not allowed to pass" });
    }
}

app.get("/escapehatch", allowEscape, (req, res) => {
    res.send({ message: `Congrats ${req.escapee}, you have managed to escape!` });
});

app.get("/room", (req, res, next) => {
    console.log("You are in room 1");
    next();
});

app.get("/room", (req, res, next) => {
    res.send({ data: "You are in room 2" });
});

app.get("*", (req, res) => {
    res.send("<h1>Not found 404</h1>");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Starting server on ", PORT)
});

