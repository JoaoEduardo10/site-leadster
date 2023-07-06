import * as Styled from './styles';
import { AiOutlineCloudDownload } from 'react-icons/ai';

export type DownloadButtonProps = {
  title: string;
  color: 'yellow' | 'blue' | 'green' | 'gray';
};

export const DownloadButton = ({ color, title }: DownloadButtonProps) => {
  return (
    <Styled.Button color={color}>
      {' '}
      <span>
        <AiOutlineCloudDownload />
      </span>{' '}
      {title}
    </Styled.Button>
  );
};
