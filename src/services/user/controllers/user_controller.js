const { UserService } = require("../services/user_services");

const registerUser = async (req, res) => {
  const { first_name, last_name, email_address, password } = req.body;
  const response = await UserService.registerUser(
    first_name,
    last_name,
    email_address,
    password
  );
  const { status } = response;
  res.status(status === "SUCCESS" ? 201 : 400).json(response);
};

const authenticateUser = async (req, res) => {
  const { email, password } = req.body;
  const response = await UserService.authenticateUser(email, password);
  const { status } = response;
  res.status(status === "SUCCESS" ? 200 : 400).json(response);
};

const getAuthenticateUser = async (req, res) => {
  const { user_id } = req;
  const response = await UserService.getUser(user_id);
  res.status(200).json(response);
};

module.exports = {
  UserController: {
    registerUser,
    authenticateUser,
    getAuthenticateUser
  },
};
