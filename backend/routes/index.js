const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");
const authController = require("../controllers/authController");
const session = require("express-session");
const passport = require("passport");

router.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
router.use(passport.initialize());
router.use(passport.session());

router.route("/").get(authController.isLoggedIn, indexController.getIndexPage);

module.exports = router;
