import "dotenv/config";

import express from "express";
const app = express();

app.use(express.urlencoded({ extended: true }));

import path from "path";
app.use(express.static(path.resolve("../client/public")));

import session from "express-session";
const sessionMiddleware = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  });
app.use(sessionMiddleware);

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server);

const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);
io.use(wrap(sessionMiddleware));

io.on("connection", (socket) => {

  socket.on("colorChanged", ({ data }) => {
    const username = socket.request.session.username;

    io.emit("changeColor", { data, username });
  });


});

import userRegistration from "./routers/userregistration.js";
app.use(userRegistration);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log("Server is running on port", PORT));
