var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1');

client.on('error', function(error){
	console.log("Error while creating the socket connection");
});

client.set('vege', 'Onion', redis.print);

client.get('vege', function(error, value){
	if(error){
		throw error;
	}
	console.log('The vegetable is = ' + value);
});


var dataBase = [];
function storeInfo(){
	dataBase.push(name + ": " + message);
}

io.on('connection', function(socket){
	io.emit('')


