const { Pool } = require("pg");
require("dotenv").config();
const pool = new Pool({
  user: process.env.DB_USER, //postgress sql username
  host: "localhost", //database runnning in my computer
  database: process.env.DB_NAME, //database name
  password: process.env.DB_PASSWORD, //database password
  port: process.env.DB_PORT, //default postgress port
});

module.exports = pool;
