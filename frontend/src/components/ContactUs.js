import React, { useState } from "react";
import axios from "axios";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact/submit", formData);
      alert("Thank you for contacting us! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2>Contact Us</h2>
      <div className="contact-content">
        <p>
          Have questions or need assistance? We're here to help! Reach out to us using the form below, and we'll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
        <div className="contact-info">
          <h3>Our Office</h3>
          <p><strong>Address:</strong> Str. Celofibrei, Ilfov, Bragadiru.</p>
          <p><strong>Phone:</strong> (+40)757428693 </p>
          <p><strong>Email:</strong> ivlad1212@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;