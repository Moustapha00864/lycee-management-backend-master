const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  // Add other relevant fields like year, subjects offered etc.
});

module.exports = mongoose.model("Class", ClassSchema);
