let index = require('./index.js');

describe('Test sum function', () => {
   test('Check addition with two positive: 2+2=4', () => {
      expect(index.sum(2, 2, "+")).toBe(4)
   }); 
   test('Check addition with negative and positive: 2+(-3)=-1', () => {
      expect(index.sum(2, -3, "+")).toBe(-1)
   }); 
   test('Check mult with two positives: 4*4=16', () => {
      expect(index.sum(4, 4, "*")).toBe(16);
   });
   test('Check mult with one negative: 4*(-4)=(-16)', () => {
      expect(index.sum(4, -4, "*")).toBe(-16);
      expect()
   });
   test('Check 5/5=1', () => {
      expect(index.sum(5, 5, "/")).toBe(1);
   });
   test('Check 6-6=0', () => {
      expect(index.sum(6, 6, "-")).toBe(0);
   });
});




 // test('Check is 5 + 10 is truthy', () => {
   //    expect(numberToAdd.add() === 15).toBeTruthy();
   // });
   // test('Check if numbers switched around is truthy', () => {
   //    expect(numberToAddReversed.add()).toEqual(15);
   // });