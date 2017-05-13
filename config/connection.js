var mysql = require("mysql");
var connection;

console.log("PROCESS ENV TWOLBBURGERS URL", process.env.TWOLBBURGERS_URL);
if (process.env.TWOLBBURGERS_URL) {
    connection = mysql.createConnection(process.env.TWOLBBURGERS_URL);

} else {

     connection = mysql.createConnection({
        port: 4000,
        host: "localhost",
        user: "root",
        password: "",
        database: "seq_burger_db"
    });
}

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;