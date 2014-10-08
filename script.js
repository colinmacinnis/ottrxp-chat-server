///////////////////////////////// 
// "YOUR NAME" BUTTON FUNCTION //
/////////////////////////////////

var name = ""
	function prompter(){
		name = document.getElementById("newUser").value;
		console.log("Username: " + name);
		var helloUser = "Hey " + name + ", welcome to ottrChat!";
		alert(helloUser);
	}


////////////////////////////////////
// "SEND MESSAGE" BUTTON FUNCTION //
//	  & IT SHOWING UP IN CHAT BOX //
////////////////////////////////////
socket.on('chat message', function(msg){
    $('#MessageDisplay').append($('<p>').text(name + ": " + msg));
  	});

///////////////////////////////////
///////// SENDING STUFF? //////////
///////////////////////////////////
var socket = io();
	$('form').submit(function(){
 		socket.emit('chat message', name + ": " + $('#yourMessage').val());
 		$('#yourMessage').val('');
 		return false;
 	});


