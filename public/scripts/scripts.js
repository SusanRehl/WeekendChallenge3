
//needs to receive the values and package in object to send to app.js and receive back
$(document).ready(function() {
  startSend();

});

function startSend() {
  var operator = "";

  $('#adding').on('click', function(){
    operator='plus';
  });
  $('#subtracting').on('click', function(){
    operator='minus';
  });
  $('#multiplying').on('click', function(){
    operator='mult';
  });
  $('#dividing').on('click', function(){
    operator='divide';
  });

  $('#submit').on('click', function() {

    var argOne = $('#input1').val();
    var argTwo = $('#input2').val();


var expression = {
  x: argOne,
  y: argTwo,
  operator: operator
};
console.log("here is expression: " + JSON.stringify(expression));

  $.ajax({
    url: 'http://localhost:8080/processCalc',
    method: "POST",
    data: JSON.stringify(expression),
    dataType: "json",
    contentType: "application/json",
    success: function(data){
      console.log('post successful' + data);
      processResponse(data);
    },
    error: function(){
      alert('Error accessing stuff');
    }
  });
});
}  // end startSend function

var processResponse = function( response ) {
  console.log( 'in processResponse: ' + response );
  // new p tag
  var newParagraph = document.createElement('p');
  // with out output data
  newParagraph.textContent = response;
  // empty our output div
  document.getElementById('outputDiv').innerHTML='';
  // append newParagraph to output
  document.getElementById('outputDiv').appendChild( newParagraph );
};
