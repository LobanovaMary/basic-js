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
  const strArr = String(n).split('');

  for (let i = 0; i < 9; i++) {
    const str = String(i);
    if (strArr.includes(str)) {
      delete strArr[strArr.indexOf(str)];
      break;
    }
  }

  return Number(strArr.join(''));
}

module.exports = {
  deleteDigit,
};
