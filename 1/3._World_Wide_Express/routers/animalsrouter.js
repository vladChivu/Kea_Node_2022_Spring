const router = require("express").Router();

router.get("/amountoffavoriteanimals", (req, res) => {
    res.send({ data: "Test does this work?" });
});

module.exports = router;