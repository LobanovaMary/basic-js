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

  let name = members
    .map((elem) => {
      if (!elem) return '';
      if (typeof elem === 'string') {
        elem = elem.trim();
        return elem[0].toUpperCase();
      }
      return '';
    })
    .sort()
    .join('');

  return name ? name : false;
}

module.exports = {
  createDreamTeam,
};
