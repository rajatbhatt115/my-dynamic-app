const AboutBanner = require("../models/AboutBanner");

exports.getAboutBanner = async (req, res) => {
  const data = await AboutBanner.findOne();
  res.json(data);
};

exports.updateAboutBanner = async (req, res) => {
  const updated = await AboutBanner.findOneAndUpdate({}, req.body, { new: true, upsert: true });
  res.json(updated);
};
