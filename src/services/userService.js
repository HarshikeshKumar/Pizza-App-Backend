// STEP2:- USER REGISTRATION........

class UserService {
  constructor(_userRepository) {
    // In the argument we will expect userRepository object
    this.userRepository = _userRepository;
  }

  async registerUser(userDetails) {
    // It will create a brand new user in db.
    // 1. We need to check if the user with this email and mobile number already exists or not
    const user = await this.userRepository.findUser({
      email: userDetails.email,
      mobileNumber: userDetails.mobileNumber,
    });

    // If we found the user
    if (user) {
      throw {
        reason: "User with the given email and mobile number already exist",
        statusCode: 400,
      };
    }

    // 2. If not then create the user in the database
    const newUser = await this.userRepository.createUser({
      email: userDetails.email,
      password: userDetails.password,
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      mobileNumber: userDetails.mobileNumber,
    });

    // Agar kisi wajah se ham user create nhi krr paye...
    if (!newUser) {
      throw {
        reason: "Something went wrong, cannot create user",
        statusCode: 500,
      };
    }
    // 3. Return the details of created user
    return newUser;
  }
}

module.exports = UserService;
