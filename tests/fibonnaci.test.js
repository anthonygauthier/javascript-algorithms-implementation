const expect = require('expect');
const fibonnaci = require('../fibonnaci/app.js');

describe('Tests concerning the fibonnaci algo', () => {
    it('should return an array of 12', () => {
        let results = fibonnaci.calc_fibonnaci(13);
        expect(results.length).toBe(13);
    }); 

    it('should return the numbers 8 and 5', () => {
        let results = fibonnaci.outputSum_fibonnaci(13);
        expect(results[0]).toBe(8);
        expect(results[1]).toBe(5);
    });
});