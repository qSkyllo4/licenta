const express = require("express");
const contactController = require("../controllers/contactController");

const router = express.Router();

// Submit a message
router.post("/submit", contactController.submitMessage);

module.exports = router;