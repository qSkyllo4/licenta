const Message = require("../models/Message");

const contactController = {
  // Handle contact form submission
  async submitMessage(req, res) {
    try {
      const { name, email, message } = req.body;
      await Message.create({ name, email, message });
      res.status(201).json({ message: "Message sent successfully!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = contactController;