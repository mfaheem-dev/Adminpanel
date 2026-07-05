const express = require("express");
const router = express.Router();

const {
  addExpenditure,
  getExpenditures,
  updateExpenditure,
  deleteExpenditure,
} = require("../controllers/ExpenditureController");

router.post("/add", addExpenditure);

router.get("/", getExpenditures);

router.put("/:id", updateExpenditure);

router.delete("/:id", deleteExpenditure);

module.exports = router;