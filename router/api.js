const express = require("express");
const apiHandlerNotFound = require("../middleware/api-handler-not-found");
const api = express.Router();
const users = [];

//skeleton API CRUD User
api.get("/users", (req, res) => {
  res.status(200).json({
    status: "succes",
    message: "Data list Users",
    data: users,
  });
});
api.post("/users", (req, res) => {
  const { name, email, password } = req.body;
  const newUSer = {
    id: users.length + 1,
    name,
    email,
    password,
  };
  users.push(newUSer);
  res.status(201).json({
    status: "succes",
    message: "Data Users berhasil di buat",
    data: newUSer,
  });
});
api.patch("/users/:id", (req, res) => {});
api.delete("/users/:id", (req, res) => {});

api.use(apiHandlerNotFound);

module.exports = api;
