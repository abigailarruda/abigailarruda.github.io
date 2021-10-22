import styled from 'styled-components';

import { md } from '../../styles/breakpoints';

export const PlayerSection = styled.section`
  margin-top: 5rem;

  @media (max-width: ${md}) {
    &:nth-child(1) {
      grid-area: 1 / 1 / 2 / 2;
    }

    &:nth-child(2) {
      grid-area: 1 / 2 / 2 / 3;
    }
  }
`;
