const fs = require('fs');
const Console = require('console').Console;

const output = fs.createWriteStream('./write-dir/stdout.log');
const errOutput = fs.createWriteStream('./write-dir/stderr.log');

const logger = new Console(output, errOutput);

let count = 5;
logger.log('count: %d', count);
logger.error(`count: ${count}`);

console.time('the-loop');
for (var i = 0; i < 10000; i++) {
  ;
}
console.timeEnd('the-loop');
