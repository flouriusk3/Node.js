/* Creating a server */

var http = require('http'); /* Includes http module */

/*  Creates a function that accepts a request and response argument. */

function onRequest(request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'}); /* Status code of 200 = OK, object of content type is text/plain */
  response.write('Hello World'); /* Writes the content to be outputted */
  response.end(); /* Signals that this is the end of the response */
}

http.createServer(onRequest).listen(4200); /* Creates a server that outputs the onRequest function on port 4200 */
