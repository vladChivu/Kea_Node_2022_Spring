import express from "express";
const app = express();

app.use(express.static("public"));

import path from "path";

import helmet from "helmet";
app.use(helmet());

import rateLimit from "express-rate-limit";

const baseLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(baseLimiter);

const authLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 6, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use("/auth", authLimiter);


import session from "express-session";

app.use(session({
    secret: 'keyboard cat you should probably change this',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

import coffeeRouter from "./routers/coffee.js";
app.use(coffeeRouter);


app.post("/auth", (req, res) => {
    res.send({ message: "You are trying to log in"});
});

app.get("/computer", (req, res) => {
    res.sendFile(path.resolve("public/computer.html"));
});

app.use("/frontdoor", ipLogger);

function ipLogger(req, res, next) {
    console.log(req.ip);
    next();
}

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