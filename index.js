require('dotenv').config();
const express = require("express");
const { dbConnection } = require("./db/config.js");

// Initialize server
const app = express();

// DB Connection
dbConnection();

// Routes
app.get("/", (_, res) => {
  res.status(200).json({ ok: true, message: "Principal route" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server up in http://localhost:${process.env.PORT}`);
});
