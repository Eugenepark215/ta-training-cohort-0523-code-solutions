import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
});

describe('toDollars', () => {
  it('returns a number formatted in dollars and cents', () => {
    const amount = 3.1;
    const result = toDollars(amount);
    expect(result).toEqual('$3.10');
  });
});

describe('divideBy', () => {
  it('returns a new array of numbers where every entry has been divided by the given divisor. Does not modify the original array.', () => {
    const numbers = [2, 4, 6, 8, 10];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('multiplyBy', () => {
  it('Modifies an object by multiplying the value of each key, but only if that value is a number. Key names are arbitrary.', () => {
    const obj = { 1: 1, 2: 2, 3: 3 };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ 1: 2, 2: 4, 3: 6 });
  });
});
