const http = require('http')
const url = require('url')
const fs = require('fs')
const mysql = require('mysql')

const con = mysql.createConnection({
    host: "localhost",
    port: "6951",
    database: "test_mysql_db",
    user: "test_mysql_user",
    password: "test_mysql_password"
})

con.connect(function(err) {
    if (err) {
        console.error("Connection failed!:", err.message)
        return
    };
    console.log("Connnected !")
})


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var text = q.year + " " + q.month;
    res.write('Hello World!');
    res.write(req.url + " ")
    res.end(text);
}).listen(8080);

// fs.readFile('test_fs.html', function(err, data){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end()
// })