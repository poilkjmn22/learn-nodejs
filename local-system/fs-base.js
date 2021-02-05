const fs = require('fs');
const util = require('util');
// const StatMode = require('stat-mode');

fs.stat(__dirname + '/os-base.js', function(err, stat) {
	if(err) {
		return console.log(err);
	}
	console.log(util.inspect(stat));

  // const mode = new StatMode(stat);

  // console.log(mode.toString());
});
