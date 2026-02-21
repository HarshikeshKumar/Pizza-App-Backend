const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is required"],
      minlength: [5, "First name must be atleast 5 characters long"],
      lowercase: true,
      trim: true,
      maxlength: [
        20,
        "First name should be less than or equal to 20 characters",
      ],
    },

    lastName: {
      type: String,
      required: [true, "Last name is required"],
      minlength: [5, "Last name must be atleast 5 characters long"],
      lowercase: true,
      trim: true,
      maxlength: [
        20,
        "Last name should be less than or equal to 20 characters",
      ],
    },

    mobileNumber: {
      type: String,
      trim: true,
      minlength: [10, "Phone number should of length 10"],
      maxlength: [10, "Phone number should be of length 10"],
      unique: [true, "Phone number is already in use"],
      required: [true, "Phone Number should be provided"],
    },

    email: {
      type: String,
      trim: true,
      required: [true, "Email should be provided"],
      unique: [true, "Email is already in use"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },

    password: {
      type: String,
      required: [true, "Password should be provided"],
      minlength: [6, "Password should be minimum 6 characters long"],
    },
  },
  {
    timestamps: true,
  }, // crratedAt and updatedAt
);

// Abb iska use krke collection banayenge, aur iss collection ko mongoose me Model kahte hai.............
const User = mongoose.model("User", userSchema); // collection

module.exports = User;
