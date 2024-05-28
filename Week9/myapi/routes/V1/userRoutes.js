const express = require("express");
const router = express.Router();
//bring in the V1 controller
const userController = require("../../controllers/V1/userController");

//now we define the routes
router.get("/users", userController.getUsers);

module.exports = router;
