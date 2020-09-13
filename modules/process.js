/**
 * beforeExit: before the event loop is finished.
 */
process.on('beforeExit', () => {
    console.log('Process will end');
});

/**
 * exit: it gets fired when node finishes the event loop and closes its main process.
 */
process.on('exit', () => {
    console.log('Process was terminated');
});

/**
 * uncaughtException: It allows catching any error that has not been previously caught. This prevents Node from closing 
 * all children upon encountering an unhandled error.
 */
process.on('uncaughtException', (error, origin) => {
    console.log(`Uncaught exception in ${origin}`);
});

//Example, trying to execute a not defined function normally will terminate the node process, but with the uncaughtException we can avoid it
unexistingFunction();