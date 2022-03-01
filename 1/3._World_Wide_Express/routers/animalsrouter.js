const router = require("express").Router();
const { calcuateFavoriteAnimals } = require("../animals/animalsUtils.js");

router.get("/amountoffavoriteanimals", (req, res) => {
    res.send({ data: calcuateFavoriteAnimals() });
});

router.get("/favoriteanimals", (req, res) => {
    res.redirect("/amountoffavoriteanimals");
});

router.get("/cuteanimal", (req, res) => {
    if (req.query.cute === "Yes") {
        return res.send({ animal: "Giraffe" });
    }
    res.send({ animal: "Snake" });
});

module.exports = router;