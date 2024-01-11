const express = require("express");
const router = express.Router();

const authControler = require("../contoller/auth_controller");

router.route("/").get(authControler.home);

router.route("/items").get(authControler.items);

router;

module.exports = router;
