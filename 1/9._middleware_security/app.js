const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/computer", (req, res) => {
    res.sendFile(__dirname + "/public/computer.html");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Running on server", PORT));