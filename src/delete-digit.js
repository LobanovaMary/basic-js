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
  const str = String(n).split('');
  const sortArr = [...str].sort((a, b) => a - b);

  const index1 = str.indexOf(String(sortArr[0]));
  const index2 = str.indexOf(String(sortArr[1]));

  const num1 = [...str];
  const num2 = [...str];
  num1[index1] = '';
  num2[index2] = '';

  return Number(num1.join('')) >= Number(num2.join(''))
    ? Number(num1.join(''))
    : Number(num2.join(''));
}

module.exports = {
  deleteDigit,
};
