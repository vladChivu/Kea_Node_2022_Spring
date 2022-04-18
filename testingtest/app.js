const express = require("express");
const app = express();

app.get("/api/:params", (req, res) => {
    res.send({ data: "content " + req.params.params });
});

app.listen(3000);

module.exports = app;