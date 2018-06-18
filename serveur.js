var express = require('express');
var server = express();


server.listen(9000, function() { console.log("Listening on port 9000")});

server.get('/', function (req, res) {
    res.sendFile(__dirname + '/Index.html');
    
});