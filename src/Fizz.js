'use strict';

import pkg from '../package.json';

/**
 * The real FizzBuzz
 */
class Fizz {
  /**
   * Buzz some numbers
   * @param  {Integer[]} numbers
   * @throws {TypeError}
   * @return {Mixed[]}
   */
  static buzz(numbers) {
    if (!Array.isArray(numbers)) throw new TypeError('Argument "numbers" must be an instance of "Array".');
    return numbers.map((number, i) => {
      if (!Number.isInteger(number)) throw new TypeError(`Non integer element found at position "${i}".`);
      if (-1 !== number.toString().indexOf('3')) return 'lucky';
      if (0 === number % 15) return 'fizzbuzz';
      if (0 === number % 3) return 'fizz';
      if (0 === number % 5) return 'buzz';

      return number;
    });
  }

  /**
   * Write array to standard output
   * @param  {Array} arr
   * @throws {TypeError}
   * @return {Boolean}
   */
  static write(arr) {
    if (!Array.isArray(arr)) throw new TypeError('Argument "arr" must be an instance of "Array".');

    return process.stdout.write(`${arr.join(' ')}\n`);
  }

  /**
   * Return the current version
   * @return {String}
   */
  static version() {
    return pkg.version;
  }
}

export default Fizz;
