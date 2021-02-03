let interval = setInterval(function(name){
  console.log(`Hello ${name}`);
}, 3000, 'fangqi');

let timer = setTimeout(function(interval){
  clearInterval(interval);
  console.log('cleared interval');
}, 30000, interval);

//ref(),unref()
timer.unref();

console.log('waiting on timer ...');

//setImmediate()
