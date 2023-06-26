const { UserService } = require("../services/user_services");

const authenticateUser = async (req, res) => {
  const response = await UserService.authenticateUser(req.body);
  res.status(200).json(response);
};

const controller = {
  authenticateUser,
};

module.exports = { UserController: controller };
