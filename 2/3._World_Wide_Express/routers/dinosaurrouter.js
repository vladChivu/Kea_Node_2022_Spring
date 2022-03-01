const router = require("express").Router();
const { calculateAmountOfCoolDinosaurs } = require("../dinosaurs/dinosaurs.js");

// task solve line 5 so it gives the correct number
router.get("/calculatecooldinosaurs", (req, res) => {
    res.send({ data: calculateAmountOfCoolDinosaurs() });
});

router.get("/amountofcooldinosaurs", (req, res) => {
    res.redirect("/calculatecooldinosaurs");
});

router.get("/coolestdinosaur", (req, res) => {
    if (req.query.cool === "yes") {
        return res.send({ dinosaur: "Mosasaurus" });
    }
    res.send({ dinosaur: "T. Rex" });
});


module.exports = {
    router
};
