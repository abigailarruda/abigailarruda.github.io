import styled, { css } from 'styled-components';

import { black, gray, white } from '../../styles/colors';

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

  background-color: ${gray[500]};

  transition: all 300ms ease-in-out;

  &:hover {
    background-color: ${black[300]};

    transition: all 300ms ease-in-out;
  }

  ${(props) =>
    props.isOutlined &&
    css`
      background-color: ${white[500]};

      border: 2px solid ${gray[500]};

      color: ${gray[500]};

      &:hover {
        background-color: ${white[500]};

        border-color: ${black[300]};

        color: ${black[300]};
      }
    `}
`;
