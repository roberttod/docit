var express = require('express');
var app = express();
var React = require('react');

app.get('/*', function(req, res){
  if (!/^api\//.test(req.params[0])) {
    res.sendfile('./public/index.html');
  }
});

app.get('/api/*', function(req, res){
  res.send(200, 'API!');
});

app.listen(3000);
