const express = require("express");
const hostel = require("../models/Hostel");
const router = express.Router();
const fetchUser = require("../middleware/fetchuser");

router.post("/addhostel", fetchUser, async (req, res) => {
  const {
    hostelName,
    hostelAddress,
    hostelPhone,
    hostelCity,
    hostelNoOfRooms,
  } = req.body;

  const newHostel = new hostel({
    hostelName,
    hostelAddress,
    hostelPhone,
    hostelCity,
    hostelNoOfRooms,
    hostelOwner: req.user.id,
  });

  const addedHostel = await newHostel.save();

  res.send(addedHostel);
});

router.get("/fetchhostels", async (req, res) => {
  const hostels = await hostel.find();

  res.json(hostels);
});

router.put("/updatehostel/:id", async (req, res) => {
  const hostelId = req.params.id;

  const {
    hostelName,
    hostelAddress,
    hostelPhone,
    hostelCity,
    hostelNoOfRooms,
  } = req.body;

  let newHostel = {};
  if (hostelName) {
    newHostel.hostelName = hostelName;
  }
  if (hostelAddress) {
    newHostel.hostelAddress = hostelAddress;
  }
  if (hostelPhone) {
    newHostel.hostelPhone = hostelPhone;
  }
  if (hostelCity) {
    newHostel.hostelCity = hostelCity;
  }
  if (hostelNoOfRooms) {
    newHostel.hostelNoOfRooms = hostelNoOfRooms;
  }
});

module.exports = router;
