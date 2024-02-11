// Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <h3>Berikut List Rute</h3>
      {/* Navigation links */}
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/dashboard">
              Dashboard (Harus Login Untuk Bisa Masuk)
            </Link>
          </li>
        </ul>
      </nav>
      {/* Additional content for the home page */}
    </div>
  );
};

export default Home;
