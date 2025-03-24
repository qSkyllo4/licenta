const pool = require("../config/db");

const Message = {
  // Save a new message
  async create(messageData) {
    const { name, email, message } = messageData;
    const conn = await pool.getConnection();
    try {
      const result = await conn.query(
        "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)",
        [name, email, message]
      );
      return result;
    } catch (error) {
      throw error;
    } finally {
      conn.release();
    }
  },
};

module.exports = Message;