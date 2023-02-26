const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const routeRouter = require("./routes/route");
const authRouter = require("./routes/auth");
const errorController = require("./controllers/errorController");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(morgan("dev"));

app.use(helmet());

//Routes
app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/routes", routeRouter);
app.use("/auth", authRouter);

app.use(errorController);

module.exports = app;
