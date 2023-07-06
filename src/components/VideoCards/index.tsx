'use client';

import Image from 'next/image';
import * as Styled from './styles';
import { BsFillPlayFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { ExpandableCard } from '../ExpandableCard';

export type VideocardsProps = {
  img: any;
  description: string;
  title: string;
  video: string;
};

export const VideoCards = ({
  img,
  title,
  description,
  video,
}: VideocardsProps) => {
  const [rendered, setRendered] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const time = setTimeout(() => {
      setRendered(true);
    }, 500);

    return () => clearTimeout(time);
  }, []);

  const handleClick = () => {
    setShow(true);
  };

  return (
    <>
      {show && (
        <ExpandableCard
          description={description}
          rendered={rendered}
          setShow={setShow}
          show={show}
          title={title}
          video={video}
        />
      )}
      <Styled.VideoCards onClick={handleClick} aria-label="card">
        <Styled.ConteinerImage>
          <Image src={img} alt={img} width={0} height={0} />
          <div className="animation" aria-label="animation video"></div>
          <BsFillPlayFill className="icon" aria-label="animation icon" />
        </Styled.ConteinerImage>
        <Styled.ConteinerHeader>
          <Styled.Heading className="h2" aria-label="title card">
            {title}
          </Styled.Heading>
        </Styled.ConteinerHeader>
      </Styled.VideoCards>
    </>
  );
};
