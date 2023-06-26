const express = require("express");
const { UserController } = require("../controller/user_controller");
const router = express.Router();

router.post("/authenticate", UserController.authenticateUser);

module.exports = router;
