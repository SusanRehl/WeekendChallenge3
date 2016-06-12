// We are going to be building a calculator application using
// jQuery, Node, and Express,
// all hosted on Heroku!
//
// The logic for the calculator needs to be housed on the Server,
// where the client side will take in the values (in 2 input text fields)
// and the type of mathematical operation (selected using a button on the DOM).
// Each of the numerical values and type of mathematical operation will be bundled up
// in an object and then sent to the server via a POST.
// So when the object leaves the server, it should look something like this:
//  { x: 3, y: 4, type: Add }
//
// Once the server receives it, build out logic to compute the numbers
// in 1 of 4 different ways. The server should be able to handle
// Addition, Subtraction, Multiplication, and Division.
// Once the calculation is complete, it should be sent back down to the client side app
// where it should be displayed on the DOM.
//
// Finally, build a 'clear' button that resets the whole experience.


//sets up express
var express=require('express');
var app=express();



var path=require('path');

var bodyParser=require('body-parser');
var jsonParser=bodyParser.json();

//modules
var results=require('../modules/results.js');
var addition=require('../modules/addition.js');
var multiplication=require('../modules/multiplication.js');
var subtraction=require('../modules/subtraction.js');
var division=require('../modules/division.js');

//base url
app.get('/', function(req, res) {
  res.sendFile(path.resolve("views/index.html"));
});

//sending results back from modules
app.post('/processCalc', jsonParser, function(req,res) {  //
  console.log(req.body);
  var fromModule=results(req.body);  //(req.body.data);
  res.send(fromModule);
  res.end();
});

app.use(express.static('public'));

//set up server
var server=app.listen(8080, 'localhost', function() {
   var port = server.address().port;
  console.log('listening on port' + port);
});
