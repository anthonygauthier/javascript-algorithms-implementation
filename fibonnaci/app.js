const yargs = require('yargs');
const _     = require('lodash');

const argv = yargs.argv;
const number = argv._[0];


let calc_fibonnaci = (n) => {
    let a = 0,
        b = 0,
        array = [],
        currentValue = 0;

    for(let i=1; i < n; i++) {
        if(a == 0) {
            a = 1;
        } else {
            b = a;
            a = currentValue;
        }

        currentValue = a + b;
        array.push(currentValue);
    }
    console.log(`Iterating fibonnaci ${n} times: ${array}`);
}

let outputSum_fibonnaci = (n) => {
    let a = 0,
        b = 0,
        currentValue = 0;
    
    while(currentValue != n) {
        if(a == 0) {
            a = 1;
        } else {
            b = a;
            a = currentValue
        }
        currentValue = a + b;
    }

    console.log(`The fibonnaci sum for ${n} = ${b} + ${a}`);
}

console.log('---------------------------------------------------------');
calc_fibonnaci(number);
console.log('---------------------------------------------------------');
outputSum_fibonnaci(number);
console.log('---------------------------------------------------------');