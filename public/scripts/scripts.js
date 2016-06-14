// client-side - receiving inputs from index.html, packaging as JSON and sending via AJAX to app.js
$(document).ready(function() {
  startSend();  // calls function to get and process inputs
  clearForm();   // calls clearForm function to reset fields
});

function startSend() {  // takes input values, operator button click and assigns to vars, passes to object, sends object to server
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

    $.ajax({   // ajax request via post method
      url: '/processCalc',
      method: "POST",
      data: JSON.stringify(expression),
      dataType: "json",
      contentType: "application/json",
      success: function(data){
        processResponse(data);
      },
      error: function(){
        alert('Error accessing stuff');
      }
    });  // ends ajax request
  });  // ends on clidk submit
}  // end startSend function

var processResponse = function( response ) {  // process response and sends to outputDiv
  var newParagraph = document.createElement('p');
  newParagraph.textContent = response;
  document.getElementById('outputDiv').innerHTML='';
  document.getElementById('outputDiv').appendChild( newParagraph );
};

function clearForm() {  // clears data from form upon Clear click event
  $('#clear').on('click', function() {
    document.getElementById('outputDiv').innerHTML='';
    document.getElementById('input1').value='';
    document.getElementById('input2').value='';
  });
} // end of cleanform function
