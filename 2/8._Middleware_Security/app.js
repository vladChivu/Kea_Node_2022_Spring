import express from "express";
const app = express();

app.use(express.static("public"));

/* app.get("/clothes", (req, res) => {
    res.sendFile(__dirname + "/public/clothes.html");
}); */

import helmet from "helmet";

app.use(helmet());


import rateLimit from 'express-rate-limit';

const baseLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const authLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(baseLimiter);
app.use("/auth", authLimiter);

app.post("/auth/login", (req, res) => {
    res.send({ message: "You are trying to log in..." });
});


import session from "express-session";

app.use(session({
    secret: 'keyboard cat should not be pushed',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));


import planetsRouter from "./routers/planets.js";
app.use(planetsRouter);


app.use("/auth/*", ipLogger);

function ipLogger(req, res, next) {
    console.log(req.ip);
    next();
}

app.get("/frontgate", (req, res) => {
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

