var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".




module.exports.db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hackreactor',
  database: 'chat'
});

module.exports.db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to db..');
});

