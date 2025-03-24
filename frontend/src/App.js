import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import the Navbar component
import Register from "./components/Register";
import Login from "./components/Login";
import CarList from "./components/CarList"; // Your existing CarList component
import Home from "./components/Home"; // New Home component
import SellCar from "./components/SellCar"; // New SellCar component
import MyBids from "./components/MyBids"; // New MyBids component
import AboutUs from "./components/AboutUs"; // New AboutUs component
import ContactUs from "./components/ContactUs"; // New ContactUs component
import Profile from "./components/Profile"; // New Profile component
import AdminDashboard from "./components/AdminDashboard"; // New AdminDashboard component
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null); // Store user data

  const handleLogin = (token, userData) => {
    localStorage.setItem("token", token); // Store token in localStorage
    setUser(userData); // Set user data
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    setUser(null); // Clear user data
  };

  return (
    <div className="App">
      {/* Add the Navbar component */}
      <Navbar user={user} handleLogout={handleLogout} />

      {/* Define routes */}
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Car Listings */}
        <Route path="/cars" element={<CarList />} />

        {/* Sell a Car (protected route) */}
        <Route
          path="/sell-car"
          element={user ? <SellCar /> : <Navigate to="/login" />}
        />

        {/* My Bids (protected route) */}
        <Route
          path="/my-bids"
          element={user ? <MyBids /> : <Navigate to="/login" />}
        />

        {/* About Us */}
        <Route path="/about-us" element={<AboutUs />} />

        {/* Contact Us */}
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Login */}
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />

        {/* Register */}
        <Route path="/register" element={<Register />} />

        {/* Profile (protected route) */}
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/login" />}
        />

        {/* Admin Dashboard (protected route for admins only) */}
        <Route
          path="/admin/dashboard"
          element={user?.role === "admin" ? <AdminDashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
};

export default App;