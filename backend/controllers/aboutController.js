const About = require("../models/About");

exports.getAbout = async (req, res) => {
  const data = await About.findOne();
  res.json(data);
};

exports.updateAbout = async (req, res) => {
  const updated = await About.findOneAndUpdate({}, req.body, { new: true, upsert: true });
  res.json(updated);
};
