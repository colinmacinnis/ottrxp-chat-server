console.log("Script loaded");

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// ------------------- Adding Redis --------------------
var redis = require("redis");
var client = redis.createClient();

client.on("error", function (err) {
	console.log("Error " + err);
});

client.set("app name", "OttrChat", redis.print);
// -----------------------------------------------------

app.get('/', function(request, response){
  response.sendFile(__dirname + '/index.html');
});

app.use("/style.css", express.static(__dirname + "/style.css"));
app.use("/imageedit_2_3707760900.gif", express.static(__dirname + "/imageedit_2_3707760900.gif"));

io.on('connection', function(socket){
	client.get("app name", function(err, reply){
		console.log("App name is", reply);
	});

	client.hgetall("history", function(err, replies){
		socket.emit("history", replies);
	});

	console.log("User connected");
	io.emit('chat message', 'New user joined');
	socket.on('disconnect', function(){
		console.log('A user has disconnected');
		io.emit('chat message', 'A user left');
	});

	socket.on('chat message', function(msg){
    	console.log('message: ' + msg);
    	socket.broadcast.emit('chat message', msg);
    	client.incr('msg_id', function(err, msg_id){
    		console.log('msg_id', msg_id);
    		client.hset('history', msg_id, msg);
    	});
  	});
 });


// THE WHOLE MESSAGE SHIT SHOW EXPLAINED
// 1. There are 2 messages involved in a single message. "#yourMessage" - the actual shit you type on your computer - and "msg" - the server's message.
// 2. The difference between "socket" and "io" is that socket is your computer's connection to the server while "io" is everyone.
// 3. So the blurb above means while publically connected the server is listening for individual socket messages - hence socket.on('chat message', msg) - it then performs an io.emit (AKA publically emit what that msg is).
// 4. Ultimately you type a message (classified as #yourMessage) and it's sent up to the server via a socket (or new customer at a fastfood restaurant). It then grabs your message and broadcasts/emits publically (through io) appending the message you sent to the #messageDisplay.


http.listen(80, function(){ 
	console.log("listening on *:80"); 
});