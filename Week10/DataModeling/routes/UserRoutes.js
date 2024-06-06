const express = require("express");
const {
  createUser,
  getAllUsers,
  getUser,
} = require("../controllers/UserController");
const router = express.Router();

router.post("/", createUser);
router.get("/", getAllUsers);
//we created getUser to work with the email
router.get("/:email", getUser);

module.exports = router;
