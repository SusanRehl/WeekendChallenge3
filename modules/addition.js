var addition = {  // processes addition
  addresults: function(x,y) {
    var z = parseInt(x) + parseInt(y);  // sets strings to numbers
    z = z.toString();  // sets number result to string
    return z;
  }
  };

module.exports=addition;
