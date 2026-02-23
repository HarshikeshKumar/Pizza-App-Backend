const express = require("express");
const { createUser } = require("../controllers/userController");

const userRouter = express.Router();

// STEP:4- USER REGISTRATION.......
userRouter.post("/", createUser);

module.exports = userRouter;
