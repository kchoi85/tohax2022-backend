const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");
const User = mongoose.model(
  "User",
  new Schema({
    name: String,
    email: String,
    password: String,
    createdAt: {
      type: Date,
      default: moment().format(),
    },
  }),
  "users"
);

module.exports = User;
