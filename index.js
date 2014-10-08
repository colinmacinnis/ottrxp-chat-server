console.log("script loaded");

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var name="";

app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.use("/style.css", express.static(__dirname + '/style.css'));
app.use("/script.js", express.static(__dirname + '/script.js'));

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(80, function(){
  console.log('listening on *:80');
});