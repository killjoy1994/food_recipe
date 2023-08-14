const express = require("express");
const app = express();
require("dotenv").config();
const PORT = 4000;
const mongoose = require("mongoose");
const connectDB = require("./config/connectDB");

// Connect to DB
connectDB();

app.get("/test", (req, res) => {
  res.json({ message: "test" });
});

mongoose.connection.once("open", () => {
  console.log("Connected to mongodb");
  app.listen(PORT, () => console.log("Server listen to port: ", PORT));
});
