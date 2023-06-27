const { UserService } = require("../services/user_services");

const authenticateUser = async (req, res) => {
  const response = await UserService.authenticateUser(req.body);
  const { status } = response;
  res.status(status === "SUCCESS" ? 200 : 400).json(response);
};

module.exports = {
  UserController: {
    authenticateUser,
  },
};
