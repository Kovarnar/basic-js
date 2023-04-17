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
  let newMatrix = [];
  const rows = matrix.length,
        cols = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    newMatrix[i] = [];
    for (let j = 0; j < cols; j++) {
      let mines = 0;

      for (let row = i - 1; row <= i + 1; row++) {
        for (let col = j - 1; col <= j + 1; col++) {
          if (row >= 0 && row < rows && col >= 0 && col < cols) {
            if (matrix[row][col]) mines++;
          }
        }
      }
      if (matrix[i][j]) mines--;
      newMatrix[i][j] = mines;
    }
  }
  return newMatrix;
}

module.exports = {
  minesweeper
};
