const router = require("express").Router();
const pinController = require("../controllers/pinController");

/* Create a Pin */
router.post("/", pinController.createPin);

/* Get All Pins */
router.get("/", pinController.getAllPins);

module.exports = router;