const app = require("./app");

const PORT = process.env.PORT || 5000;

console.log("Starting server..."); // Debug log

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

console.log("Server setup complete."); // Debug log