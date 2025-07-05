const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
  title: String,
  para1: String,
  para2: String,
  image: String
});

module.exports = mongoose.model("AboutpageAbout", aboutSchema);
