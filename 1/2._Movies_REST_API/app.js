const express = require("express");
const app = express();

app.use(express.json());

let movies = [
    { id: 1, title: "Harry Potter 1" },
    { id: 2, title: "Don't Look Up" },
    { id: 3, title: "Did you lock the door?", year: 2021 }
];

let CURRENT_ID = 3;

app.get("/movies", (req, res) => {
    res.send({ data: movies });
});

app.get("/movies/:id", (req, res) => {
    const foundMovie = movies.find(movie => movie.id === Number(req.params.id));    
    foundMovie ? res.send({ data: foundMovie }) : res.status(204).send({});
});

app.post("/movies", (req, res) => {
    const movieToCreate = req.body;
    movieToCreate.id = ++CURRENT_ID;
    movies.push(movieToCreate);

    res.send({ data: movieToCreate });
});

app.patch("/movies/:id", (req, res) => {
    const foundMovieIndex = movies.findIndex(movie => movie.id === Number(req.params.id));
    if (foundMovieIndex !== -1) {
        const foundMovie = movies[foundMovieIndex];
        const movieToUpdateWith = { ...foundMovie, ...req.body, id: foundMovie.id };
        movies[foundMovieIndex] = movieToUpdateWith;
        res.send({ data: movieToUpdateWith });
    } else {
        res.status(404).send({});
    } 
});

app.delete("/movies/:id", (req, res) => {
    const foundMovieIndex = movies.findIndex(movie => movie.id === Number(req.params.id));
    if (foundMovieIndex !== -1) {
        movies.splice(foundMovieIndex, 1);
        res.send({ });
    } else {
        res.status(404).send({ });
    }
});


app.listen(8080, () => {
    console.log("Server is running on port", 8080);
});
