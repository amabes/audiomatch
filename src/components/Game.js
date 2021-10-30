import React from 'react';
import { set1 } from '../constants/symbols';
import GameBoard from './GameBoard';

const Game = ({ className }) => {
  return (
    <GameBoard
      className={className}
      numSquares={12}
      symbols={set1}
    />
  );
};

export default Game;
