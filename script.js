// STEP 1 //
console.log("script loaded");
var name = "";






// FUNCTIONS //
function prompter(){
	name = document.getElementById("newUser").value;
	console.log(name);
	msg = "Hey " + name + ", welcome to my sick chat!";
	alert(msg);
}	

function sendMessage(){
	console.log("Name is " + name);
	var message = document.getElementById("yourMessage").value;
	console.log("Message is " + message);
	document.getElementById("MessageDisplay").appendChild(document.createTextNode(name + ": " + message));
	document.getElementById("MessageDisplay").appendChild(document.createElement("br"));
}

// Server Thing //
var socket = io();

 		$('form').submit(function(){
 		socket.emit('chat message', $('#yourMessage').val());
 		$('#yourMessage').val('');
 		return false;
 		});

