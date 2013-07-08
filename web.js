var express = require('express');

var app = express.createServer(express.logger());

var index = fs.readFilesync(index.html);

app.get('/', function(request, response) {
  response.send(index.toStrgin());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
