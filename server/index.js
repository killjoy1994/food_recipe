const express = require("express");
const app = express();
require("dotenv").config();
const PORT = 4000;
const mongoose = require("mongoose");
const connectDB = require("./config/connectDB");
const cors = require("cors");

// Connect to DB
connectDB();

//middleware
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));

// routes
app.use("/users", require("./routes/auth"));
app.use("/recipes", require("./routes/recipes"));

mongoose.connection.once("open", () => {
  console.log("Connected to mongodb");
  app.listen(PORT, () => console.log("Server listen to port: ", PORT));
});
