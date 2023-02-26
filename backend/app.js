const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const indexRouter = require("./routes/index");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(morgan("dev"));

app.use(helmet());

//Routes
app.use("/", indexRouter);

module.exports = app;
