// require("dotenv").config();
const path = require('path');
const mysql = require("mysql");

const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: 3306
});

module.exports = con;