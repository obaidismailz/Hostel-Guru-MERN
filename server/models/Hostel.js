const mongoose = require("mongoose");

const hostelSchema = new mongoose.Schema({
  hostelName: {
    type: String,
    required: true,
  },
  hostelAddress: {
    type: String,
    required: true,
  },
  hostelPhone: {
    type: String,
    required: true,
  },
  hostelCity: {
    type: String,
    required: true,
  },
  hostelNoOfRooms: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const hostel = mongoose.model("hostels", hostelSchema);

module.exports = hostel;
