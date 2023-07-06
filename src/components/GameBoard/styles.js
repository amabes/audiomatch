import styled from 'styled-components';

export const GameTitle = styled.h1`
  font-family: 'Orbitron', sans-serif;
  text-align: center;
  margin-bottom: 4rem;
`;

export const GameBoardContainer = styled.div`
  max-width: 760px;
`;

export const GameSquareContainer = styled.div`
  position: relative;
`;

export const GameSquare = styled.div`
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
