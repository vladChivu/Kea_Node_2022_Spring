const express = require("express");
const app = express();

app.use(express.static("public"));

const fs = require("fs");

const nav = fs.readFileSync("./public/components/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer.html").toString();

const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const cheesegallery = fs.readFileSync("./public/pages/cheesegallery/cheesegallery.html").toString(); 

const frontpagePage = nav.replace("%%DOCUMENT_TITLE%%", "Welcome to the cheese zone") + frontpage + footer;
const cheesegalleryPage = nav.replace("%%DOCUMENT_TITLE%%", "You are in the cheese zone") + cheesegallery + footer;

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/cheesegallery", (req, res) => {
    res.send(cheesegalleryPage)
});

app.listen(3000, () => console.log("Server is running on", 3000));
