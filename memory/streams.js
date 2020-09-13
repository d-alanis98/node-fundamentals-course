/**
 * An stream is a process to consume data, that usually is transmited in chunks.
 */
const fs = require('fs');
const util = require('util');
const stream = require('stream');

let data = '';

//We create or 'open' a new stream
let readableStream = fs.createReadStream(`${__dirname}/input.txt`);
//We specify encoding
readableStream.setEncoding('utf-8');

//Events

//On data
readableStream.on('data', chunk => {
    data += chunk
});

//On end
readableStream.on('end', () => console.log(data));

//With stream
const Transform = stream.Transform;

function Upper() {
    Transform.call(this);
}

//Upper extends Tranform
util.inherits(Upper, Transform);

Upper.prototype._transform = function(chunk, codification, onSuccess) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    onSuccess();
}

let upper = new Upper();

readableStream
    .pipe(upper)
    .pipe(process.stdout);




