const express = require("express");
const { UserController } = require("../controllers/user_controller");
const router = express.Router();

router.post("/register", UserController.registerUser);
router.post("/authenticate", UserController.authenticateUser);
router.get("/authenticate", UserController.getAuthenticateUser);

module.exports = router;
