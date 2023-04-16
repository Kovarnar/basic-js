const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrOne = [];
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    (arr[i] === -1) ? arrOne.push(i) : newArr.push(arr[i]);
  }
  newArr.sort((a, b) => a - b);
  for (i = 0; i < arrOne.length; i++) {
    newArr.splice(arrOne[i], 0, -1);
  }
  return newArr;
}
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))

module.exports = {
  sortByHeight
};
