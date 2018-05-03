// Usage : node fibonnaci/app.js fibInteger

const yargs = require('yargs');
const _     = require('lodash');

const argv = yargs.argv;
const number = argv._[0];


let calc_fibonnaci = (n) => {
    let a = 0,
        b = 0,
        array = [],
        y = 0;

    for(let i=1; i <= n; i++) {
        if(a == 0) {
            a = 1;
        } else {
            b = a;
            a = y;
        }

        y = a + b;
        array.push(y);
    }
    return array;
}

let outputSum_fibonnaci = (n) => {
    let a = 0,
        b = 0,
        y = 0;
    
    while(y != n) {
        if(a == 0) {
            a = 1;
        } else {
            b = a;
            a = y
        }
        y = a + b;
    }
    return [a,b];
}

module.exports = {
    calc_fibonnaci,
    outputSum_fibonnaci
}