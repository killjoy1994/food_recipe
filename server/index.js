const express = require("express");
const app = express();
require("dotenv").config();
const PORT = 4000;
const mongoose = require("mongoose");
const connectDB = require("./config/connectDB");

// Connect to DB
connectDB();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/users", require("./routes/auth"));

mongoose.connection.once("open", () => {
  console.log("Connected to mongodb");
  app.listen(PORT, () => console.log("Server listen to port: ", PORT));
});
