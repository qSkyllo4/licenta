const pool = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = {
  // Register a new user
  async register(userData) {
    const { username, email, password } = userData;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

    const conn = await pool.getConnection();
    try {
      const result = await conn.query(
        "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)",
        [username, email, hashedPassword, "user"] // Hardcode the role as "user"
      );

      // Convert BigInt to string
      const insertedId = result.insertId.toString();

      return { id: insertedId, username, email, role: "user" };
    } catch (error) {
      throw error;
    } finally {
      conn.release();
    }
  },

  // Login a user
  async login(email, password) {
    const conn = await pool.getConnection();
    try {
      const [user] = await conn.query("SELECT * FROM users WHERE email = ?", [email]);
      if (!user) {
        throw new Error("User not found");
      }

      // Compare passwords
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new Error("Invalid password");
      }

      // Generate a JWT
      const token = jwt.sign(
        { id: user.id, role: user.role },
        "your-secret-key", // Replace with a strong secret key
        { expiresIn: "1h" } // Token expires in 1 hour
      );

      return { token, user };
    } catch (error) {
      throw error;
    } finally {
      conn.release();
    }
  },
};

module.exports = User;