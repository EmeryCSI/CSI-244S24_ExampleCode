const router = require("express").Router();
//bring in our middleware to verify the token
const verify = require("../middleWares/verifyToken");

// Protected route to get user information
// The verify middleware is used to check if the user is authenticated
router.get("/", verify, (req, res) => {
  res.send(req.user);
});

module.exports = router;
