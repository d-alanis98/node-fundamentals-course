//TIME

let sum = 0;

console.group('Time measure');
console.time('Loop time');
for(let iterator = 0; iterator < 100000000; iterator++) {
    sum += iterator;
}
console.timeEnd('Loop time');
console.log(sum);
console.groupEnd('Time measure');