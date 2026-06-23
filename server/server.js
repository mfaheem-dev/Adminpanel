const express = require("express");
const cors = require("cors");
const User = require("./models/User");

require("dotenv").config();

const connectDB = require("./config/db");

const userRoutes = require("./routers/UserRouter");

const app = express();

// Database Connect

connectDB();

// Middleware

app.use(cors());

app.use(express.json());

// User Routes

app.use("/api/users", userRoutes);

// Test Route

app.get("/api/test", (req, res) => {
  res.json({
    message: "Backend Connected Successfully",
  });
});

// =========================
// REGISTER USER
// =========================

app.post("/api/register", async (req, res) => {
  try {
    const { username, cnic, contact } = req.body;

    // Username Duplicate Check

    const existUser = await User.findOne({
      username: username,
    });

    if (existUser) {
      return res.json({
        success: false,

        message: "Username already exists",
      });
    }

    // CNIC Validation

    if (!/^\d{13}$/.test(cnic)) {
      return res.json({
        success: false,

        message: "CNIC must be exactly 13 digits",
      });
    }

    // Contact Validation

    if (!/^03\d{9}$/.test(contact)) {
      return res.json({
        success: false,

        message: "Contact must start with 03 and contain 11 digits",
      });
    }

    // Save User

    const user = new User(req.body);

    await user.save();

    res.status(201).json({
      success: true,

      message: "User Saved Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
});

// =========================
// GET ALL USERS
// =========================

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// =========================
// LOGIN
// =========================

app.post("/api/users/login", async (req, res) => {
  try {
    const {
      username,

      password,
    } = req.body;

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

      message: "Login Successful",

      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
});

// SERVER START

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
