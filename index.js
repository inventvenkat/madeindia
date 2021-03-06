var express = require('express');
var app = express();
var cool = require('cool-ascii-faces');
var path = require('path');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files

app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/views/pages/index.html'));
});

app.get('/cool', function(request, response) {
  response.send(cool());
});
app.get('/times', function(request, response) {
    var result = ''
    var times = process.env.TIMES || 5
    for (i=0; i < times; i++)
      result += i + ' ';
  response.send(result);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


