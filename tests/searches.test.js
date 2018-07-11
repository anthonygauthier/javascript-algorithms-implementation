const expect = require('expect');
const {selectionSearch} = require('../searches/selectionSeach');

describe('Tests concerning the selection search algo', () => {
    let x = 3,
        y = 999;
    it(`number ${x} should be in array`, () => {
        expect(selectionSearch(x)).toBe(true);
    }); 

    it(`number ${y} shouldn\'t be in array`, () => {
      expect(selectionSearch(y)).toBe(false);
  }); 
});