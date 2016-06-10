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

var express=required('express');
var app=express();
var server=app.listen(3000, 'localhost', function() {
  console.log('listening on port 3000');

});

var path=require('path');

var bodyParser=require('body-parser');
var urlencodeParser=bodyParser.urlencoded
   ({extended: false});

app.use(express.static('public'));

//base url
app.get('/', function(req, res) {
  console.log('hello from base url get');

});

app.get('/form', function(req, res) {

});

app.post('/pathPost', urlencodeParser, function(req,res) {
  res.write('postrcvd ' + req.body.input1);
  res.write('postrcvd ' + req.body.Add);
  res.write('postrcvd ' + req.body.Subtract);
  res.write('postrcvd ' + req.body.Multiply);
  res.write('postrcvd ' + req.body.Divide);
  res.write('postrcvd ' + req.body.input2);
  res.end();
});
