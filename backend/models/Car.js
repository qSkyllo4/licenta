const pool = require("../config/db");

const Car = {
  // Fetch all cars from the database
  async getAllCars() {
    const conn = await pool.getConnection();
    try {
      const rows = await conn.query("SELECT * FROM cars");
      return rows;
    } catch (error) {
      console.error("Error fetching cars:", error);
      throw error;
    } finally {
      conn.release();
    }
  },

  // Create a new car listing
  async createCar(carData) {
    const conn = await pool.getConnection();
    try {
      const result = await conn.query(
        "INSERT INTO cars (make, model, year, starting_price, seller_id) VALUES (?, ?, ?, ?, ?)",
        [carData.make, carData.model, carData.year, carData.startingPrice, carData.sellerId]
      );
      return result;
    } catch (error) {
      console.error("Error creating car:", error);
      throw error;
    } finally {
      conn.release();
    }
  },

  // Fetch a single car by ID
  async getCarById(carId) {
    const conn = await pool.getConnection();
    try {
      const rows = await conn.query("SELECT * FROM cars WHERE id = ?", [carId]);
      return rows[0]; // Return the first row (single car)
    } catch (error) {
      console.error("Error fetching car by ID:", error);
      throw error;
    } finally {
      conn.release();
    }
  },

  // Update a car listing
  async updateCar(carId, carData) {
    const conn = await pool.getConnection();
    try {
      const result = await conn.query(
        "UPDATE cars SET make = ?, model = ?, year = ?, starting_price = ? WHERE id = ?",
        [carData.make, carData.model, carData.year, carData.startingPrice, carId]
      );
      return result;
    } catch (error) {
      console.error("Error updating car:", error);
      throw error;
    } finally {
      conn.release();
    }
  },

  // Delete a car listing
  async deleteCar(carId) {
    const conn = await pool.getConnection();
    try {
      const result = await conn.query("DELETE FROM cars WHERE id = ?", [carId]);
      return result;
    } catch (error) {
      console.error("Error deleting car:", error);
      throw error;
    } finally {
      conn.release();
    }
  },
};

module.exports = Car;