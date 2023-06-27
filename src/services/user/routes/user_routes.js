const express = require("express");
const { UserController } = require("../controllers/user_controller");
const router = express.Router();

router.post("/register", UserController.registerUser);
router.post("/authenticate", UserController.authenticateUser);
router.post("/details", UserController.authenticateUser);

module.exports = router;
