/**
 * @author Harsh Shah
 * @description
 * @params first_name, last_name, email_address, password
 * @return user_id
 */
const authenticateUser = ({ email, password }) => {
  console.log(email, password);
  if (email === "csci.3130.fake@dal.ca" && password === "CSCI3130@Student") {
    const userToken = JSON.stringify({ userId: userIds[0], salt: uuidv4() });
    return returnResponse({
      statusCode: 200,
      body: JSON.stringify({
        status: "SUCCESS",
        data: {
          token: btoa(userToken),
        },
      }),
    });
  }
};

const service = {
  authenticateUser,
};

module.exports = { UserService: service };
