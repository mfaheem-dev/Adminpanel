const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  fatherName: String,
  cnic: String,
  email: String,
  contact: String,
  state: String,
  province: String,
  district: String,
  username:{
 type:String,
 unique:true
},
  password: String,
});

module.exports = mongoose.model("User", userSchema);