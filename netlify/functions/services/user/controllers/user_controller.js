const { UserService } = require("../services/user_service");

const authenticateUser = async (req, res, next) => {
  const response = await UserService.authenticateUser(req.body);
  res.status(201).json(response);
};

const controller = {
  authenticateUser,
};

module.exports = { UserController: controller };
