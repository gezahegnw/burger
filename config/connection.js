// Set up MySQL connection.
//mysql://ifksh9qrcmlncesr:f4976jkqq1cjzllr@o3iyl77734b9n3tg.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/rcyrcfoln35b6xbc
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "o3iyl77734b9n3tg.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "ifksh9qrcmlncesr",
  password: "f4976jkqq1cjzllr",
  database: "rcyrcfoln35b6xbc"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
