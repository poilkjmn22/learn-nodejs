const http = require('http');
const fs = require('fs');
const path = require('path');
const base = __dirname;

http.createServer(function(req, res) {
	let pathname = path.normalize(base + req.url);
	console.log(pathname);

	fs.stat(pathname, function(err, stats) {
		if(err) {
			res.writeHead(404);
			res.write('文件不存在');
			res.end();
		} else if(stats.isFile()) {
      res.setEncoding('utf8');
			res.setHeader('Content-Type', 'text/html');
			//创建/发送可读流
			let file = fs.createReadStream(pathname);
			file.on('open', function() {
				res.statusCode = 200;
				file.pipe(res);
			});

			file.on('error', function(err) {
				console.log(err);
				res.writeHead(403);
				res.write('文件不存在或者权限出错');
				res.end();
			});
		} else {
			res.write(403);
			res.write('你没有权限访问该目录');
			res.end();
		}
	});
}).listen(8124);

console.log('server running at 8124');
