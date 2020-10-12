const fs = require('fs');

console.log('inicio');

function time(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(ms), ms)
    });
}

function readdir(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, function(err, list) {
            if (err) {
                reject(err);
            } else {
                resolve(list);
            }
        });
    });
}

async function ola() {
    const list = await readdir('./');
    console.log(list);
}

console.log(ola());
