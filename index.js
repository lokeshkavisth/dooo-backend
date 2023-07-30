const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connectToMongo } = require("./app/config/database");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

//routes
app.use("/todos", require("./app/routes/routes"));

// connect to mongo
connectToMongo();

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
