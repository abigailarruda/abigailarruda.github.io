import styled from 'styled-components';

import {
  blue,
  green,
  orange,
  pink,
  purple,
  yellow,
  white,
} from '../../styles/colors';

interface ImageContainerProps {
  backgroundColor: 'blue' | 'green' | 'orange' | 'pink' | 'purple' | 'yellow';
}

export const Image = styled.img`
  width: 40px;
  height: 40px;
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  border-radius: 100%;
  border: 3px solid ${white[500]};
  box-shadow: 0 1px 2px 0 rgba(31, 45, 61, 0.15);

  width: 64px;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: -48px;
  margin-bottom: 0.5rem;

  background-color: ${(props) => {
    switch (props.backgroundColor) {
      case 'blue':
        return blue[500];
      case 'green':
        return green[500];
      case 'orange':
        return orange[500];
      case 'pink':
        return pink[500];
      case 'purple':
        return purple[500];
      case 'yellow':
        return yellow[500];
      default:
        return white[500];
    }
  }};
`;
