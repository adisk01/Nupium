import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './homepage.css'
const HomePage = () => {
  const navigate = useNavigate();


  const handleLogout = () => {
    
    navigate("/login");
  };

  return (
    <div className="admin-dashboard">

      <div className="navbar">
        <div className="logo">
        <img src="./nupiumlogo.jpeg" alt="Logo" />
        </div>
        <div className="welcome-message">
          <p>Welcome, Admin!</p>
        </div>
        <div className="logout-button">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <div className="side">
        <div className="sidebar">

          <Link to="/dashboard">Dashboard</Link>
          <Link to="/account">My Account</Link>
          <Link to="/payment">Payments</Link>
          <Link to="/payment">Payments</Link>
          <Link to="/subscription">subscription validity</Link>
          <Link to="/subscription">Icon Session History</Link>
          <Link to="/subscription">Icon Courses Bucket</Link>
          <Link to="/subscription">Icon Support Account</Link>
        </div>
        <div className="main-content">
          <div className="center-message">
            <h2>Welcome to Nupium Learning Programme</h2>
            <p>Your one & only skills enhancing partner</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
