const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");
require("dotenv").config();

router.route("/").get(indexController.getLandingPage);

module.exports = router;
