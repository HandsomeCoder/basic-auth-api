// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2

const authenticateUser = ({ email, password }) => {
  console.log(email, password);
  if (email === "csci.3130.fake@dal.ca" && password === "CSCI3130@Student") {
    return {
      statusCode: 200,
      body: JSON.stringify({ token: `Hello ${subject}` }),
    };
  }

  return {
    statusCode: 400,
    body: JSON.stringify({ message: "Either email or password is incorrect" }),
  };
};

const handler = async (event) => {
  const { httpMethod, path } = event;

  console.log(httpMethod, path);

  switch (httpMethod) {
    case "POST":
      if (path === "/.netlify/functions/user/auth") {
        const payload = JSON.parse(event["body"]);
        console.log(payload)
        return authenticateUser(payload);
      } else {
        return {
          statusCode: 400,
          body: JSON.stringify({ message: "Invalid request" }),
        };
      }
    default:
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Invalid request" }),
      };
  }

  try {
    const subject = event.queryStringParameters.name || "World";
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
