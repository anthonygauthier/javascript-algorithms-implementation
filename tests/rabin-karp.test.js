const expect = require('expect');
const {rabinKarp} = require('../rabin-karp/app.js');

describe('Tests concerning the rabin-karp algo', () => {
    it('should return two indices', () => {
        let someText = 'Hello world! This is indeed a very interesting world.';
        let res = rabinKarp(someText, 'world');

        expect(res.length).toBe(2);
    }); 
});