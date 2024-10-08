
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('whole float', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('rounding down a', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('rounding down b', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('rounding down a and b', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('rounding up a', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('rounding up b', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('rounding up a and b', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('rounding down a and b with trailing 9s', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});

