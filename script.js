// STEP 1 //
console.log("script loaded");
var name = "";



// EVENT FOR USING ENTER TO SEND MESSAGE //
document.getElementById("yourMessage").addEventListener('keydown',function(event){
	if (event.keyCode === 13){
		sendMessage();
	}
});



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


