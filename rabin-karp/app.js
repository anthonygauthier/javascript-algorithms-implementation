// Usage : node rabin-karp/app.js 'string' 'pattern'

const yargs = require('yargs');
const _     = require('lodash');

const argv    = yargs.argv;
const string  = argv._[0];
const pattern = argv._[1];

let rabinKarp = (str, patt) => {
    let array = [],
        indexOf = 0; 

    while(indexOf != -1) {
        let offset = (indexOf === 0) ? indexOf : indexOf + 1;
        indexOf = str.indexOf(patt, offset)

        if(indexOf != -1) 
            array.push(indexOf);
    }
        
    return array;
}

module.exports = {
    rabinKarp
}