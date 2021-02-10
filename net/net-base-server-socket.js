
var net = require('net');
var fs = require('fs');

const unixsocket = '/Users/fangqi-apple/Documents/BackendDev/learn-nodejs/net/nodesocket';

var server = net.createServer(function(conn){
	console.log('connected');

	conn.on('data', function(data){
		console.log(`${data} from ${conn.remoteAddress} ${conn.remotePort}`);
		conn.write(`repeating: ${data}`);
	});
	
	conn.on('close', function(){
		console.log('client closed connection');
	});
}).listen(unixsocket);

server.on('listening', function(){
	console.log('listening on ' + unixsocket);
});

server.on('error', function(err){
	if(err.code === 'EADDRINUSE'){
		fs.unlink(unixsocket, function(){
			server.listen(unixsocket);
		});
	}else{
		console.error(err);
	}
});

process.on('uncaughtException', function(err){
	console.error(err);
});
