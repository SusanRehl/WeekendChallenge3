
var addition=require('./addition');  // setting up sub-modules
var subtraction=require('./subtraction');
var multiplication=require('./multiplication');
var division=require('./division');

var results= function(data) {  // sending data to correct module based on operator value

switch (data.operator) {
  case "plus":
    results=addition.addresults(data.x, data.y);
    break;
  case "minus":
    results=subtraction.subresults(data.x, data.y);
    break;
  case "mult":
    results=multiplication.multresults(data.x, data.y);
    break;
  case "divide":
    results=division.divresults(data.x, data.y);
    break;
}
return results;  // return results to app.js
};  // end results function

module.exports=results;
