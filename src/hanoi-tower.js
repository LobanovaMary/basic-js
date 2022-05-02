const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  // Count of turns  (log n ) - 1
  let turns = 2 ** disksNumber - 1;
  let speedOnSec = turnsSpeed / 3600;
  let allSpeed = turns / speedOnSec;
  let objectHanoi = { turns: turns, seconds: Math.floor(allSpeed) };

  return objectHanoi;
}

module.exports = {
  calculateHanoi,
};
