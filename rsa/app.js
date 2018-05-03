// Usage : node rabin-karp/app.js 'string' 'pattern'

const yargs = require('yargs');
const _     = require('lodash');

const argv          = yargs.argv;
const strToEncrypt  = argv._[0];

let encrpyt = () => {
    let ret = null;

    return ret;
}

let decrypt = () => {
    let ret = null;

    return ret;
}

console.log(`Message has been encrypted and is now equal to ${encrypt(strToEncrypt)}`);
console.log(`Message has been decrypted and is equal to ${decrypt(encrpyt(strToEncrypt))}`)

