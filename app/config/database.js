const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const URI = process.env.URI;
const app = express();
app.use(express.json());

const connectToMongo = async () => {
  try {
    mongoose.connect(URI);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = {
  connectToMongo,
};
