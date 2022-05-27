const user = require("express").Router();
const moment = require("moment");
const User = require("../models/user");

user.get("/", async (req, res) => {
  // get all users
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
});

user.post("/", async (req, res) => {
  // create new user
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
});

module.exports = user;
