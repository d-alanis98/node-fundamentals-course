const name = process.env.NAME || 'John Doe';
const message = process.env.MESSAGE;

const greet = name => {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            console.log(`Hi ${name}!`);
            resolve(name);
        }, 2000)
    );
}

const goodbye = name => {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            console.log(`Goodbye ${name}!`);
            resolve(name);
        }, 1000)
    );
}

const talk = (name, message) => {
    return new Promise((resolve, reject) => {
        if(!message || typeof(message) !== 'string')
            reject(new Error('Message required'));
        setTimeout(() => {
            console.log(message);
            resolve(name);
        }, 500);
    });
}

greet(name)
    .then(name => talk(name, message))
    .then(goodbye)
    .then(name => console.log(`Exiting process`))
    .catch(error => console.log(error));