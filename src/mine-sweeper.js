const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    result.push([...matrix[i]]);

    for (let k = 0; k < matrix[i].length; k++) {
      let count = 0;
      if (i - 1 >= 0) {
        if (matrix[i - 1][k]) count++;
      }
      if (i + 1 < matrix.length) {
        if (matrix[i + 1][k]) count++;
      }
      if (k - 1 >= 0) {
        if (matrix[i][k - 1]) count++;
      }
      if (k + 1 < matrix[i].length) {
        if (matrix[i][k + 1]) count++;
      }

      if (i - 1 >= 0 && k - 1 >= 0) {
        if (matrix[i - 1][k - 1]) count++;
      }
      if (i - 1 >= 0 && k + 1 < matrix[i].length) {
        if (matrix[i - 1][k + 1]) count++;
      }
      if (i + 1 < matrix.length && k - 1 >= 0) {
        if (matrix[i + 1][k - 1]) count++;
      }
      if (i + 1 < matrix.length && k + 1 < matrix[i].length) {
        if (matrix[i + 1][k + 1]) count++;
      }
      result[i][k] = count;
    }
  }

  return result;
}

module.exports = {
  minesweeper,
};
