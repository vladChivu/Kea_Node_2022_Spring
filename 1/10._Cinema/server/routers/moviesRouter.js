import { Router } from "express";
const router = Router();
import { db } from "../database/createConnection.js";

router.get("/api/movies", async (req, res) => {
    const movies = await db.all("SELECT * FROM movies;");
    res.send({ data: movies });
});

router.post("/api/movies", async (req, res) => {
    const { title } = req.body;
    const { changes } = await db.run("INSERT INTO movies (title) VALUES (?)", 
                                        [title || "Unknown Title"]);
    res.send({ rowsAffected: changes });
});



export default router;