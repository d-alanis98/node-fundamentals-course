//Some global variables available
console.log(`Current directory name = ${__dirname}`);
console.log(`Current file name = ${__filename}`);
//Defining global variables
global.globalVariable = 'Not recommended to declare global variables, use only if strictly necessary';
console.log(globalVariable);

//Some functions available
let iteration = 0;
const interval = setInterval(() => {
    if(iteration === 3)
        clearInterval(interval);
    console.log('setInterval and clearInterval are part of the global module');
    iteration++;
}, 100);

setImmediate(() => console.log('setImmediate is part of the global module'));
setTimeout(() => console.log('setTimeout is part of the global module'), 500);

