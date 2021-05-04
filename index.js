const express = require("express");
const { dbConnection } = require("./db/config.js");

// Initialize server
const app = express();

// DB Connection
dbConnection();

// Routes
app.get("/", (req, res) => {
  res.status(200).json({ ok: true, message: "Principal route" });
});

app.listen(3000, () => {
  console.log("Server runnig in port 3000!");
});
