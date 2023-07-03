import Image from 'next/image';
import * as Styled from './styles';

export type LogoProps = {
  img: any;
};

export const Logo = ({ img }: LogoProps) => {
  return (
    <Styled.Conteiner aria-label="logo">
      <Styled.ConteinerLogo>
        <Image src={img} alt={img} width={100} height={100} />
      </Styled.ConteinerLogo>
    </Styled.Conteiner>
  );
};
