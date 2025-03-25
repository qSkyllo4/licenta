const express = require("express");
const bidRoutes = require("./routes/bidRoutes");
const carRoutes = require("./routes/carRoutes"); // Assuming you have car routes

const app = express();

app.use(express.json());
app.use("/api", bidRoutes);
app.use("/api", carRoutes); // Assuming you have car routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));