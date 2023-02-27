const mongoose = require("mongoose");

const routeSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter a name."],
  },
  location: {
    type: String,
    default: "Unknown",
  },
  grade: {
    type: String,
    default: "Unknown",
  },
  status: {
    type: String,
    enum: ["Completed", "Flashed", "Attempted", "Projected", "Unmarked"],
    default: "Unmarked",
  },
  type: {
    type: String,
    enum: ["Slab", "Overhang", "Vertical", "Unmarked"],
    default: "Unmarked",
  },
  imageURL: {
    type: String,
    default: "",
  },
  videoURL: {
    type: String,
    default: "",
  },
  userId: {
    type: String,
  },
  lastUpdatedDate: {
    type: Date,
  },
});

const routeModel = mongoose.model("Route", routeSchema);

module.exports = routeModel;
