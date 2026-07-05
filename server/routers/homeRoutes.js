const express = require("express");
const router = express.Router();

const {
  addEntry,
  getEntries,
  deleteEntry,
  updateEntry,
} = require("../controllers/HomeController");

router.post("/add", addEntry);
router.get("/", getEntries);
router.put("/:id", updateEntry);
router.delete("/:id", deleteEntry);

module.exports = router;