const fs = require('fs');

const sharp = require('sharp');


sharp('./a.png').resize(300, 300).toFile('./b.png')