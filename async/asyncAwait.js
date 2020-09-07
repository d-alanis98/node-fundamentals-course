const userName = process.env.NAME || 'John Doe';
const message = process.env.MESSAGE || 'Bla bla bla';

const greet = async (name) => {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            console.log(`Hi ${name}!`);
            resolve(name);
        }, 2000)
    );
}

const goodbye = async (name) => {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            console.log(`Goodbye ${name}!`);
            resolve(name);
        }, 1000)
    );
}

const talk = async (name, message) => {
    return new Promise((resolve, reject) => {
        if(!message || typeof(message) !== 'string')
            reject(new Error('Message required'));
        setTimeout(() => {
            console.log(message);
            resolve(name);
        }, 500);
    });
}

(async function(){
    let name = await greet(userName);
    await talk(name, message);
    await talk(name, 'Custom message');
    await talk(name, 'Exiting process');
}());

