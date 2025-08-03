const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT),
});

console.log("DB_PASS type:", typeof process.env.DB_PASS);
console.log("DB_PASS value:", process.env.DB_PASS);
module.exports = pool;