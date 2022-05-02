const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

const mapAl = new Map([
  ['A', 0],
  ['B', 1],
  ['C', 2],
  ['D', 3],
  ['E', 4],
  ['F', 5],
  ['G', 6],
  ['H', 7],
  ['I', 8],
  ['J', 9],
  ['K', 10],
  ['L', 11],
  ['M', 12],
  ['N', 13],
  ['O', 14],
  ['P', 15],
  ['Q', 16],
  ['R', 17],
  ['S', 18],
  ['T', 19],
  ['U', 20],
  ['V', 21],
  ['W', 22],
  ['X', 23],
  ['Y', 24],
  ['Z', 25],
]);

function getKeyByValue(array) {
  let tempArr = [];
  array.forEach((value) => {
    for (let entries of mapAl) {
      if (entries[1] === value) tempArr.push(entries[0]);
    }
  });
  return tempArr;
}

function createKeyArr(key) {
  let arr = key.toUpperCase().split('');
  let keyArr = [];
  arr.forEach((item) => {
    keyArr.push(mapAl.get(item));
  });
  return keyArr;
}
function createIndexCrypt(arrMessage, arrKey) {
  const arrayCipher = [];
  arrMessage.forEach((item, index) => {
    arrayCipher.push((item + arrKey[index % arrKey.length]) % 26);
  });
  return arrayCipher;
}
function createIndexDecrypt(arrMessage, arrKey) {
  const arrayCipher = [];
  arrMessage.forEach((item, index) => {
    let code = item - arrKey[index % arrKey.length];
    code = code > 0 ? code : code + 26;
    arrayCipher.push(code % 26);
  });
  return arrayCipher;
}
function clearArray(array) {
  let arr = [];
  array.forEach((item) => {
    if (typeof item !== 'undefined') arr.push(item);
  });
  return arr;
}
function recoveryLen(message, keyMessage, arrCipher) {
  let arrMess = message.split('');
  for (let i = 0; i < message.length; i++) {
    if (typeof keyMessage[i] == 'undefined') {
      arrCipher.splice(i, 0, message[i]);
    }
  }
  return arrCipher;
}

class VigenereCipheringMachine {
  constructor(isRevers = true) {
    this.isRevers = isRevers;
  }

  encrypt(message, key) {
    if (!message || !key) throw Error(`Incorrect arguments!`);
    const keyArray = createKeyArr(key);
    const keyMessageAll = createKeyArr(message);
    const keyMessage = clearArray(keyMessageAll);
    const arrayCipher = createIndexCrypt(keyMessage, keyArray);
    const strCipher = getKeyByValue(arrayCipher);
    let finalCipher;

    if (message.length === strCipher.length) {
      finalCipher = strCipher;
    } else {
      finalCipher = recoveryLen(message, keyMessageAll, strCipher);
    }

    if (this.isRevers) {
      return finalCipher.join('');
    } else {
      return finalCipher.reverse().join('');
    }
  }
  decrypt(message, key) {
    if (!message || !key) throw Error(`Incorrect arguments!`);
    const keyArray = createKeyArr(key);
    const keyMessageAll = createKeyArr(message);
    const keyMessage = clearArray(keyMessageAll);
    const arrayCipher = createIndexDecrypt(keyMessage, keyArray);
    const strCipher = getKeyByValue(arrayCipher);
    let finalCipher;
    if (message.length === strCipher.length) {
      finalCipher = strCipher;
    } else {
      finalCipher = recoveryLen(message, keyMessageAll, strCipher);
    }

    if (this.isRevers) {
      return finalCipher.join('');
    } else {
      return finalCipher.reverse().join('');
    }
  }
}
module.exports = {
  VigenereCipheringMachine,
};
