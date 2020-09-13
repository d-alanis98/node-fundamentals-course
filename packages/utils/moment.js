const moment = require('moment');

const dateNow = moment();

console.log(dateNow.toString());

//Formatting date
console.log(dateNow.format('YYYY/MM/DD - HH:mm'));
