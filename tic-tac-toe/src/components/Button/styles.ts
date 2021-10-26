import styled, { css } from 'styled-components';
import { darken } from 'polished';

import { negative, positive, white } from '../../styles/colors';

interface ButtonContainerProps {
  isOutlined?: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100%;

  font: 500 1rem 'Poppins';
  color: ${white[500]};

  padding: 0.5rem 0;

  border: 0;
  border-radius: 4px;

  background-color: ${positive};

  border: 2px solid ${positive};

  transition: all 300ms ease-in-out;

  &:hover {
    background-color: ${darken(0.05, positive)};

    border: 2px solid ${darken(0.05, positive)};

    transition: all 300ms ease-in-out;
  }

  ${(props) =>
    props.isOutlined &&
    css`
      background-color: ${white[500]};

      border: 2px solid ${negative};

      color: ${negative};

      &:hover {
        background-color: ${white[500]};

        border-color: ${darken(0.05, negative)};

        color: ${darken(0.05, negative)};
      }
    `}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
