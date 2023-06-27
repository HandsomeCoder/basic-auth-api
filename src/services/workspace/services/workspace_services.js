const { v4: uuidv4 } = require("uuid");

const workspaces = [
  {
    id: "1021ba34-58f5-423c-9b96-a12ef2fac1c7",
    first_name: "Calvin",
    last_name: "Hartman",
    email: "calvin.hartman.fake@generic.ca",
  },
  {
    id: "34af6eee-0454-4c39-acbf-c799fdd13edb",
    first_name: "Jason",
    last_name: "Butler",
    email: "jason.butler.fake@generic.ca",
  },
  {
    id: "af4ce6b2-1465-4963-9031-347113438234",
    first_name: "Paul",
    last_name: "Cornwell",
    email: "paul.cornwell.fake@generic.ca",
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

module.exports = {
  WorkspaceService: {
    createWorkspace,
    getWorkspace,
  },
};
