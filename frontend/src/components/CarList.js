import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CarList.css"; // Import CSS for styling

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [bidAmounts, setBidAmounts] = useState({});

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/cars");
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []);

  const handleBidChange = (e, carId) => {
    setBidAmounts({ ...bidAmounts, [carId]: e.target.value });
  };

  const handleBidSubmit = async (carId) => {
    const bidAmount = bidAmounts[carId];
    if (!bidAmount) {
      alert("Please enter a bid amount.");
      return;
    }

    try {
      await axios.post(`http://localhost:5000/api/cars/${carId}/bid`, { bid: bidAmount });
      alert("Bid placed successfully!");
    } catch (error) {
      console.error("Error placing bid:", error);
      alert("Failed to place bid. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2>Car Listings</h2>
      <div className="car-list">
        {cars.map((car) => (
          <div key={car.id} className="card">
            <h3>{car.make} {car.model}</h3>
            <p>Year: {car.year}</p>
            <p>Starting Price: ${car.starting_price}</p>
            <input
              type="number"
              placeholder="Enter bid amount"
              value={bidAmounts[car.id] || ""}
              onChange={(e) => handleBidChange(e, car.id)}
            />
            <button onClick={() => handleBidSubmit(car.id)}>Place Bid</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;