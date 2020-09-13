const os = require('os');

//OS architecture
console.log(os.arch());

//Platform
console.log(os.platform());

//CPU info
console.log(os.cpus());

//Constants
console.log(os.constants);

//Free memory os.freemem()
const SIZE = 1024;
const toKB = bytes => bytes / SIZE;
const toMB = bytes => toKB(bytes) / SIZE;
const toGB = bytes => toMB(bytes) / SIZE;
console.log(`Free memory in GB = ${toGB(os.freemem()).toFixed(3)} GB`);

//Total memory
console.log(`Total memory in GB = ${toGB(os.totalmem()).toFixed(3)} GB`);

//Home directory
console.log(os.homedir());

//Temp directory
console.log(os.tmpdir());

//Hostname
console.log(os.hostname());

//Network interfaces
console.log(os.networkInterfaces());