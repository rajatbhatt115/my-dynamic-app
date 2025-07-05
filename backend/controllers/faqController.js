const FAQ = require("../models/FAQ");

exports.getFAQs = async (req, res) => {
  const data = await FAQ.find();
  res.json(data);
};

exports.addFAQ = async (req, res) => {
  const faq = await FAQ.create(req.body);
  res.json(faq);
};

exports.updateFAQ = async (req, res) => {
  const updated = await FAQ.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteFAQ = async (req, res) => {
  await FAQ.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
