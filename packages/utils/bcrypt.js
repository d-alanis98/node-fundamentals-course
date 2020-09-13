const bcrypt = require('bcrypt');

const password = 'Aef445a!23.5';

bcrypt.hash(password, 10, (error, hash) => {
    console.log(hash);
    bcrypt.compare(password, hash, (error, same) => console.log(same));
});