//bring in JWT
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  // Get the token from the request header
  // The token is stored in the header with the key "auth-token
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access denied");

  try {
    // Verify the token
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    // Add the verified user to the request object
    req.user = verified;
    // Call the next middleware
    next();
  } catch (err) {
    res.status(400).send("Invalid token");
  }
};
