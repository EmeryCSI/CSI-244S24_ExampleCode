const express = require("express");
//express has a router object
const router = express.Router();
//bring in the methods from the UserController
const userController = require("../controllers/UserController");

//now we define our routes
router.get("/:id", userController.getUser);
router.get("/", userController.getAllUsers);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

//We export the router
module.exports = router;
