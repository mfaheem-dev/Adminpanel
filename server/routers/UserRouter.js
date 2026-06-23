const express = require("express");
const router = express.Router();
const User = require("../models/User");

const {
  getContractors,
  getContractorById,
  getClerks,
  getClerkById,
  getManagers,
  getManagerById,
  deleteUser,
updateUser,
} = require("../controllers/userController");

// ======================
// Add User
// ======================
router.post("/add", async (req, res) => {
  try {
    const newUser = new User(req.body);

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User Added",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// ======================
// Get All Users
// ======================
router.get("/", async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

// ======================
// Login User
// ======================
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({
      username,
      password,
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid Username or Password",
      });
    }

    res.json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// ======================
// Contractors
// ======================

router.get("/contractors", getContractors);

router.get("/contractor/:id", getContractorById);

// ======================
// Clerks
// ======================

router.get("/clerks", getClerks);

router.get("/clerk/:id", getClerkById);

// ======================
// Managers
// ======================

router.get("/managers", getManagers);

router.get("/manager/:id", getManagerById);

// Delete any user
router.delete("/user/:id", deleteUser);


// Update any user
router.put("/user/:id", updateUser);


module.exports = router;