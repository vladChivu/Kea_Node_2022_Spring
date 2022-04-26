import "dotenv/config";

import express from "express";
const app = express();

app.use(express.urlencoded({ extended: true }));

import path from "path";
app.use(express.static(path.resolve("../client/public/")));

import session from "express-session";
const sessionMiddleware = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
});
app.use(sessionMiddleware);

import http from "http";
const server = http.createServer(app);

import userRegistrationRouter from "./routers/userregistration.js";
app.use(userRegistrationRouter);


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log("Server is running on port", PORT));
