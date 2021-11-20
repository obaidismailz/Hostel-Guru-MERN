const express = require("express");
const hostel = require("../models/Hostel");
const router = express.Router();
const fetchUser = require("../middleware/fetchuser");
const { hashSync } = require("bcryptjs");

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

  res.json(addedHostel);
});
//this route is used to fetch hostel for a hostel owner
router.get("/fetchhostel", fetchUser, async (req, res) => {
  const hostelOwnerid = req.user.id;

  const hostels = await hostel.find({ hostelOwner: hostelOwnerid });
  console.log(hostels);
  res.json(hostels);
});

router.get("/fetchhostels", async (req, res) => {
  const hostels = await hostel.find();

  res.json(hostels);
});

router.put("/updatehostel/:id", fetchUser, async (req, res) => {
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

  let fetchHostel = await hostel.findById(hostelId);

  console.log(fetchHostel);

  if (!fetchHostel) {
    res.send("Hostel not found");
  }

  console.log(req.user);
  if (fetchHostel.hostelOwner.toString() !== req.user.id) {
    res.send("you are not  allowed to update it");
  }

  fetchHostel = await hostel.findByIdAndUpdate(
    hostelId,
    { $set: newHostel },
    { new: true }
  );

  res.send(fetchHostel);
});

router.delete("/deletehostel/:id", fetchUser, async (req, res) => {
  const hostelId = req.params.id;

  let delHostel = await hostel.findById(hostelId);

  if (!delHostel) {
    res.send("hostel not found");
  }

  if (delHostel.hostelOwner.toString() !== req.user.id) {
    res.send("You are not allowed to  delete this hostel");
  }

  let del = await hostel.findByIdAndDelete(hostelId);

  res.send(del);
});

module.exports = router;
