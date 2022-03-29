import { Router } from "express";
const router = Router();

const movies = [
    { id: 1, title: "Spiderman" },
    { id: 2, title: "Die Hard 4" },
];

router.get("/movies", (req, res) => {
    res.send({ data: movies });
});


export default router;