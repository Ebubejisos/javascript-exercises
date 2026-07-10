const analyzeArray = require('./analyzeArray');

describe('analyzedArray', () => {
  test('module exists', () => {
    expect(analyzeArray).toBeDefined();
  });

  test('should analyse an array of number and return an object', () => {
    const actual = analyzeArray([1, 8, 3, 4, 2, 6]);
    const expected = {
      average: 4,
      min: 1,
      max: 8,
      length: 6
    };
    expect(actual).toEqual(expected);
  });
});
