import React, { useState } from "react";
import axios from "../utils/apiRequest";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate(); // Use the navigate function to navigate programmatically
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/register", { username, password });
      alert("Registrasi sukses! Anda akan dialihkan.");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="checkbox"
          checked={showPassword}
          onChange={toggleShowPassword}
        />{" "}
        Show Password
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
