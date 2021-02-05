const os = require('os');

console.log(os.cpus());

console.log(`using end of line ${os.EOL} to insert a new line`);

console.log(`big-endian or little-endian: ${os.endianness}`);

console.log(`临时目录：${os.tmpdir}`);
console.log(`home目录：${os.homedir}`);

console.log(os.freemem());
console.log(os.loadavg());
console.log(os.totalmem());
console.log(`空闲内存：${Math.round(100 * os.freemem() / os.totalmem())}%`);

//更多有关CPU的信息，请参考微软Azure
