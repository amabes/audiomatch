import React, { useState } from 'react';
import { shuffle } from 'lodash';
import { roundData } from '../constants/symbols';
import { isValidSymbolSet, symbolsToSquares } from '../services/squares';
import GameBoard from './GameBoard';

const Game = ({ className }) => {
  const [squares, setSquares] = useState(null);
  const [symbols, setSymbols] = useState(null);

  const loadNextRound = (round = 0) => {
    const numSymbols = (round + 1) * 2; // 0=2, 1=4, 2=6, 3=8, etc.
    const shuffledRoundData = shuffle(roundData);
    const symbolsData = shuffledRoundData.slice(0, numSymbols);

    if (!isValidSymbolSet(symbolsData)) {
      return null;
    }

    setSquares(symbolsToSquares(symbolsData));
    setSymbols(symbolsData);
  };

  return (
    <GameBoard
      className={className}
      squares={squares}
      symbols={symbols}
      roundData={roundData}
      loadNextRound={loadNextRound}
    />
  );
};

export default Game;
