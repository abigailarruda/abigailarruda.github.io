import styled from 'styled-components';

import { md } from '../../styles/breakpoints';
import { gray } from '../../styles/colors';

export const SquareButton = styled.button`
  min-width: 10rem;
  min-height: 10rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${gray[200]};

  border: 0;

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

  &:disabled {
    cursor: not-allowed;
  }
`;
