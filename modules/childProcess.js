const { exec, spawn } = require('child_process');

/**
 * exec
 * Executes a command and returns a buffer with the stdout
 */
exec('ls -1 | wc -l', (error, stdout, stderror) => {
    if(error) {
        console.error(error);
        return;
    }
    console.log(stdout)
});


/**
 * spawn
 * Executes a command and returns binary data of stdout.
 * Event oriented.
 */
                    //Command  //Args
let spawnProcess = spawn('ls', ['-la']);

spawnProcess.stdout.on('data', data => {
    console.log(data);
    console.log(`Is the process dead? ${process.killed}`);
})

