// dependencies
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

// app config middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/v1/users", require("./routes/user"));

// mongoose config
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// start server
app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
