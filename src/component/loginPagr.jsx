import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();

    if (!data.success) {
      alert(data.message);
      return;
    }

    const user = data.user;
    const role = user.state;

    // ❌ ONLY ADMIN ALLOWED
    if (role !== "Admin") {
      alert("Access denied! only for admin");
      return;
    }

    // ✅ Save user
    localStorage.setItem("user", JSON.stringify(user));

    // ✅ Redirect Admin Dashboard
    navigate("/app");
  };

  return (
    <div className="container-fluid login-page">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-lg-4 col-md-6 col-sm-10">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="text-center mb-4">Admin Login</h2>

              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button className="btn btn-primary w-100" type="submit">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
