
var express=require('express');  // sets up express
var app=express();

var path=require('path');  // sets up paths

var bodyParser=require('body-parser');  // sets up json parser
var jsonParser=bodyParser.json();

var results=require('../modules/results.js');  // sets up modules
var addition=require('../modules/addition.js');
var multiplication=require('../modules/multiplication.js');
var subtraction=require('../modules/subtraction.js');
var division=require('../modules/division.js');

app.get('/', function(req, res) {  //base url
  res.sendFile(path.resolve("views/index.html"));
});

app.post('/processCalc', jsonParser, function(req,res) {  // sending results back from modules
  var fromModule=results(req.body);  //(req.body.data);
  res.send(fromModule);
  res.end();
});

app.use(express.static('public'));  // makes public folder available

var server=app.listen(8080, 'localhost', function() {  //set up server
   var port = server.address().port;
  console.log('listening on port' + port);
});
