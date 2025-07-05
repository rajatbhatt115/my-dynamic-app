const express = require("express");
const router = express.Router();
const { getTeam, addTeam, updateTeam, deleteTeam } = require("../controllers/teamController");

router.get("/", getTeam);
router.post("/", addTeam);
router.put("/:id", updateTeam);
router.delete("/:id", deleteTeam);

module.exports = router;
