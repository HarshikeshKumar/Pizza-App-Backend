const express = require("express");
const serverConfig = require("./config/serverConfig.js");
const connectDB = require("./config/dbConfig.js");

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.get("/ping", (req, res) => {
  console.log(req.body);
  return res.json({
    message: "Pong",
  });
});

app.listen(serverConfig.PORT, async () => {
  await connectDB();
  console.log(`Server is Started at PORT: ${serverConfig.PORT}`);
});
