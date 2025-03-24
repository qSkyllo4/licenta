const User = require("../models/User");

const authController = {
  // Register a new user
  async register(req, res) {
    try {
      const newUser = await User.register(req.body);
      res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },


  // Login a user
  async login(req, res) {
    const { email, password } = req.body;
    try {
      const { token, user } = await User.login(email, password);
      res.json({ message: "Login successful", token, user });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  },
};

module.exports = authController;