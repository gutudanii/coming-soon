const { Sequelize } = require("sequelize");

// Set up the connection to CockroachDB
// Replace 'your-username' with your CockroachDB username
const sequelize = new Sequelize("nextjs_auth", "your-username", "", {
  host: "localhost", // Replace with your CockroachDB host (e.g., AWS, GCP, or local)
  dialect: "postgres", // CockroachDB uses PostgreSQL dialect
  port: 26257, // Default CockroachDB port
  logging: false, // Disable logging for cleaner console output (optional)
});

sequelize
  .authenticate()
  .then(() =>
    console.log("Connection to CockroachDB has been established successfully.")
  )
  .catch((err) => console.error("Unable to connect to the database:", err));

module.exports = sequelize;
