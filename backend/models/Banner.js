const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema({
  heading: String,
  description: String,
  image: String
});

module.exports = mongoose.model("Banner", bannerSchema);
