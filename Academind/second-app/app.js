/* Includes http and custom modules */
var http = require('http');
var module1 = require('./module1');
var module2 = require('./module2');

/*  Creates a function that accepts a request and response argument. */

function onRequest(request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'}); /* Status code of 200 = OK, object of content type is text/plain */
  response.write(module2.myVariable); /* Writes the content to be outputted */
  module2.myFunction();
  response.end(); /* Signals that this is the end of the response */
}

http.createServer(onRequest).listen(4200); /* Creates a server that outputs the onRequest function on port 4200 */


