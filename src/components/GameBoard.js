import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { squareColumnClasses } from '../services/squares';
import GameKeyboardInput from './GameKeyboardInput';

const GameTitle = styled.h1`
  font-family: 'Orbitron', sans-serif;
  text-align: center;
  margin-bottom: 4rem;
`;

const GameBoardContainer = styled.div`
  max-width: 760px;
`;

const GameSquareContainer = styled.div`
  position: relative;
`;

const GameSquare = styled.div`
  min-height: 60px;
  min-width: 60px;

  &::before {
    position: absolute;
    content: "${(props) => props.xLabel}";
    top: -40px;
    color: black;
  }

  &::after {
    position: absolute;
    content: "${(props) => props.yLabel}";
    left: -40px;
    color: black;
  }

  @media (min-width: 600px) {
    min-height: 80px;
    min-width: 80px;
  }
`;

const GameBoard = ({
  squares,
  className,
  symbols,
  numRounds,
  loadNextRound
}) => {
  const [inputMethod, setInputMethod] = useState(null);
  const [currentRound, setCurrentRound] = useState(0);
  const [roundLoaded, setRoundLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userWon, setUserWon] = useState(false);
  const [prevOrderedPair, setPrevOrderedPair] = useState(null);
  const [orderedPair, setOrderedPair] = useState(null);
  const [correctOrderedPairs, setCorrectOrderedPairs] = useState({});
  // TODO support larger symbol sets than 12

  useEffect(() => {
    if (!roundLoaded) {
      loadNextRound(currentRound);
      setRoundLoaded(true);
    }
  }, [squares, symbols]);

  const resetForNextSelection = () => {
    const keyboardInput = document.getElementById('keyboardInput');

    setOrderedPair(null);
    setPrevOrderedPair(null);
    setLoading(false);

    if (inputMethod === 'keyboard') {
      keyboardInput.focus();
    }
  };

  const selectOrderedPair = (selectedOrderedPair) => {
    const sop = selectedOrderedPair.toUpperCase();
    const square = document.getElementById(sop);
    const keyboardInput = document.getElementById('keyboardInput');

    toast.dismiss();

    if (!square) {
      toast.error('Guess ordered pairs within the grid.');

      return false;
    }

    const { dataset: { label } } = square;

    if (orderedPair) {
      setPrevOrderedPair(orderedPair);
    }

    setOrderedPair([sop, label]);

    // 0 = Ordered Pair, ex: A2
    // 1 = Label, ex: Fish
    if (orderedPair) {
      // Check if labels are the same
      // and if ordered pairs are different
      setLoading(true);

      if (orderedPair[1] === label && orderedPair[0] !== sop) {
        const cop = {
          ...correctOrderedPairs,
          [sop]: label,
          [orderedPair[0]]: orderedPair[1]
        };

        setCorrectOrderedPairs(cop);
        // TODO function?
        resetForNextSelection();
      } else {
        toast.error('Try again');
        setTimeout(() => {
          resetForNextSelection();
        }, 1500);
      }
    }

    if (inputMethod === 'keyboard') {
      keyboardInput.value = '';
    }
  };

  const showIcon = (square) => {
    let visibility = false;

    if (correctOrderedPairs[square.id] !== undefined) {
      visibility = true;
    }

    if (orderedPair && orderedPair[0] === square.id) {
      visibility = true;
    }

    if (prevOrderedPair && prevOrderedPair[0] === square.id) {
      visibility = true;
    }

    return visibility;
  };

  const handleLoadNextRound = () => {
    const nextRound = currentRound + 1;
    setUserWon(false);
    setRoundLoaded(false);
    setCorrectOrderedPairs({});
    setCurrentRound(nextRound);
    loadNextRound(nextRound);
  };

  if (!squares || !symbols) return null;

  if (!userWon && Object.keys(correctOrderedPairs).length === squares.length) {
    setUserWon(true);
    toast.success('Nice job!');
  }

  return (
    <GameBoardContainer
      className={`m-auto px-5 d-flex align-items-center justify-content-center h-100 ${className || ''}`}
    >
      <div>
        <GameTitle className="text-muted">
          Round {currentRound + 1}
        </GameTitle>
        <div className="row align-items-start">
          {squares.map((square, i) => (
            <div
              key={i}
              className={squareColumnClasses(symbols)}
            >
              <GameSquareContainer>
                <GameSquare
                  id={square.id}
                  data-label={square.label}
                  className={`game-square bg-${correctOrderedPairs[square.id] !== undefined ? 'success' : 'secondary'} mb-3 d-flex align-items-center justify-content-center text-white`}
                  xLabel={square.xLabel}
                  yLabel={square.yLabel}
                  onClick={() => {
                    if (inputMethod !== 'touch') {
                      setInputMethod('touch');
                    }

                    if (!loading) {
                      selectOrderedPair(square.id);
                    }
                  }}
                >
                  {showIcon(square) && (
                    <i className={square.icon} style={{ fontSize: '2rem' }} />
                  )}
                </GameSquare>
              </GameSquareContainer>
            </div>
          ))}
        </div>

        {!userWon && (
          <div
            className="d-flex align-item-center justify-content-center flex-column"
          >
            <div className="mx-auto mt-3">
              {/* <div
                className="btn-group border rounded"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  className="btn btn-light border-right"
                >
                  <i className="fas fa-keyboard" />
                </button>
                <button
                  type="button"
                  className="btn btn-light"
                >
                  <i className="fas fa-microphone" />
                </button>
              </div> */}
            </div>
            <GameKeyboardInput
              onSubmit={(inputOrderedPair) => {
                selectOrderedPair(inputOrderedPair);
              }}
              loading={loading}
            />
          </div>
        )}

        {userWon && (
          <div
            className="d-flex align-item-center justify-content-center flex-column"
          >
            <div className="mx-auto mt-3">
              {!numRounds === (currentRound + 1) ? (
                <div>
                  <h4>
                    <i className="fas fa-check-circle text-success" /> You win!
                  </h4>
                </div>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={() => {
                    if (inputMethod !== 'keyboard') {
                      setInputMethod('keyboard');
                    }

                    handleLoadNextRound();
                  }}
                >
                  Next Round
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </GameBoardContainer>
  );
};

export default GameBoard;
