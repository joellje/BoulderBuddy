const catchAsync = require("../utils/catchAsync");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/userModel");
require("dotenv").config();

exports.isLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
};

passport.use(User.createStrategy());
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
    async function (accessToken, refreshToken, profile, cb) {
      User.findOrCreate(
        { googleId: profile.id, username: profile.id },
        function (err, user) {
          return cb(err, user);
        }
      );
    }
  )
);

exports.authenticate = passport.authenticate("google", { scope: ["profile"] });

exports.authenticateCallback = passport.authenticate("google", {
  failureRedirect: "http://localhost:5000/auth/failure",
});

exports.redirect = catchAsync(async (req, res, next) => {
  res.redirect("http://localhost:5000/auth/success");
});

exports.logout = (req, res, next) => {
  res.status(200).json("Logged Out Page");
};

exports.getAuthPage = catchAsync(async (req, res, next) => {
  res.status(200).json("Index Page");
});
exports.getSuccessPage = catchAsync(async (req, res, next) => {
  res.status(200).json("Success Page");
});
exports.getFailurePage = catchAsync(async (req, res, next) => {
  res.status(200).json("Failure Page");
});
exports.getLoggedoutPage = catchAsync(async (req, res, next) => {
  res.status(200).json("Logged Out Page");
});
