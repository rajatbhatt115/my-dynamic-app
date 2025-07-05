const Team = require("../models/Team");

exports.getTeam = async (req, res) => {
  const data = await Team.find();
  res.json(data);
};

exports.addTeam = async (req, res) => {
  const member = await Team.create(req.body);
  res.json(member);
};

exports.updateTeam = async (req, res) => {
  const updated = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteTeam = async (req, res) => {
  await Team.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
