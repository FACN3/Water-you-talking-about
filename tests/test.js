import test from 'tape';
import data from '../src/fixtures/data';
import calculator from '../src/lib/calculator';

test('Test #0', (t) => {
  const expected = {
    liters: 9,
    cost: 0.0801,
  };

  const actual = calculator(data, { toilet: 2 });
  t.deepEqual(actual, expected);
  t.end();
});

test('Test #1', (t) => {
  const expected = {
    liters: 56,
    cost: 0.4984,
  };

  const actual = calculator(data, { shower: 7 });
  t.deepEqual(actual, expected);
  t.end();
});

test('Test #2', (t) => {
  const expected = {
    liters: 65,
    cost: 0.5785,
  };

  const actual = calculator(data, { toilet: 2, shower: 7 });
  t.deepEqual(actual, expected);
  t.end();
});

test('Test #3', (t) => {
  const expected = {
    liters: 107.5,
    cost: 0.95675,
  };

  const actual = calculator(data, {
    toilet: 5,
    shower: 7,
    'Faucet tap': 3,
    'Washing machine': 2,
    Dishwasher: 1,
  });
  t.deepEqual(actual, expected);
  t.end();
});
