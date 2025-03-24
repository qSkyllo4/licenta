const Car = require("../models/Car");

const carController = {
  // Fetch all cars
  async getAllCars(req, res) {
    try {
      const cars = await Car.getAllCars();
      res.json(cars);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Fetch a single car by ID
  async getCarById(req, res) {
    try {
      const carId = req.params.id; // Get car ID from URL parameter
      const car = await Car.getCarById(carId);
      if (!car) {
        return res.status(404).json({ message: "Car not found" });
      }
      res.json(car);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Create a new car listing
  async createCar(req, res) {
    try {
      const newCar = await Car.createCar(req.body);
      res.status(201).json(newCar);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Update a car listing
  async updateCar(req, res) {
    try {
      const carId = req.params.id; // Get car ID from URL parameter
      const updatedCar = await Car.updateCar(carId, req.body);
      if (!updatedCar.affectedRows) {
        return res.status(404).json({ message: "Car not found" });
      }
      res.json({ message: "Car updated successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Delete a car listing
  async deleteCar(req, res) {
    try {
      const carId = req.params.id; // Get car ID from URL parameter
      const result = await Car.deleteCar(carId);
      if (!result.affectedRows) {
        return res.status(404).json({ message: "Car not found" });
      }
      res.json({ message: "Car deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = carController;