import React from 'react';
import styled from 'styled-components';

const GameBoardContainer = styled.div`
  max-width: 960px;
`;

const GameSquare = styled.div`
  min-height: 80px;
  min-width: 80px;
`;

const GameBoard = ({
  numSquares = 12,
  className
}) => {
  const squares = Array.from(Array(numSquares).keys());

  return (
    <GameBoardContainer
      className={`m-auto px-5 d-flex align-items-center justify-content-center h-100 ${className || ''}`}
    >
      <div>
        <div className="row align-items-start">
          {squares.map((i) => (
            <div className="col-3" key={i}>
              <GameSquare
                className="bg-secondary mb-3"
              />
            </div>
          ))}
        </div>
      </div>
    </GameBoardContainer>
  );
};

export default GameBoard;
