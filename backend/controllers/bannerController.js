const Banner = require("../models/Banner");

exports.getBanner = async (req, res) => {
  const data = await Banner.findOne();
  res.json(data);
};

exports.updateBanner = async (req, res) => {
  const updated = await Banner.findOneAndUpdate({}, req.body, { new: true, upsert: true });
  res.json(updated);
};
