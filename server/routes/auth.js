const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
const JWT_SECRET = "asimisagoodboy";

//for sign up
router.post(
  "/createuser",
  [
    body("email", "enter a valid email").isEmail(),
    body("name", "enter a valid name").isLength({ min: 3 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPass = await bcrypt.hash(req.body.password, salt);

    try {
      let newUser = await User.findOne({ email: req.body.email });

      if (newUser) {
        res.send("this user  is  already exists");
      } else {
        newUser = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: secPass,
        });
        const data = {
          user: {
            id: newUser._id,
          },
        };
        const authToken = await jwt.sign(data, JWT_SECRET);
        console.log(authToken);

        let success;

        if (!newUser) {
          success = false;

          alert("some thing went wrong");
        } else {
          success = true;
          res.json({ newUser, authToken, success });
        }
      }
    } catch (error) {
      res.status(500).send("some thing went wrong");
    }
  }
);

module.exports = router;
