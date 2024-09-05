require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { apiRouter } = require("./routes");
const { dbconnection } = require("./config/dbConnection");
const cookieParser = require("cookie-parser");
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(cookieParser())

app.use('/api', apiRouter)

// database connection
dbconnection()

// Created server
app.listen(port, () => {
  console.log(`The server running on port: ${port}`);
});
