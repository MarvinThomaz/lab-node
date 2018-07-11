var http = require('http');

var body = {
    success: true,
    data: "Hello World"
};

var server = function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/json' });
    response.end(JSON.stringify(body));
}

http.createServer(server).listen(5000);