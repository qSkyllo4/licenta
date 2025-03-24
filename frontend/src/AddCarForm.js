import React, { useState } from "react";
import axios from "axios";
import "./AddCarForm.css"; // Import the CSS file for styling

const AddCarForm = ({ onCarAdded }) => {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    startingPrice: "",
    sellerId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/cars", formData);
      onCarAdded(response.data); // Notify parent component
      alert("Car added successfully!");
      setFormData({ make: "", model: "", year: "", startingPrice: "", sellerId: "" }); // Reset form
    } catch (error) {
      console.error("Error adding car:", error);
    }
  };

  return (
    <div className="add-car-form">
      <h2>Add a New Car</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Make:</label>
          <input
            type="text"
            name="make"
            value={formData.make}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Model:</label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Year:</label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Starting Price:</label>
          <input
            type="number"
            name="startingPrice"
            value={formData.startingPrice}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Seller ID:</label>
          <input
            type="number"
            name="sellerId"
            value={formData.sellerId}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Add Car</button>
      </form>
    </div>
  );
};

export default AddCarForm;