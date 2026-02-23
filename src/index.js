const express = require("express");
const serverConfig = require("./config/serverConfig.js");
const connectDB = require("./config/dbConfig.js");
const userRouter = require("./routes/userRoutr.js");
const cartRouter = require("./routes/cartRoute.js");

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

// Routing Middlewares
app.use("/users", userRouter);
app.use("/carts", cartRouter);

app.get("/ping", (req, res) => {
  console.log(req.body);
  return res.json({
    message: "Pong",
  });
});

app.listen(serverConfig.PORT, async () => {
  await connectDB();
  console.log(`Server is Started at PORT: ${serverConfig.PORT}`);

  /* TESTING PURPOSE KE LIYE......
  // DataBase me v Save hoga Sirf Run Krne pe.................
  
  const newUser = await User.create({
    email: "a@d.com",
    password: "123456",
    firstName: "Jonathan",
    lastName: "Majors",
    mobileNumber: "1231231232",
  });
  console.log("Created new User..");
  console.log(newUser);
  */
});
