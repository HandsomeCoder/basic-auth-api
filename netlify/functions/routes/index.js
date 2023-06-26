const express = require("express");
const router = express.Router();

const userRouter = require("../services/user/routes/user_routes");

router.use("/user", userRouter);

module.exports = router;
