import { Router } from "express";
const router = Router();

router.get("/api/fetchUser", (req, res) => {
    res.send({ data: req.session.username });
});

router.get("/api/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/");
    });
});

router.post("/api/registerUser", (req, res) => {
    req.session.username = req.body.username;
    res.redirect("/");
});


export default router;