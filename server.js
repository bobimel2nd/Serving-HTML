// Dependencies
var http = require("http");
var fs = require("fs");
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});

function handleRequest(req, res) {
	var path = getPath(req.url)
	fs.readFile(path, function(err, data) {
		res.writeHead(((path !== __dirname + "/404.html") ? 200 : 404), { "Content-Type": "text/html" });
		res.end(data);
	});
}

function getPath(url) {
	if (url === "/") return __dirname + "/index.html"
	else if (fs.existsSync(__dirname + url + ".html")) return __dirname + url + ".html"
	else return __dirname + "/404.html"
}