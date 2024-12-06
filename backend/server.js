const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bancoprojeto",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to MySQL database.");
});

// API Endpoint to Fetch Data
app.get("/api/data", (req, res) => {
  const query = "SELECT * FROM your_table_name"; // Replace with your table name
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Start the Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
