const router = require("express").Router();


router.get("/calculatecooldinosaurs", (req, res) => {
    res.send({ data: "Test? Does it work?" });
});



module.exports = {
    router
};
