import React, { useState } from 'react';
import { set1, set2, set3 } from '../constants/symbols';
import { isValidSymbolSet, symbolsToSquares } from '../services/squares';
import GameBoard from './GameBoard';

const Game = ({ className }) => {
  const roundData = [
    set1,
    set2,
    [...set1, ...set2],
    set3,
    [...set2, ...set3]
  ];
  const [squares, setSquares] = useState(null);
  const [symbols, setSymbols] = useState(null);

  const loadNextRound = (round = 0) => {
    const symbolsData = roundData[round];

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
      numRounds={roundData.length}
      loadNextRound={loadNextRound}
    />
  );
};

export default Game;
