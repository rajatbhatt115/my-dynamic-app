const mongoose = require("mongoose");

const AboutBannerSchema = new mongoose.Schema({
  heading: String,
  description: String,
  image: String
});

module.exports = mongoose.model("AboutBanner", AboutBannerSchema);
