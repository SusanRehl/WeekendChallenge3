
var addition=require('./addition');
var subtraction=require('./subtraction');
var multiplication=require('./multiplication');
var division=require('./division');


var results= function(data) {
console.log(data);

switch (data.operator) {
  case "plus":
    console.log('in plus');
    results=addition.addresults(data.x, data.y);
    break;
  case "minus":
    console.log('in minus');
    results=subtraction.subresults(data.x, data.y);
    break;
  case "mult":
    console.log('in mult');
    results=multiplication.multresults(data.x, data.y);
    break;
  case "divide":
    console.log('in disvide');
    results=division.divresults(data.x, data.y);
    break;
}
return results;
};
// var results = function(){
// return('in results module function' + addition.addresults(4));
// };

module.exports=results;
