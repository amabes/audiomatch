import { shuffle } from 'lodash';
import { toast } from 'react-toastify';
import isEven from '../utils/isEven';

/**
 * @summary generates ordered pairs based on symbol set
 * @param {array of objects} symbolSet
 * @returns array of objects with ordered pairs values as value of "id"
 */
export const serializeSymbolSet = (symbolSet) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const alphabetArray = alphabet.split('');
  let yCount = 0; // Y-Axis Label Count
  let xCount = 0; // X-Axis Label Count
  const gridUnit = parseInt(Math.sqrt(symbolSet.length), 10);
  const randomSymbolSet = shuffle(symbolSet);
  const serializedSymbolSet = randomSymbolSet.map((symbol, i) => {
    if (i === gridUnit || (yCount > 0 && i % gridUnit === 0)) {
      yCount += 1;
    }

    xCount += 1;

    // yAxis Label
    // yCount is increased when moving into second row
    // ex: grid of 16 (gridUnit = 4)
    let yLabel = '';
    if (i === 0) {
      // 0 = A
      yLabel = alphabetArray[yCount];
    } else if ((i + 1) === (yCount * gridUnit) + 1) {
      // 5 = B : yCount (1) * gridUnit (4) + 1
      // 9 = C : yCount (2) * gridUnit (4) + 1
      // 13 = D : yCount (3) * gridUnit (4) + 1
      yLabel = alphabetArray[yCount];
    }
    // yAxis Label

    const serializedSymbol = {
      ...symbol,
      id: alphabetArray[yCount] + xCount.toString(),
      yLabel,
      xLabel: (i <= gridUnit - 1) ? i + 1 : ''
    };

    if (xCount === gridUnit) {
      xCount = 0;
    }

    return serializedSymbol;
  });

  return serializedSymbolSet;
};

/**
 * @summary duplicates provided symbolSet and randomizes based on Fisher-Yates algorithm via lodash
 * @param {array of objects} symbolSet
 */
export const symbolsToSquares = (symbolSet) => {
  const dupeSymbolSet = [
    ...symbolSet,
    ...symbolSet
  ];
  const randomSymbolSet = shuffle(dupeSymbolSet);
  const serializedSymbolSet = serializeSymbolSet(randomSymbolSet);

  return serializedSymbolSet;
};

/**
 * @summary error checking against provided symbol set
 * @param {array of objects} symbolSet
 */
export const isValidSymbolSet = (symbolSet) => {
  // We need an even number of symbols to
  // construct a playable grid where each card
  // has the correct corresponding ordered pairs, ex: A3, B1
  if (!isEven(symbolSet.length)) {
    toast.error('An even number of symbols is required.', { toastId: 'evenSymbols', autoClose: false });
    return false;
  }

  // Currently allow only 12 symbols
  // TODO think through how to allow more
  // 104 is technically the max, but running into
  // UI limitations with bootstrap grid based on 12
  if (symbolSet.length > 12) {
    toast.error('12 symbols is the maximum allowed.', { toastId: 'evenSymbols', autoClose: false });
    return false;
  }

  return true;
};

/**
 * @summary creates appropriate bootstrap classes to show cards correctly
 * @param {array of objects} symbolSet
 */
export const squareColumnClasses = (symbolSet) => {
  const symbolsLen = symbolSet.length;

  if (symbolsLen === 2 || symbolsLen === 4) {
    return 'col-6';
  }

  if (symbolsLen === 6) {
    return 'col-4';
  }

  return 'col-3';
};
