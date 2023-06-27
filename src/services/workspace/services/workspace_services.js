const { v4: uuidv4 } = require("uuid");

const workspaces = [
  {
    id: "218ba941-de37-4ea8-bfe3-5eb928fb9563",
    name: "CSCI 3130",
    created_by: "1021ba34-58f5-423c-9b96-a12ef2fac1c7",
    created_on: "2023-06-1T03:10:20.939Z",
  },
  {
    id: "01d0b425-4fb7-4975-b6f7-a0e80d9da6d7",
    name: "CSCI 5308",
    created_by: "34af6eee-0454-4c39-acbf-c799fdd13edb",
    created_on: "2023-06-10T03:10:20.939Z",
  },
  {
    id: "25da94cf-336e-4f18-9e31-07526c70dc83",
    name: "CSCI 1170",
    created_by: "af4ce6b2-1465-4963-9031-347113438234",
    created_on: "2023-06-15T03:10:20.939Z",
  },
];

/**
 * @author Harsh Shah
 * @description
 * @params workspace_name
 * @return workspace_id
 */
const createWorkspace = async (workspace_name) => {
  console.log(workspace_name);

  if (!workspace_name) {
    return {
      status: "ERROR",
      error_code: "INVALID_REQUEST",
      message: "Following fields are required [workspace_name]",
    };
  }

  return { status: "SUCCESS", data: { id: uuidv4() } };
};

/**
 * @author Harsh Shah
 * @description
 * @params workspace_id
 * @return workspace details
 */
const getWorkspace = async (workspace_id) => {
  console.log(workspace_id);

  if (!workspace_id) {
    return {
      status: "ERROR",
      error_code: "INVALID_REQUEST",
      message: "Failed to determine the workspace",
    };
  }

  const workspace = workspaces.filter(
    (workspace) => workspace["id"] === workspace_id
  );

  if (!workspace) {
    return {
      status: "ERROR",
      error_code: "INVALID_REQUEST",
      message: "Failed to determine the workspace",
    };
  }

  return {
    status: "SUCCESS",
    data: workspace,
  };
};

/**
 * @author Harsh Shah
 * @description
 * @params workspace_id
 * @return workspace details
 */
const getWorkspaces = async () => {
  return {
    status: "SUCCESS",
    data: workspaces,
  };
};

module.exports = {
  WorkspaceService: {
    createWorkspace,
    getWorkspaces,
    getWorkspace,
  },
};
