const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "localhost",
  user: "root", // Replace with your MariaDB username
  password: "root", // Replace with your MariaDB password
  database: "car_auction",
  connectionLimit: 5,
  typeCast: (field, next) => {
    if (field.type === "BIGINT") {
      return field.string(); // Convert BigInt to string
    }
    return next();
  },
});

module.exports = pool;