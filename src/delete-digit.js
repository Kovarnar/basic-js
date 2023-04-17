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
  if (n < 10) return 0;

  let arr = [];
  let num;
  while(n) {
    num = n % 10;
    n = Math.floor(n / 10);
    arr.push(num);
  }
  arr.reverse();

  if (arr[0] < arr[1]) {
    arr.shift();
  } else {
    let min = Math.min(...arr);
    let index = arr.indexOf(min, 1);
    arr.splice(index, 1);
  }

  return +arr.join('');
}

module.exports = {
  deleteDigit
};
