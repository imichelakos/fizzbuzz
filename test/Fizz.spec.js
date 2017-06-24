'use strict';

import { assert } from 'chai';
import Fizz from '../src/Fizz';
import pkg from '../package.json';

/** @test {Fizz} */
describe(`${pkg.name}/Fizz`, () => {
  const numberGenerator = (length) => {
    const res = [];
    for (let i = 1; i <= length; i += 1) res.push(i);
    return res;
  };

  /** @test {Fizz#buzz} */
  describe('#buzz', () => {
    it('Throw a type error if argument is not an instance of array.', () => {
      assert.throws(() => Fizz.buzz(1), TypeError, 'Argument "numbers" must be an instance of "Array".');
    });

    it('Throw a type error if an element of the given array is not of type integer.', () => {
      assert.throws(() => Fizz.buzz([1, 2, 'x']), TypeError, 'Non integer element found at position "2".');
    });

    it('Should return an array and substitude any element with the word "fizz" if it is a multiple of 3.', () => {
      assert.deepEqual(Fizz.buzz([3]), ['fizz']);
    });

    it('Should return an array and substitude any element with the word "buzz" if it is a multiple of 5.', () => {
      assert.deepEqual(Fizz.buzz([5]), ['buzz']);
    });

    it('Should return an array and substitude any element with the word "fizzbuzz" if it is a multiple of 15.', () => {
      assert.deepEqual(Fizz.buzz([15]), ['fizzbuzz']);
    });

    it('Should return an array and do not substitude any value if it is not a multiple of 3, 5 or 15.', () => {
      assert.deepEqual(Fizz.buzz([1]), [1]);
    });

    it('Should return an array and substitude elements if they are a multiple of 3, 5 or 15.', () => {
      assert.deepEqual(Fizz.buzz(numberGenerator(20)), [
        1,
        2,
        'fizz',
        4,
        'buzz',
        'fizz',
        7,
        8,
        'fizz',
        'buzz',
        11,
        'fizz',
        13,
        14,
        'fizzbuzz',
        16,
        17,
        'fizz',
        19,
        'buzz'
      ]);
    });
  });

  /** @test {Fizz#write} */
  describe('#write', () => {
    it('Throw a type error if argument is not an instance of array.', () => {
      assert.throws(() => Fizz.write(1), TypeError, 'Argument "arr" must be an instance of "Array".');
    });

    it('Write to standard output', () => {
      assert.isTrue(Fizz.write(['1', '2']));
    });
  });

  /** @test {Fizz#version} */
  describe('#version', () => {
    it('Should return the current version', () => {
      assert.equal(Fizz.version(), pkg.version);
    });
  });
});
