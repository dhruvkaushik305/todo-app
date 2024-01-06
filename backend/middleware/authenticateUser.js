const { jwt_password } = require("../config");
const jwt = require("jsonwebtoken");
const { User } = require("../db");
module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  //   console.log(token);

  try {
    const user = jwt.verify(token, jwt_password);
    User.findOne({
      email: user.email,
    }).then((user) => {
      if (user) {
        req.email = user.email;
        next();
      } else {
        return res.json("Wrong token!");
      }
    });
  } catch (err) {
    console.log(err);
    return res.json({ msg: "we couldn't verify the token" });
  }
};
