import styled, { css } from 'styled-components';

import { md } from '../../styles/breakpoints';

interface PlayerSectionProps {
  playerNumber: 'one' | 'two';
}

export const PlayerSection = styled.section<PlayerSectionProps>`
  margin-top: 5rem;

  @media (max-width: ${md}) {
    ${(props) =>
      props.playerNumber === 'one' &&
      css`
        grid-area: 1 / 1 / 2 / 2;
      `}

    ${(props) =>
      props.playerNumber === 'two' &&
      css`
        grid-area: 1 / 2 / 2 / 3;
      `}
  }
`;
