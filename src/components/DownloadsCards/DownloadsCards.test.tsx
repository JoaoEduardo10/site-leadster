import { renderTheme } from '@/utils/render-theme';
import { DownloadsCards } from '.';
import { screen } from '@testing-library/react';

describe('<DownloadsCards />', () => {
  it('should render a DownloadsCards component', () => {
    renderTheme(<DownloadsCards />);

    const conteiner = screen.getByRole('list');
    const buttons = screen.getAllByRole('button');

    expect(conteiner).toBeInTheDocument();
    expect(buttons).toHaveLength(4);
  });
});
