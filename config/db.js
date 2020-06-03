// Modules
const mysql = require('mysql');

// Connexion à la DB
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'twitter_like'
  });
  
db.connect((err) => {
  if (err) {
    return console.error('error: ' + err.message);
  } else {
    console.log('Connected to the MySQL server.');
  }
});

// Export du fichier
module.exports = db;