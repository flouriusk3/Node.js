/* Create a function that logs something to the console */
function myFunction(){
  console.log('Function was called');
}

var myString = 'String';

/* Makes functions/vars available outside of the file */
module.exports.myFunction = myFunction;
module.exports.myString = myString;