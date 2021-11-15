import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FlipCard from './FlipCard';
import './flipCard.css';

const GameTitle = styled.h1`
  font-family: 'Orbitron', sans-serif;
  text-align: center;
  margin-bottom: 4rem;
`;

const TitleScreen = ({ startGame }) => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [gameReady, setGameReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    setTimeout(() => {
      if (mounted) setShow1(true);
    }, 150);

    setTimeout(() => {
      if (mounted) setShow2(true);
    }, 300);

    setTimeout(() => {
      if (mounted) setShow3(true);
    }, 450);

    setTimeout(() => {
      if (mounted) setShow4(true);
    }, 600);

    setTimeout(() => {
      if (mounted) setGameReady(true);
    }, 750);

    return function cleanup() {
      mounted = false;
    };
  });

  return (
    <div
      className="d-flex align-items-center justify-content-center h-100"
    >
      <div>
        <GameTitle className="text-muted">
          Memory Match
        </GameTitle>
        <div>
          <div className="row mb-3">
            <FlipCard
              icon="fas fa-robot"
              show={show1}
              backClassName={gameReady ? 'bg-secondary' : 'bg-success'}
            />
            <FlipCard
              icon="fas fa-anchor"
              show={show2}
              backClassName={gameReady ? 'bg-secondary' : 'bg-success'}
            />
          </div>
          <div className="row">
            <FlipCard
              icon="fas fa-plane"
              show={show3}
              backClassName={gameReady ? 'bg-secondary' : 'bg-success'}
            />
            <FlipCard
              icon="fas fa-dragon"
              show={show4}
              backClassName={gameReady ? 'bg-secondary' : 'bg-success'}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <button
            className={`btn btn-lg ${gameReady ? 'btn-primary' : 'btn-light border'}`}
            onClick={startGame}
            disabled={!gameReady}
            type="button"
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default TitleScreen;
