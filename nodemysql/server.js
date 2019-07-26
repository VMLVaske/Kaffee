// server.js

const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  port: "3582",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = `CREATE DATABASE`

});
