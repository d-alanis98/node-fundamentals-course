//Allocate 4 bytes
let buffer = Buffer.alloc(20);
//Buffer from primitive data types (array is the only exception)
let bufferFromArray = Buffer.from([1,2,3,4,5]);
let bufferFromString = Buffer.from('Hello world');


console.log(bufferFromArray);
console.log(bufferFromString.toString());

//Accesing the allocated positions in memory
for(let iterator = 0; iterator < 40; iterator++) {
    buffer[iterator] = iterator + 97; //ASCII code for a
}

//Raw (HEX)
console.log(buffer);
//To string
console.log(buffer.toString())

