const myNativeModule = require('./build/Release/module.node');

console.log(myNativeModule);
console.log(myNativeModule.hello());