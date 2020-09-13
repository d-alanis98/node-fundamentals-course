const sharp = require('sharp');

sharp('./img/20170429_163621.jpg')
    .resize(150)
    .grayscale()
    .toFile('./img/resized.jpg');