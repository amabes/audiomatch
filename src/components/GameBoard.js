import React from 'react';
import styled from 'styled-components';
import {
  isValidSymbolSet,
  squareColumnClasses,
  symbolsToSquares
} from '../services/squares';

const GameBoardContainer = styled.div`
  max-width: 760px;
`;

const GameSquare = styled.div`
  min-height: 80px;
  min-width: 80px;
`;

const GameBoard = ({
  className,
  symbols
}) => {
  // TODO support larger symbol sets than 12
  if (!isValidSymbolSet(symbols)) {
    return null;
  }

  const squares = symbolsToSquares(symbols);

  return (
    <GameBoardContainer
      className={`m-auto px-5 d-flex align-items-center justify-content-center h-100 ${className || ''}`}
    >
      <div>
        <div className="row align-items-start">
          {squares.map((square, i) => (
            <div
              data-id={square.id}
              data-label={square.label}
              className={squareColumnClasses(symbols)}
              key={i}
            >
              <GameSquare
                className="bg-secondary mb-3 d-flex align-items-center justify-content-center text-white"
              >
                <i className={square.icon} style={{ fontSize: '2rem' }} />
              </GameSquare>
            </div>
          ))}
        </div>
      </div>
    </GameBoardContainer>
  );
};

export default GameBoard;
