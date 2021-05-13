const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.BD_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const dbConnection = async () => {
  try {
    connection.connect();
  } catch (error) {
    console.log("Db Connection error", error);
  }
};

module.exports = {
  dbConnection,
};
