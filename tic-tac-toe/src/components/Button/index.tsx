import { ButtonHTMLAttributes, ReactNode } from 'react';

import { ButtonContainer } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOutlined?: boolean;
  children: ReactNode;
}

export function Button({ children, isOutlined, ...rest }: Props) {
  return (
    <ButtonContainer isOutlined={isOutlined} {...rest}>
      {children}
    </ButtonContainer>
  );
}
