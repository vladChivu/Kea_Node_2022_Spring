// import express
const express = require("express");
const app = express();

// alternative way of doing it
// const app = require("express")();

app.use(express.json());

// (endpoint, callback function)
app.get("/", (req, res) => {
    res.send({ message: "Welcome to my server. This is my first route ever." });
});

app.get("/about", (req, res) => {
    res.send({  
        version: "0.0.1"
    });
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});


// this is not REST!!!
// task create a GET route called about that sends some info about the server
// task implement a POST request handler on the endpoint /opinion based on the client data the server sends a response that contains an opinion 

app.listen(8080);
