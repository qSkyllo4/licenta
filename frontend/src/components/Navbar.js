import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS for styling

const Navbar = ({ user, handleLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">Car Auction</Link>
      </div>
      <div className="navbar-right">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/cars" className="nav-link">Car Listings</Link>
        {user && user.role === "admin" && (
          <Link to="/admin/dashboard" className="nav-link">Admin Dashboard</Link>
        )}
        {user && user.role === "user" && (
          <>
            <Link to="/sell-car" className="nav-link">Sell a Car</Link>
            <Link to="/my-bids" className="nav-link">My Bids</Link>
          </>
        )}
        <Link to="/about-us" className="nav-link">About Us</Link>
        <Link to="/contact-us" className="nav-link">Contact Us</Link>
        {user ? (
          <>
            <Link to="/profile" className="nav-link">Profile</Link>
            <button onClick={handleLogout} className="nav-link logout-button">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;