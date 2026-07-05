const mongoose = require("mongoose");

const homeEntrySchema = new mongoose.Schema(
  {
    company: String,
    city: String,
    contact: String,
    tons: Number,
    tonsRate: Number,
    total: Number,
    received: Number,
    balance: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("HomeEntry", homeEntrySchema);