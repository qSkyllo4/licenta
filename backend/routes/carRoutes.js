const express = require("express");
const carController = require("../controllers/carController");

const router = express.Router();

// Fetch all cars
router.get("/cars", carController.getAllCars);

// Fetch a single car by ID
router.get("/cars/:id", carController.getCarById);

// Create a new car listing
router.post("/cars", carController.createCar);

// Update a car listing
router.put("/cars/:id", carController.updateCar);

// Delete a car listing
router.delete("/cars/:id", carController.deleteCar);

module.exports = router;