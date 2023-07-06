'use client';

import * as Styled from './styles';
import { DownloadButton } from '../DownloadButton';
import { FixedConteiner } from '../FixedConteiner';
import { AiOutlineClose } from 'react-icons/ai';
import { DownloadsCards } from '../DownloadsCards';

export type ExpandableCardProps = {
  title: string;
  description: string;
  video: string;
  rendered: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
};

export const ExpandableCard = ({
  description,
  title,
  video,
  rendered,
  setShow,
  show,
}: ExpandableCardProps) => {
  return (
    <FixedConteiner rendered={rendered} show={show}>
      <Styled.ExpandableCard aria-label="expand card">
        <AiOutlineClose
          onClick={() => setShow(false)}
          className="close"
          aria-label="close"
        />
        <Styled.Header aria-label="heading">
          <h2>
            <span>Webinar:</span> {` `} {title}
          </h2>
        </Styled.Header>
        <Styled.VideoConteiner
          aria-label="video"
          dangerouslySetInnerHTML={{ __html: video }}
        />
        <Styled.Description aria-label="descrição">
          <h3>Descrição</h3>
          <p>{description}</p>
        </Styled.Description>
        <Styled.Download aria-label="downloads">
          <h3>Downloads</h3>
          <div>
            <DownloadButton color="green" title="Spreadsheet.xls" />
            <DownloadButton color="blue" title="Document.doc" />
            <DownloadButton color="yellow" title="Presentation.ppt" />
          </div>
        </Styled.Download>
      </Styled.ExpandableCard>
      <DownloadsCards />
    </FixedConteiner>
  );
};
