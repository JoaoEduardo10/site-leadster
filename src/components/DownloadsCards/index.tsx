import { DownloadButton } from '../DownloadButton';
import * as Styled from './styles';

export const DownloadsCards = () => {
  return (
    <Styled.DowloadsCards role="list">
      <DownloadButton color="green" title="Spreadsheet.xls" />
      <DownloadButton color="blue" title="Document.doc" />
      <DownloadButton color="yellow" title="Presentation.ppt" />
      <DownloadButton color="gray" title="Folder.zip" />
    </Styled.DowloadsCards>
  );
};
