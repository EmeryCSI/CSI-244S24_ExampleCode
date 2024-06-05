//bring in router from express
const router = require("express").Router();
//bring in our user controller
const userController = require("../controllers/userController");

// Define the routes for user registration and login
router.post("/register", userController.register);
router.post("/login", userController.login);

module.exports = router;
