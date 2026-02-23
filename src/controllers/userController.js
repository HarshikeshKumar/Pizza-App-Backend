function createUser(req, res) {
  console.log("Create User Controller Called");
  console.log(req.body);

  // TODO: Register the user

  return res.json({
    message: "OK",
  });
}

module.exports = { createUser };
