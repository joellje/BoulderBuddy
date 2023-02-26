const express = require("express");
const router = express.Router();
const routeController = require("../controllers/routeController");

router.route("/").get(routeController.getRoutePage);

module.exports = router;
