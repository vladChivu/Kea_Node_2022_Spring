import { Router } from "express";
const router = Router();

router.get("/api/fetchuser", (req, res) => {
    res.send({ data: req.session.username });
});

router.get("/api/logout", (req, res) => {
    req.session.username = undefined;
    res.send({ data: "Sad to see you go" });
});

router.post("/api/registeruser", (req, res) => {
    req.session.username = req.body.username;
    res.send({ data: "Your username is: " });
});


export default router;
