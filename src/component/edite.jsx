import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "./EditUser.module.css";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  // get user data
  useEffect(() => {
    fetch(`http://localhost:5000/api/users/contractor/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // update user
  const updateUser = () => {
    fetch(`http://localhost:5000/api/users/user/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(user),
    })
      .then((res) => res.json())

      .then(() => {
        alert("User Updated Successfully");

        navigate("/App/contractor");
      });
  };

  return (
    <div className={style.container}>
      <h2>Edit User</h2>

      <div className={style.form}>
        <label>Name</label>
        <input name="name" value={user.name || ""} onChange={handleChange} />

        <label>Father Name</label>
        <input
          name="fatherName"
          value={user.fatherName || ""}
          onChange={handleChange}
        />

        <label>Email</label>

        <input name="email" value={user.email || ""} onChange={handleChange} />

        <label>Contact</label>

        <input
          name="contact"
          value={user.contact || ""}
          onChange={handleChange}
        />

        <label>CNIC</label>

        <input name="cnic" value={user.cnic || ""} onChange={handleChange} />

        <label>Province</label>

        <input
          name="province"
          value={user.province || ""}
          onChange={handleChange}
        />

        <label>District</label>

        <input
          name="district"
          value={user.district || ""}
          onChange={handleChange}
        />

        <label>Username</label>

        <input
          name="username"
          value={user.username || ""}
          onChange={handleChange}
        />

        <button onClick={updateUser}>Update</button>

        <button className={style.back} onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default EditUser;
