const mongoose = require("mongoose");

const ContactBannerSchema = new mongoose.Schema({
  heading: String,
  description: String,
  image: String
})

module.exports = mongoose.model("ContactBanner", ContactBannerSchema);