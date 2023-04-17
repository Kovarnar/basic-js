const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  if (email.indexOf('@') === -1) return false;
  let index = [];

  for (let i = 0; i < email.length; i++) {
    if(email[i] === '@') index.push(i);
  }

  return email.slice(index[index.length-1] + 1)
}

module.exports = {
  getEmailDomain
};
