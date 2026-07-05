const mongoose = require("mongoose");

const expenditureSchema = new mongoose.Schema(
  {
    Name: String,
    Details: String,
    Amounts: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Expenditure", expenditureSchema);