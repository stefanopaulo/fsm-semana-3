console.log('inicio');

function time(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    });
}

time(2000)
    .then(() => console.log('opa'));

console.log('fim');