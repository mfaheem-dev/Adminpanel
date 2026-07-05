const Expenditure = require("../models/Expenditure");

// Add
exports.addExpenditure = async (req, res) => {
  try {
    const data = new Expenditure(req.body);
    await data.save();

    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get
exports.getExpenditures = async (req, res) => {
  try {
    const data = await Expenditure.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Update
exports.updateExpenditure = async (req, res) => {
  try {
    const data = await Expenditure.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Delete
exports.deleteExpenditure = async (req, res) => {
  try {
    await Expenditure.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};