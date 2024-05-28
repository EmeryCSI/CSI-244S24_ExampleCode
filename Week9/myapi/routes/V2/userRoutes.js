const express = require("express");
const router = express.Router();
//bring in the V2 controller
const userController = require("../../controllers/V2/userController");

//now we define the routes
router.get("/users", userController.getUsers);

module.exports = router;
