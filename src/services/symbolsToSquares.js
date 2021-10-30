import { shuffle } from 'lodash';

/**
 * @summary duplicates provided symbolSet and randomizes based on Fisher-Yates algorithm via lodash
 * @param {array of objects} symbolSet
 */
const symbolsToSquares = (symbolSet) => {
  return shuffle([
    ...symbolSet,
    ...symbolSet
  ]);
};

export default symbolsToSquares;
