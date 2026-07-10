const capitalize = require('./capitalize');

describe('capitalize', () => {
  test('it exists', () => {
    expect(capitalize).toBeDefined();
  });
  test('capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
  test('capitalizes the first letters of multiple words in a string', () => {
    expect(capitalize('hello world')).toBe('Hello World');
  });
  test('works with punctuation marks between words and multiple spaces', () => {
    const actual = capitalize('Application for a job, please.     Dear manager,')
    const expected = 'Application For A Job, Please. Dear Manager,';
    expect(actual).toBe(expected);
  });
  test('works with blank strings', () => {
    expect(capitalize('')).toBe('');
  })
});
