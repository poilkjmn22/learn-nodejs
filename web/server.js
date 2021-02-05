const http = require('http');

let server = http.createServer().listen(8124);
server.on('request', function(req, res) {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Web\n');

  console.log(req.headers);
  console.log(req.rawHeaders);
});

console.log('server listening on 8124');
