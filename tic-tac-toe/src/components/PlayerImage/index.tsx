import { Image, ImageContainer } from './styles';

interface Props {
  icon: string;
  color: string;
}

export function PlayerImage({ icon, color }: Props) {
  return (
    <ImageContainer backgroundColor={color}>
      <Image alt='' src={icon} />
    </ImageContainer>
  );
}
