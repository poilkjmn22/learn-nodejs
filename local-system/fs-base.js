const fs = require('fs');
const util = require('util');
const path = require('path');
// const StatMode = require('stat-mode');

fs.stat(__dirname + '/os-base.js', function(err, stat) {
	if(err) {
		return console.log(err);
	}
	console.log(util.inspect(stat));

  // const mode = new StatMode(stat);

  // console.log(mode.toString());
});

fs.writeFile('/Users/fangqi-apple/Documents/BackendDev/learn-nodejs/write-dir/some.txt', 'Writing to a file', err => {
	if (err) {
		return console.error(err);
	}
	fs.readFile('/Users/fangqi-apple/Documents/BackendDev/learn-nodejs/write-dir/some.txt', 'utf-8', (data, err) => {
		if (err) {
			return console.error(err);
		}
		console.log(data);
	})
});

fs.open(path.resolve(__dirname, '../write-dir/new.txt'), 'a+', 0x666, (err, fd) => {
	if (err) {
		return console.error(err);
	}
	fs.write(fd, 'First Line', 'utf-8', (err, written) => {
		if (err) {
			return console.error(err);
		}
		let buf = new Buffer(written);
		fs.read(fd, buf, 0, written, 0, (err) => {
			if (err) {
				return console.error(err);
			}
			console.log(buf.toString('utf8'));
		})
	})
})
