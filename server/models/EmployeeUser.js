const mongoose = require("mongoose");


const employeeSchema = new mongoose.Schema({

name:{
type:String,
required:true
},


fname:{
type:String,
required:true
},


cnic:String,
contact:String,


state:String,

type:String,

status: {
  type: String,
  default: "pending",
},

rejectMessage: {
  type: String,
  default: "",
},

notificationRead: {
  type: Boolean,
  default: true,
},

// employee fields

salary:{
type:Number,
default:0
},

adv:{
type:Number,
default:0
},

balance:{
type:Number,
default:0
},



// DRIVER FIELDS

trailerPrice:{
type:Number,
default:0
},


trailerNo:{
type:Number,
default:0
},


totalMoney:{
type:Number,
default:0
},


diesel:{
type:Number,
default:0
},


advance:{
type:Number,
default:0
}


});


module.exports = mongoose.model(
"EmployeeUser",
employeeSchema
);