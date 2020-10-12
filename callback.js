const fs = require('fs');

console.log('inicio');

fs.readdir('./', function(err, lista) {
    if (err) {
        console.log(err);
    } else {
        console.log(lista);
    }
});

console.log('fim');
