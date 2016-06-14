
//server
var express=require('express');  // sets up express
var app=express();

var path=require('path');  // sets up paths

var bodyParser=require('body-parser');  // sets up json parser
var jsonParser=bodyParser.json();

var results=require('../modules/results.js');  // sets up results master module

app.get('/', function(req, res) {  //base url - running a get request on that url
  res.sendFile(path.resolve("views/index.html"));
});

app.post('/processCalc', jsonParser, function(req,res) {  // sending results back from modules
  var fromModule=results(req.body);
  res.send(fromModule);
  res.end();
});

app.use(express.static('public'));  // makes public folder available

// set up server, process.env.PORT lets the port be set by Heroku
var server=app.listen(process.env.PORT || 3000, function() {});
