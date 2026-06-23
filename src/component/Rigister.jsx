import { useState } from "react";
import { locationData } from "../data/locationData";
import style from "./Rigister.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useLocation } from "react-router-dom";

const Rigister = () => {
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [stateType, setStateType] = useState("");

  const navigate = useNavigate();

  const location = useLocation();
  const fromApp = location.state?.fromApp;

  // FORM DATA

  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    cnic: "",
    email: "",
    contact: "",
    username: "",
    password: "",
  });

  const provinces = Object.keys(locationData);

  const districts = province ? Object.keys(locationData[province]) : [];

  // INPUT CHANGE

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ALL REQUIRED CHECK

    if (
      !formData.name ||
      !formData.fatherName ||
      !formData.cnic ||
      !formData.email ||
      !formData.contact ||
      !formData.username ||
      !formData.password ||
      !stateType ||
      !province ||
      !district
    ) {
      alert("Please fill all fields");
      return;
    }

    // CNIC CHECK

    if (!/^\d{13}$/.test(formData.cnic)) {
      alert("CNIC must contain exactly 13 digits");
      return;
    }

    // CONTACT CHECK

    if (!/^03\d{9}$/.test(formData.contact)) {
      alert("Contact must be 11 digits and start with 03");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          ...formData,

          state: stateType,

          role: stateType,

          province,

          district,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert(data.message);

        if (fromApp) {
          if (stateType === "Clerk") {
            navigate("/App/Clerk");
          } else if (stateType === "Manager") {
            navigate("/App/Manager");
          } else if (stateType === "Contractor") {
            navigate("/App/Contractor");
          } else {
            navigate("/App");
          }
        } else {
          navigate("/LoginPage");
        }
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);

      alert("Server error");
    }
  };

  return (
    <form className={style.RegistrationForm} onSubmit={handleSubmit}>
      {/* NAME */}

      <div className={style.allInput}>
        <label>Name:</label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
      </div>

      {/* FATHER */}

      <div className={style.allInput}>
        <label>F/Name:</label>

        <input
          type="text"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
          placeholder="Enter your father name"
          required
        />
      </div>

      {/* CNIC */}

      <div className={style.allInput}>
        <label>CNIC:</label>

        <input
          type="text"
          name="cnic"
          value={formData.cnic}
          maxLength="13"
          onChange={handleChange}
          placeholder="13 digit CNIC"
          required
        />
      </div>

      {/* EMAIL */}

      <div className={style.allInput}>
        <label>Email:</label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </div>

      {/* CONTACT */}

      <div className={style.allInput}>
        <label>Contact:</label>

        <input
          type="text"
          name="contact"
          value={formData.contact}
          maxLength="11"
          onChange={handleChange}
          placeholder="03xxxxxxxxx"
          required
        />
      </div>

      {/* ROLE */}

      <div className={style.allInput}>
        <label>State</label>

        <select
          value={stateType}
          onChange={(e) => setStateType(e.target.value)}
          required
        >
          <option value="">Select State</option>

          <option value="Admin">Admin</option>

          <option value="Clerk">Clerk</option>

          <option value="Manager">Manager</option>

          <option value="Contractor">Contractor</option>
        </select>
      </div>

      {/* PROVINCE */}

      <div className={style.allInput}>
        <label>Province</label>

        <select
          value={province}
          onChange={(e) => {
            setProvince(e.target.value);

            setDistrict("");
          }}
          required
        >
          <option value="">Select Province</option>

          {provinces.map((prov) => (
            <option key={prov} value={prov}>
              {prov}
            </option>
          ))}
        </select>
      </div>

      {/* DISTRICT */}

      <div className={style.allInput}>
        <label>District</label>

        <select
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          required
        >
          <option value="">Select District</option>

          {districts.map((dist) => (
            <option key={dist} value={dist}>
              {dist}
            </option>
          ))}
        </select>
      </div>

      {/* USERNAME */}

      <div className={style.allInput}>
        <label>Username:</label>

        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter username"
          required
        />
      </div>

      {/* PASSWORD */}

      <div className={style.allInput}>
        <label>Password:</label>

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>

      <p className="text-center mt-2 ms-5">
        Don't have an account?
        <a href="/LoginPage">Login</a>
      </p>
    </form>
  );
};

export default Rigister;
