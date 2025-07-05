const ContactBanner = require("../models/ContactBanner");

exports.getContactBanner = async (req, res) => {
  const data = await ContactBanner.findOne();
  res.json(data);
};

exports.updateContactBanner = async (req, res) => {
  const updated = await ContactBanner.findOneAndUpdate({}, req.body, { new: true, upsert: true });
  res.json(updated);
};
