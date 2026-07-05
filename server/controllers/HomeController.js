const HomeEntry = require("../models/HomeEntry");

// Add
exports.addEntry = async (req, res) => {
  try {
    const data = new HomeEntry(req.body);
    await data.save();

    res.json({
      success: true,
      message: "Saved Successfully",
      data,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get All
exports.getEntries = async (req, res) => {
  try {
    const data = await HomeEntry.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Delete
exports.deleteEntry = async (req, res) => {
  try {
    await HomeEntry.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

// Update
exports.updateEntry = async (req, res) => {
  try {
    const data = await HomeEntry.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};