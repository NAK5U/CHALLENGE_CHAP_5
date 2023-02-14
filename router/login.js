const express = require("express");
const pasport = require("../middleware/pasport");
const login = express.Router();

login.post("/", [pasport], (req, res) => {
  res.render("game");
});

module.exports = login;
