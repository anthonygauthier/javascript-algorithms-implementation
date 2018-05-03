// Usage : node rabin-karp/app.js 'string' 'pattern'

const yargs = require('yargs');
const _     = require('lodash');

const argv    = yargs.argv;
const string  = argv._[0];
const pattern = argv._[1];

let rabinKarp = () => {
    let array = [],
        indexOf = 0; 

    while(indexOf != -1) {
        let offset = (indexOf === 0) ? indexOf : indexOf + 1;
        indexOf = string.indexOf(pattern, offset)

        if(indexOf != -1) 
            array.push(indexOf);
    }
        
    if(array.length === 0) {
        console.log(`Pattern '${pattern}' was not found in string '${string}'`);
    } else {
        console.log(`Pattern '${pattern}' was found at the following indices: ${array}`);
    }
}

rabinKarp(string);