import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CarList.css"; // Import CSS for styling

const CarList = () => {
  const [cars, setCars] = useState([]);

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

  return (
    <div className="container">
      <h2>Car Listings</h2>
      <div className="car-list">
        {cars.map((car) => (
          <div key={car.id} className="card">
            <h3>{car.make} {car.model}</h3>
            <p>Year: {car.year}</p>
            <p>Starting Price: ${car.starting_price}</p>
            <button>Place Bid</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;