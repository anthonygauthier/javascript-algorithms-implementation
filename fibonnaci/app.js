const yargs = require('yargs');
const _     = require('lodash');

const argv = yargs.argv;
const number = argv._[0];


function fibonnaci(n) {
    var a = 0,
        b = 0,
        currentValue = 0;

    for(var i=1; i < n; i++) {
        if(a == 0) {
            a = 1;
        } else {
            b = a;
            a = currentValue;
        }

        currentValue = a + b;
        console.log(currentValue);
    }
}

fibonnaci(number);