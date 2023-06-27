const WHITELIST_URL = new Set([
  "POST_/.netlify/functions/app/app/user/authenticate",
  "POST_/.netlify/functions/app/app/user/register",
  "GET_/.netlify/functions/app/",
  "GET_/.netlify/functions/app",
]);

const UNAUTHORIZED_MESSAGE = {
  status: "ERROR",
  error_code: "UNAUTHORIZED_ACCESS",
  message:
    "You are trying to access the unauthorized resource. Incident has been reported",
};

const jwtInterceptor = async (req, res, next) => {
  const url = req.originalUrl;
  const method = req.method;
  const apiKey = `${method}_${url}`;

  if (WHITELIST_URL.has(apiKey)) {
    return next();
  }

  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json(UNAUTHORIZED_MESSAGE);
  }

  const parts = token.split(" ");
  if (parts.length != 2) {
    return res.status(401).json(UNAUTHORIZED_MESSAGE);
  }

  const payload = JSON.parse(atob(parts[1].trim()));

  req.user_id = payload["user_id"];
  return next();
};

module.exports = jwtInterceptor;
