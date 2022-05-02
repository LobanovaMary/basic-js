const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  currentChain: [],
  getLength() {
    return currentChain.length;
  },
  addLink(value) {
    this.currentChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      isNaN(position) ||
      position < 1 ||
      position > this.currentChain.length
    ) {
      this.currentChain = [];
      throw Error(`You can't remove incorrect link!`);
    }
    this.currentChain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.currentChain = this.currentChain.reverse();
    return this;
  },
  finishChain() {
    let str = this.currentChain.join('~~');
    this.currentChain = [];
    return str;
  },
};

module.exports = {
  chainMaker,
};
