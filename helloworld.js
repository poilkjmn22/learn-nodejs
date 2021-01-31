var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello World(served by nodejs)\n');
}).listen(8124);

console.log('Server is running at http://127.0.0.1:8124/');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function(){
  var input = process.stdin.read();

  if (input !== null) {
    //echo the text
    process.stdout.write(input);

    var command = input.trim();
    if (command == 'exit') {
      process.exit(0);
    }
  }
});
