const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;

  if(Array.isArray(matrix[0])) {
    let col = matrix[0].length;
    let row = matrix.length;

    for (let i = 0; i < col; i++) {
      for (let j =0; j < row; j++) {
        if (matrix[j][i]) {
          sum += matrix[j][i];
        }
        else break;
      }
    }
    return sum;
  }

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i]) sum += matrix[i];
    else return sum;
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
