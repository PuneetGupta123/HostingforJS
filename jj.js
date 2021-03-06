
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
  console.log(req);
  res.send('It works!');
});

app.get(['/facebook', '/instagram'], function(req, res) {
  if (
    req.param('hub.mode') == 'subscribe' &&
    req.param('hub.verify_token') == 'qwertyuiop'
  ) {
    res.send(req.param('hub.challenge'));
  } else {
    res.send(400);
  }
});

app.post('/facebook', function(req, res) {
  console.log('Facebook request body:');
  console.log(req.body);
  // Process the Facebook updates here
});

app.post('/instagram', function(req, res) {
  console.log('Instagram request body:');
  console.log(req.body);
  // Process the Instagram updates here
});

var server = app.listen(app.get('port'), function () {
  console.log('Example app listening at http://%s:%s', host, port);
});

