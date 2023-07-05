import Image from 'next/image';
import * as Styled from './styles';
import { BsFillPlayFill } from 'react-icons/bs';

export type VideocardsProps = {
  img: any;
  title: string;
};

export const VideoCards = ({ img, title }: VideocardsProps) => {
  return (
    <Styled.VideoCards role="article">
      <Styled.ConteinerImage>
        <Image src={img} alt={img} width={0} height={0} />
        <div className="animation" aria-label="animation video"></div>
        <BsFillPlayFill className="icon" aria-label="animation icon" />
      </Styled.ConteinerImage>
      <Styled.ConteinerHeader>
        <Styled.Heading className="h2">{title}</Styled.Heading>
      </Styled.ConteinerHeader>
    </Styled.VideoCards>
  );
};
