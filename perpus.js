const mysql = require("mysql2");

const perpus = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "perpustakaan",
});

perpus.connect((err) => {
  if (err) throw err;
  console.log("Database connected!");
});

module.exports = perpus;
