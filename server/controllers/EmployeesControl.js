const EmployeeUser = require("../models/EmployeeUser");


// ADD
exports.addEmployee = async(req,res)=>{

try{

const user = new EmployeeUser(req.body);

await user.save();

res.json({
 success:true,
 message:"Saved Successfully"
});


}catch(error){

res.status(500).json({
 success:false,
 message:error.message
});

}

};




// GET TYPE
exports.getByType = async(req,res)=>{

try{

const users = await EmployeeUser.find({
 type:req.params.type
});


res.json(users);


}catch(error){

res.status(500).json(error);

}

};




// DELETE
exports.deleteEmployee = async(req,res)=>{

try{

await EmployeeUser.findByIdAndDelete(req.params.id);


res.json({
success:true
});


}catch(error){

res.status(500).json(error);

}

};




// UPDATE
exports.updateEmployee = async(req,res)=>{
    console.log(req.body);

try{

const user = await EmployeeUser.findByIdAndUpdate(
req.params.id,
req.body,
{
new:true
}
);
 console.log(user);

res.json(user);


}catch(error){

res.status(500).json(error);

}

};

exports.acceptEmployee = async (req, res) => {
  try {
    const user = await EmployeeUser.findByIdAndUpdate(
      req.params.id,
      {
        status: "accepted",
        rejectMessage: "",
        notificationRead: true,
      },
      { new: true }
    );

    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};
exports.rejectEmployee = async (req, res) => {
  try {
    const { message } = req.body;

    const user = await EmployeeUser.findByIdAndUpdate(
      req.params.id,
      {
        status: "rejected",
        rejectMessage: message,
        notificationRead: false,
      },
      { new: true }
    );

    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};
exports.getNotifications = async (req, res) => {
  try {
    const users = await EmployeeUser.find({
      notificationRead: false,
    });

    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};
exports.readNotification = async (req, res) => {
  try {
    await EmployeeUser.findByIdAndUpdate(req.params.id, {
      notificationRead: true,
    });

    res.json({
      success: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};