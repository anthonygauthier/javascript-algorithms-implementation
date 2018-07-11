const expect = require('expect');
const {binarySearch} = require('../searches/binarySearch');

describe('Tests concerning the binary search algo', () => {
    let x = 3,
        y = 999;
    it(`number ${x} should be in array`, () => {
        expect(binarySearch(x)).toBe(true);
    }); 

    it(`number ${y} shouldn\'t be in array`, () => {
      expect(binarySearch(y)).toBe(false);
  }); 
});