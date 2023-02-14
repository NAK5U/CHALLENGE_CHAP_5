const express = require("express");
const webHandlerNotFound = require("../middleware/web-handler-not-found");
const login = require("./login");
const web = express.Router();

web.get("/", (req, res) => {
  res.render("home");
});

web.get("/register", (req, res) => {
  res.render("register");
});
web.get("/main", (req, res) => {
  res.render("main");
});
web.get("/login", (req, res) => {
  res.render("login");
});
web.get("/game", (req, res) => {
  res.render("game");
});

web.use(webHandlerNotFound);
module.exports = web;
