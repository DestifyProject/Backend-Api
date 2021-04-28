const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "destify-project",
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
