const About = require("../models/AboutpageAbout");

exports.getAboutpageAbout = async (req, res) => {
  const data = await About.findOne();
  res.json(data);
};

exports.updateAboutpageAbout = async (req, res) => {
  const updated = await About.findOneAndUpdate({}, req.body, { new: true, upsert: true });
  res.json(updated);
};
