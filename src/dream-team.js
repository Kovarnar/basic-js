const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let arr = members.filter(item => (typeof item === 'string'))
    .map(item => item.replace(/ /g, ''))
    .map(item => item[0].toUpperCase())
    .sort();

  return arr.join('');
}

createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max'])
createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null])

module.exports = {
  createDreamTeam
};
