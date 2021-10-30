import React from 'react';
import styled from 'styled-components';
import symbolsToSquares from '../services/symbolsToSquares';

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
  const squares = symbolsToSquares(symbols);

  return (
    <GameBoardContainer
      className={`m-auto px-5 d-flex align-items-center justify-content-center h-100 ${className || ''}`}
    >
      <div>
        <div className="row align-items-start">
          {squares.map((square, i) => (
            <div className="col-3" key={i}>
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
