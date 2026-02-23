const UserRepository = require("../repository/userRepository");
const UserService = require("../services/userService");

// STEP:2- USER REGISTRATION..............
async function createUser(req, res) {
  console.log("Create User Controller Called");
  console.log(req.body);

  // TODO: Register the user

  // UserService ka Object --> Ku ki user ko regidter karna kaise hai iska Logic Servive me likha hua hai
  const userService = new UserService(new UserRepository());

  try {
    const response = await userService.registerUser(req.body);

    return res.status(201).json({
      message: "Successfully Registered the user",
      success: true,
      data: response,
      error: {},
    });
  } catch (error) {
    return res.status(error.statusCode).json({
      success: false,
      message: error.reason,
      data: {},
      error: error,
    });
  }
}

module.exports = { createUser };
