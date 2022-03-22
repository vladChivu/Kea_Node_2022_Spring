import { Router } from "express";
const router = Router();

router.get("/spinplanet", (req, res) => {
    req.session.planetName = "Jupyter";
    const wasSpinning = req.session.isSpinning;
    req.session.isSpinning = true;
    res.send({ message: `Planet was spinning: ${wasSpinning}.` });
});

router.get("/stopplanet", (req, res) => {
    console.log(req.session.planetName);
    const wasSpinning = req.session.isSpinning;
    req.session.isSpinning = false;
    res.send({ message: `Planet was spinning: ${wasSpinning}.` });
});

export default router;