const jwt = require("jsonwebtoken");

const verifyJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      console.log("DECODED", decoded);
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

module.exports = verifyJwt