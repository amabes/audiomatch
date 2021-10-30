import React from 'react';
import GameBoard from './GameBoard';
// import styled from 'styled-components';

const Game = ({
  numSquares = 12
}) => {
  return (
    <GameBoard numSquares={numSquares} />
  );
};

export default Game;
