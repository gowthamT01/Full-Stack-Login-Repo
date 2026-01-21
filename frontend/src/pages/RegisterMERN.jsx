import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterMern = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5005/users", formData);
      alert("Registration successful!");
      navigate("/");
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input name="firstName" onChange={handleChange} />
        </div>

        <div>
          <label>Last Name</label>
          <input name="lastName" onChange={handleChange} />
        </div>

        <div>
          <label>Email</label>
          <input name="email" type="email" onChange={handleChange} />
        </div>

        <div>
          <label>Gender</label>
          <select name="gender" onChange={handleChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label>Password</label>
          <input name="password" type="password" onChange={handleChange} />
        </div>

        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account? <Link to="/">Login Now</Link>
      </p>
    </div>
  );
};

export default RegisterMern;
