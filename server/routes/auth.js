const express = require("express");

const router = express.Router();

router.get("/user", (req, res) => {
  res.send("Welcome to new user");
});

module.exports = router;
