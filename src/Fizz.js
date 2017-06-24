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
   * Crunch numbers
   * @param  {Array} arr
   * @throws {TypeError}
   * @return {Object}
   */
  static produceReport(arr) {
    if (!Array.isArray(arr)) throw new TypeError('Argument "arr" must be an instance of "Array".');

    return arr.reduce((acc, val) => {
      if ('fizz' === val) acc.fizz += 1;
      if ('buzz' === val) acc.buzz += 1;
      if ('fizzbuzz' === val) acc.fizzbuzz += 1;
      if ('lucky' === val) acc.lucky += 1;
      if (Number.isInteger(val)) acc.integer += 1;

      return acc;
    }, {
      fizz     : 0,
      buzz     : 0,
      fizzbuzz : 0,
      lucky    : 0,
      integer  : 0
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
   * Write report to standard output
   * @param  {Object} report
   * @throws {TypeError}
   * @return {Boolean}
   */
  static writeReport(report) {
    if (!(report instanceof Object)) throw new TypeError('Argument "report" must be an instance of "Object".');

    return process.stdout.write(
      `fizz: ${report.fizz}\n` +
      `buzz: ${report.buzz}\n` +
      `fizzbuzz: ${report.fizzbuzz}\n` +
      `lucky: ${report.lucky}\n` +
      `integer: ${report.integer}`
    );
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
