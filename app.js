var express = require('express');
var http = require('http');
var app = express();

app.use(function(req, res, next){
	// remove x-powered-by
	res.removeHeader('X-Powered-By');
	// custom header
	res.setHeader('custom', 123);
	console.log('Method:', req.method, '; URL: ', req.url, '; Time: ',  new Date());
	next();
});

app.get('/', function(req, res){
	res.send('hello');
});

app.get('/users', function(req, res){
	res.send('hello user');
});

// use ? after parameter to add as optional parameter
app.get('/users/details/:id?/', function(req, res){
	var id = req.params.id;

	if(id == undefined)
		res.send('user id not provided');

	// res.send('user id: ' + id);
	res.send(req.params);
});

app.listen(3000, function(){
	console.log('app is running');
});