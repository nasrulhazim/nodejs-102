var express = require('express');
var path = require('path');
var app = express();

// Configure view
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Configure header
app.use(function(req, res, next){
	// remove x-powered-by
	res.removeHeader('X-Powered-By');
	// custom header
	res.setHeader('custom', 123);
	console.log('Method:', req.method, '; URL: ', req.url, '; Time: ',  new Date());
	next();
});

// Route
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

app.get('/users/:id/show', function(req, res){
	res.render('users/show', {foo:'some foo'});
});

app.listen(3000, function(){
	console.log('app is running');
});