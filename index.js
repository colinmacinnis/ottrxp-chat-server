console.log("script loaded");

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var name="";
var msg="Hey " + name + ", welcome to my sick chat!";

app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.use("/style.css", express.static(__dirname + '/style.css'));

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(80, function(){
  console.log('listening on *:80');
});

function prompter(){
	name = document.getElementById("newUser").value;
	console.log(name);
	var helloUser = "Hey " + name + ", welcome to my sick chat!";
	alert(helloUser);
}