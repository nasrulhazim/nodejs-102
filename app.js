var express = require('express');
var app = express();

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

	res.send('user id: ' + id);
});

app.listen(3000, function(){
	console.log('app is running');
});