const express = require("express");
const hostel = require("../models/Hostel");
const router = express.Router();

router.post("/addhostel", async (req, res) => {
  const newHostel = new hostel(req.body);

  const addedHostel = await newHostel.save();

  console.log(addedHostel);
  res.send("hostel added successfully");
});

module.exports = router;
