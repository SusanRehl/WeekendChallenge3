// client-side - receiving inputs from index.html, packaging as JSON and sending via AJAX to app.js
$(document).ready(function() {
  startSend();  // calls function
});

function startSend() {  // takes input values, operator button click and assigns to vars, passes to object
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
   }); // end submit on click function

    $.ajax({   // ajax request via post method
      url: 'http://localhost:8080/processCalc',
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
  } // end startSend function

var processResponse = function( response ) {  // process response and send to outputDiv
  var newParagraph = document.createElement('p');
  newParagraph.textContent = response;
  document.getElementById('outputDiv').innerHTML='';
  document.getElementById('outputDiv').appendChild( newParagraph );
  clearForm();
};

function clearForm() {  // clears data from form upon Clear click event
  $('#clear').on('click', function() {
    console.log("click on clearForm");
    document.getElementById('outputDiv').innerHTML='';
    document.getElementById('input1').innerHTML='';
    document.getElementById('input2').innerHTML='';
  });
}
