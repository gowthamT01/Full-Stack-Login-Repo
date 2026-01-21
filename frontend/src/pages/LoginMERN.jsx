import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5005/login", formData);

      if (res.data.success) {
        alert("Login successful!");
        navigate("/GetReg");
      }
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
          />
        </div>

        <div>
          <label>Password</label>
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
          />
        </div>

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account? <Link to="/register">Register Now</Link>
      </p>
    </div>
  );
};

export default Login;
