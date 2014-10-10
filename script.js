///////////////////////////////// 
// "YOUR NAME" BUTTON FUNCTION //
/////////////////////////////////
var name = document.getElementById("newUser").value;

function prompter(){
	name = document.getElementById("newUser").value;
	console.log("Username: " + name);
	if(name.length === 0){
		alert("ERROR: Sorry amigo, you gotta enter a name first..");
	} else {
		alert("Hey " + name + ", welcome to ottrChat!");
	}
};

////////////////////////////////////
// "SEND MESSAGE" BUTTON FUNCTION //
//	  & IT SHOWING UP IN CHAT BOX //
////////////////////////////////////

var socket = io();
	$('form').submit(function(){
 		socket.emit('chat message', name + ": " + $('#yourMessage').val());
 		$('#yourMessage').val('');
 		return false;
 	});

socket.on('chat message', function(msg){
    $('#MessageDisplay').append($('<p>').text(msg));
});
//Carol moved to HTML for text //
