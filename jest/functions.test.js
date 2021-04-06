
const functions = require('../functions.js')


test('squares two numbers', () => {
    expect(functions.square(5)).toBe(25)
});


describe('finds area', () => {
    test('calculates rectangle', () => {
        expect(functions.area(4, 6)).toBe("rectangle: 24");
    });
    test('calculates square with one argument', () => {
        expect(functions.area(5)).toContain("square: 25");
    });
    test('calculates square with two arguments', () => {
        expect(functions.area(6, 6)).toContain("square: 36");
    });
});

test('checks if number bigger than ten', () => {
    expect(functions.biggerThanTen(33)).toBeTruthy()
    expect(functions.biggerThanTen(4)).toBeFalsy()
});

test('correct number of even and odds', () => {
    expect(functions.evenOdd(1, 10)).toBe("even: 5, odd: 5")
});

test('to be less than 1000', () => {
    const load1 = 400;
    const load2 = 400;
    expect(load1 + load2).toBeLessThan(1000);
});

test('arrays content', () => {
    fruits = ['apple', 'banana', 'pear', 'peach'];
    expect(fruits).toContain('pear');
})