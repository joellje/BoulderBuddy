const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const session = require("express-session");
const passport = require("passport");
require("dotenv").config();

router.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
router.use(passport.initialize());
router.use(passport.session());

router.route("/").get(authController.isLoggedIn, authController.getAuthPage);
router.route("/success").get(authController.getSuccessPage);
router.route("/failure").get(authController.getFailurePage);
router.route("/loggedout").get(authController.getLoggedoutPage);

router.get("/google", authController.authenticate);

router.get(
  "/google/callback",
  authController.authenticateCallback,
  authController.redirect
);

router.get("/logout", function (req, res) {
  authController.logout;
});

module.exports = router;
