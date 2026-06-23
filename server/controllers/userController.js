const User = require("../models/User");

// Get all contractors
const getContractors = async (req, res) => {
  try {
    const contractors = await User.find({ state: "Contractor" });

    res.status(200).json(contractors);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get single contractor
const getContractorById = async (req, res) => {
  try {
    const contractor = await User.findById(req.params.id);

    res.status(200).json(contractor);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get all clerk

const getClerks = async (req, res) => {
  try {
    const clerks = await User.find({ state: "Clerk" });

    res.status(200).json(clerks);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get single clerk
const getClerkById = async (req, res) => {
  try {
    const clerk = await User.findById(req.params.id);

    res.status(200).json(clerk);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get all managers
const getManagers = async (req, res) => {
  try {
    const managers = await User.find({ state: "Manager" });

    res.status(200).json(managers);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get single manager
const getManagerById = async (req, res) => {
  try {
    const manager = await User.findById(req.params.id);

    res.status(200).json(manager);
  } catch (error) {
    res.status(500).json(error);
  }
};
// Delete Any User
const deleteUser = async(req,res)=>{
  try{

    const user = await User.findById(req.params.id);

    if(!user){
      return res.status(404).json({
        message:"User not found"
      });
    }


    await User.findByIdAndDelete(req.params.id);


    res.json({
      success:true,
      message:user.state+" Deleted"
    });


  }catch(error){
    res.status(500).json(error);
  }
};



// Update Any User
const updateUser = async(req,res)=>{
  try{

    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true}
    );


    res.json({
      success:true,
      message:"User Updated",
      user
    });


  }catch(error){
    res.status(500).json(error);
  }
};

module.exports = {
  getContractors,
  getContractorById,
 getClerks ,
 getClerkById,
 getManagers,
 getManagerById,
 deleteUser,
updateUser,
};