import { json, Router } from "express";
const router = Router();

const players = [
    { id: 1, name: "Messi" },
    { id: 2, name: "Ronaldo" },
    { id: 3, name: "Ronaldinho" },
];

router.get("/players", (req, res) => {
    res.send({ data: players });
});


export default router;