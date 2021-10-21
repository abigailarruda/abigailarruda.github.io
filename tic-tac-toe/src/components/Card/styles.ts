import styled from 'styled-components';

import { white } from '../../styles/colors';

export const CardContainer = styled.div`
  width: 100%;
  height: auto;

  background-color: ${white[500]};
  box-shadow: 0 1px 2px 0 rgba(31, 45, 61, 0.15);

  border-radius: 8px;

  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;
