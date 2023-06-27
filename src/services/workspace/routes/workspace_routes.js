const express = require("express");
const { WorkspaceController } = require("../controllers/workspace_controller");
const router = express.Router();

router.post("/", WorkspaceController.createWorkspace);
router.get("/", WorkspaceController.getWorkspace);

module.exports = router;
