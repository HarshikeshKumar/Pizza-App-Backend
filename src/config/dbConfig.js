const mongoose = require("mongoose");

const serverConfig = require("./serverConfig.js");

async function connectDB() {
  try {
    await mongoose.connect(serverConfig.DB_URL);
    console.log("Successfully connected to the MongoDB");
  } catch (error) {
    console.log(error);
    console.log("Not able to connect to DB...");
  }
}

module.exports = connectDB;
