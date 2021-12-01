const http = require("http");

console.log("Intro To Node Exercise");

http
    .createServer(function(request, response) {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end("'Ello Gov'na");
    })
    .listen(3000, function() {
        console.log("The Server Is Listening...!");
    });