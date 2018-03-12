/* Includes http and custom modules */
var http = require('http');
var fs = require('fs');

/*  Creates a function that accepts a request and response argument. */

function onRequest(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'}); /* Status code of 200 = OK, object of content type is text/html */
  fs.readFile('./index.html', null, function(error, data){
    if (error) {
      response.writeHead(404);
      response.write('File not found');
    } else {
      response.write(data);
    }
    response.end(); /* Signals that this is the end of the response */
  });
}

http.createServer(onRequest).listen(4200); /* Creates a server that outputs the onRequest function on port 4200 */

