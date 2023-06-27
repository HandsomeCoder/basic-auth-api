const express = require("express");
const router = express.Router();

const userRouter = require("../services/user/routes/user_routes");
const workspaceRouter = require("../services/workspace/routes/workspace_routes");

router.use("/user", userRouter);
router.use("/workspace", workspaceRouter);

module.exports = router;
