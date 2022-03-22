import Router from "express";
const router = Router();

router.get("/fillcoffee", (req, res) => {
    req.session.coffeeAmount = 100;
    res.send();
});

router.get("/drinkcoffee", (req, res) => {
    req.session.coffeeAmount -= 40;
    if (req.session.coffeeAmount < 0) {
        res.redirect("/fillcoffee")
    } else {
        res.send({ message: `You have ${req.session.coffeeAmount} coffee left` });
    }

});

export default router;