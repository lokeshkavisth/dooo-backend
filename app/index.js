const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connectToMongo } = require("./config/database");
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

//routes
app.use("/todos", require("./routes/routes"));

// connect to mongo
connectToMongo();

app.listen(PORT, () => console.log(`Running on port http://localhost:${PORT}`));
