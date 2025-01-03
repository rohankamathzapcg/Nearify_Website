const router = require("express").Router();
const userController = require("../controllers/userController");

/* Public Routes */
router.post("/", userController.registerUser);
router.get("/", userController.loginUser);

module.exports = router;