var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('hello');
});

app.get('/user', function(req, res){
	res.send('hello user');
});

app.listen(3000, function(){
	console.log('app is running');
});