const { WorkspaceService } = require("../services/workspace_services");

const createWorkspace = async (req, res) => {
  const { workspace_name } = req.body;
  const response = await WorkspaceService.createWorkspace(workspace_name);
  const { status } = response;
  res.status(status === "SUCCESS" ? 201 : 400).json(response);
};

const getWorkspace = async (req, res) => {
  console.log(req.params)
  const workspace_id = req.params["workspace_id"];
  const response = await WorkspaceService.getWorkspace(workspace_id);
  const { status } = response;
  res.status(status === "SUCCESS" ? 200 : 400).json(response);
};

module.exports = {
  WorkspaceController: {
    createWorkspace,
    getWorkspace,
  },
};
