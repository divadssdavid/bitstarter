var express = require('express');
var app = express.createServer(express.logger());


app.get('/', function(request, response) {
    var fs = require('fs');
    var buffer = new Buffer();
    response.send(buffer.toString('utc-8', fs.readFileSync("index.html")));
});

// app.get('/', function(request, response) {
//     response.send(fs.readFileSync('index.html', function(err, data) {
//         data.toString('utf-8');
//     }););
// });

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
