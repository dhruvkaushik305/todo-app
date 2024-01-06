const { Router } = require("express");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const { jwt_password } = require("../config");
const verifyUser = require("../middleware/verifyUser");
const router = Router();
router.get("/signup", verifyUser, (req, res) => {
  User.create({
    email: req.body.email,
    password: req.body.password,
  }).then((success) => {
    // console.log(success);
    res.status(201).json({ msg: "User registered" });
  });
});
router.get("/signin", verifyUser, (req, res) => {
  //check if exists in database
  const user = User.findOne({
    email: req.body.email,
    password: req.body.password,
  }).then((user) => {
    if (user) {
      //user exists
      res
        .status(201)
        .json({ token: jwt.sign({ email: user.email }, jwt_password) });
    } else {
      return res
        .status(401)
        .json({ msg: "User does not exist, please signup!" });
    }
  });
});
module.exports = router;
