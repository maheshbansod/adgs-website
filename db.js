var mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.DB_ENDPOINT,
  user: process.env.DB_user,
  password: process.env.DB_password,
  database: process.env.DB_db,
});

connection.connect();

module.exports.connection = connection;
