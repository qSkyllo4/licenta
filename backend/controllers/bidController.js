const Car = require("../models/Car");

const bidController = {
  async placeBid(req, res) {
    try {
      const { bid } = req.body;
      const carId = req.params.carId;
      const car = await Car.findById(carId);

      if (!car) {
        return res.status(404).json({ message: "Car not found" });
      }

      car.bids.push({ amount: bid, date: new Date() });
      await car.save();

      res.status(200).json({ message: "Bid placed successfully!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = bidController;