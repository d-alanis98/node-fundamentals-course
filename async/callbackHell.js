const name = process.env.NAME || 'John Doe';
const DEFAULT_MESSAGE = 'Bla bla bla';

const greet = (name, callback) => {
    console.log(`Hi ${name}!`)
    setTimeout(() => callback(name), 1000);
}

const goodbye = (name) => setTimeout(() => console.log(`Goodbye ${name}!`), 1000);

const talk = callback => {
    setTimeout(() => {
        console.log(DEFAULT_MESSAGE);
        callback();
    }, 100);
}


/**
 * Callback hell version
 */
greet(name, name => {
    talk(() => {
        talk(() => {
            talk(() => {
                talk(() => {
                    goodbye(name);
                })
            })
        })
    })
})


/**
 * Recursive approach solution to callback hell
 */

const conversation = (name, times, callback) => {
    if(times > 0)
        talk(() => conversation(name, --times, callback));
    else callback(name);
}

greet(name, name => conversation(name, 10, goodbye));

