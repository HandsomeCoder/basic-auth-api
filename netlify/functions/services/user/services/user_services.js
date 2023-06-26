const { v4: uuidv4 } = require("uuid");

const userIds = [
  "1021ba34-58f5-423c-9b96-a12ef2fac1c7",
  "34af6eee-0454-4c39-acbf-c799fdd13edb",
  "3c5eda39-d8c7-40d6-9cff-7ab319bce5f1",
  "af4ce6b2-1465-4963-9031-347113438234",
  "51313f33-86f9-4f43-bce8-d3d371e89c95",
  "7827760b-1ca4-4fad-981c-ca0864103618",
  "e44ec431-7e35-4a91-9717-ad179dd338f0",
  "ff538d3a-c555-4faf-8f67-1fad557d06bb",
  "9b06f85f-ec4e-48e9-9442-ca90a86631ce",
  "a39141f5-9fa3-410b-a319-90987d1d2dd3",
];

/**
 * @author Harsh Shah
 * @description
 * @params first_name, last_name, email_address, password
 * @return user_id
 */
const authenticateUser = async ({ email, password }) => {
  console.log(email, password);
  if (email === "csci.3130.fake@dal.ca" && password === "CSCI3130@Student") {
    const userToken = JSON.stringify({ userId: userIds[0], salt: uuidv4() });
    return {
      status: "SUCCESS",
      data: {
        token: btoa(userToken),
      },
    };
  }

  return {
    status: "ERROR",
    error_code: "INVALID_CREDENTIALS",
    message: "Either email or password is incorrect",
  };
};

const service = {
  authenticateUser,
};

module.exports = { UserService: service };
