const { v4: uuidv4 } = require("uuid");

const users = {
  "calvin.hartman.fake@generic.ca#CSCI3130@Student": {
    id: "1021ba34-58f5-423c-9b96-a12ef2fac1c7",
    first_name: "Calvin",
    last_name: "Hartman",
    email: "calvin.hartman.fake@generic.ca",
  },
  "jason.butler.fake@generic.ca#CSCI3130@Student": {
    id: "34af6eee-0454-4c39-acbf-c799fdd13edb",
    first_name: "Jason",
    last_name: "Butler",
    email: "jason.butler.fake@generic.ca",
  },
  "paul.cornwell.fake@generic.ca#CSCI3130@Student": {
    id: "af4ce6b2-1465-4963-9031-347113438234",
    first_name: "Paul",
    last_name: "Cornwell",
    email: "paul.cornwell.fake@generic.ca",
  },
};

/**
 * @author Harsh Shah
 * @description
 * @params first_name, last_name, email, password
 * @return user_id
 */
const registerUser = async (first_name, last_name, email, password) => {
  if (!first_name || !last_name || !email || !password) {
    return {
      status: "ERROR",
      error_code: "INVALID_REQUEST",
      message:
        "Following fields are required [first_name, last_name, email, password]",
    };
  }

  return { status: "SUCCESS", data: { id: uuidv4() } };
};

/**
 * @author Harsh Shah
 * @description
 * @params email, password
 * @return token
 */
const authenticateUser = async (email, password) => {
  console.log(email, password);

  if (!email || !password) {
    return {
      status: "ERROR",
      error_code: "INVALID_CREDENTIALS",
      message: "Either email or password is incorrect",
    };
  }

  const userKey = `${email}#${password}`;
  const user = users[userKey];

  if (!user) {
    return {
      status: "ERROR",
      error_code: "INVALID_CREDENTIALS",
      message: "Either email or password is incorrect",
    };
  }

  const userToken = JSON.stringify({
    user_id: user["id"],
    salt: uuidv4(),
  });
  return {
    status: "SUCCESS",
    data: {
      token: btoa(userToken),
    },
  };
};

/**
 * @author Harsh Shah
 * @description
 * @params user_id
 * @return user details
 */
const getUser = async (user_id) => {
  if (!user_id) {
    return {
      status: "ERROR",
      error_code: "INVALID_REQUEST",
      message: "Failed to determine the user",
    };
  }

  const selectedUsers = Object.entries(users).filter(
    ([_, user]) => user["id"] === user_id
  );

  if (!selectedUsers || selectedUsers.length !== 1){
    return {
      status: "ERROR",
      error_code: "INVALID_REQUEST",
      message: "Failed to get user details",
    };
  }

  const [_, user] = selectedUsers[0];

  return { status: "SUCCESS", data: user };
};

module.exports = {
  UserService: {
    registerUser,
    authenticateUser,
    getUser,
  },
};
