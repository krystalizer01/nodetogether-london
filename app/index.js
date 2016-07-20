var Express = require('express');
var app = Express();

app.get('/hello', function(request, response) {
	response.send("Hello");
});

app.get('/hi', function(request, response) {
	response.send("Hi");
});

module.exports = app;