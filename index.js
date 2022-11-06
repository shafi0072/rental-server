// dependesis
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// express app init
const app = express();
app.use(express.json());
app.use(cors());

// route called
const rentalRoute = require("./Router/rental");

// application Router
app.use("/rent", rentalRoute);


// DB connect with mongoose
mongoose
  .connect(
    `mongodb+srv://depthSearch:${process.env.db_password}@cluster0.hmzjmgz.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("App is connected successfully"))
  .catch((err) => console.log(err));

// default error handler
function errorHandler(err, req, res, next) {
  if (req.headerSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

// server start
app.listen(process.env.DEV_PORT, () => {
  console.log(`the server is running on port number ${process.env.DEV_PORT}`);
});
