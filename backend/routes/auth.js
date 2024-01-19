const { Router } = require("express");
require("dotenv").config();
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const verifyUser = require("../middleware/verifyUser");
const router = Router();
//These routes will also validate the email and password
router.post("/signup", verifyUser, (req, res) => {
  const user = User.findOne({
    email: req.body.email,
    password: req.body.password,
  }).then((user) => {
    if (user) {
      return res
        .status(401)
        .json({ msg: "User already exists, please signin!" });
    } else {
      User.create({
        email: req.body.email,
        password: req.body.password,
      }).then((success) => {
        // console.log(success);
        res.status(201).json({ msg: "User registered" });
      });
    }
  });
});
router.post("/signin", verifyUser, (req, res) => {
  //check if exists in database
  const user = User.findOne({
    email: req.body.email,
    password: req.body.password,
  }).then((user) => {
    if (user) {
      //user exists
      res.status(201).json({
        token: jwt.sign({ email: user.email }, process.env.jwt_password),
      });
    } else {
      return res
        .status(401)
        .json({ msg: "User does not exist, please signup!" });
    }
  });
});
module.exports = router;
