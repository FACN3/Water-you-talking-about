import test from 'tape';

// var test = require('tape');

test('Testing Travis', (t) => {
  const actual = 1;
  const expected = 1;
  t.equal(actual, expected, 'Should return 1 when given 1');
  t.end();
});
