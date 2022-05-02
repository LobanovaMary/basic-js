const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = String(n);
  for (let i = 0; i < 10; i++) {
    if (str.includes(`${i}`)) {
      let arr = str.split('');
      arr.splice(str.indexOf(`${i}`), 1).join('');
      return Number(arr.join(''));
    }
  }
}

module.exports = {
  deleteDigit,
};
