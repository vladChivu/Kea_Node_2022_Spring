const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/cheese/cheese.html");
});

app.listen(3000, () => console.log("Server is running on", 3000));
