import styled from 'styled-components';

import { md } from '../../styles/breakpoints';

export const GameSection = styled.section`
  height: 100%;

  @media (max-width: ${md}) {
    grid-area: 2 / 1 / 3 / 3;
  }
`;

export const ButtonGroup = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  margin-bottom: 1rem;
`;

export const TicTacToe = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 0.5rem;
`;
