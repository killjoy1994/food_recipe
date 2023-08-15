const User = require("../model/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signinController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    //check if user with email is exists
    if (!user) return res.status(401).json({ message: "Invalid user!" });
    //check if the password match
    const isMatchPassword = await bcrypt.compare(password, user.password);
    if (!isMatchPassword) return res.status(401).json({ message: "Password is invalid!" });

    const token = await jwt.sign({ email: user.email, id: user._id }, process.env.SECRET_KEY, { expiresIn: "1h" });
    res.status(200).json({ result: user, token });
  } catch (error) {
    console.log(error);
  }
};
const signupController = async (req, res) => {
  const { email, password, firstname, lastname } = req.body;

  console.log("KEY: ", process.env.SECRET_KEY);
  try {
    const user = await User.findOne({ email });
    if (user) {
      res.status(409).json({ message: "User already exist!" });
    }

    const hashedPwd = await bcrypt.hash(password, 12);
    await User.create({ email, firstname, lastname, password: hashedPwd });
    res.status(201).json({ message: "Successfully create the user!" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signinController, signupController };
