const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const carRoutes = require("./routes/carRoutes");
const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes"); // Import contact routes

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Use routes
app.use("/api", carRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes); // Add contact routes

module.exports = app;