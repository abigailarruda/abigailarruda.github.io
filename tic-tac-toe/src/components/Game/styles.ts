import styled from 'styled-components';

import { md } from '../../styles/breakpoints';
import { gray } from '../../styles/colors';

export const Cell = styled.div`
  min-width: 10rem;
  min-height: 10rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  background-color: ${gray[200]};

  @media (max-width: ${md}) {
    min-width: 2.5rem;
  }

  &:nth-child(1) {
    border-top-left-radius: 4px;
  }

  &:nth-child(3) {
    border-top-right-radius: 4px;
  }

  &:nth-child(7) {
    border-bottom-left-radius: 4px;
  }

  &:nth-child(9) {
    border-bottom-right-radius: 4px;
  }
`;

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
