var net = require('net');
const PORT = 8124;

var server = net.createServer(function(conn){
	console.log('connected');

	conn.on('data', function(data){
		console.log(`${data} from ${conn.remoteAddress} ${conn.remotePort}`);
		conn.write(`repeating: ${data}`);
	});
	
	conn.on('close', function(){
		console.log('client closed connection');
	});
}).listen(PORT);

server.on('listening', function(){
	console.log('listening on ' + PORT);
});

server.on('error', function(err){
	if(err.code === 'EADDRINUSE'){
		console.warn('地址已经被使用，请重试......');
		setTimeout(() => {
			server.close();
			server.listen(PORT);
		}, 1000);
	}else{
		console.error(err);
	}
});
