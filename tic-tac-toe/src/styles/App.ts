import styled from 'styled-components';

import { sm, md, lg, xl } from './breakpoints';

export const Main = styled.main`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  padding: 2rem 0;

  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto;
  gap: 0 2rem;

  @media (min-width: ${lg}) and (max-width: ${xl}) {
    padding: 2rem;
  }

  @media (max-width: ${md}) {
    padding: 2rem;

    grid-auto-rows: 1fr;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 1rem;
  }

  @media (max-width: ${sm}) {
    padding: 1rem;
  }
`;
