import styled from 'styled-components';

import { black, gray } from '../../styles/colors';

export const PlayerName = styled.h2`
  font-size: 1.25rem;
  color: ${black[500]};

  margin-bottom: 0.25rem;
`;

export const PlayerInfo = styled.p`
  font-size: 0.875rem;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  color: ${gray[500]};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  & + p {
    margin-top: 0.5rem;
  }
`;
