import { renderTheme } from '@/utils/render-theme';
import { DownloadButton } from '.';
import { screen } from '@testing-library/react';
import { theme } from '@/styles/theme';

describe('<DownloadButton />', () => {
  it('should render the button in blue color', () => {
    renderTheme(<DownloadButton color="blue" title="test" />);

    const button = screen.getByRole('button', { name: 'test' });

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyleRule('background-color', theme.colors.light_blue);
  });

  it('should render the button in gray color', () => {
    renderTheme(<DownloadButton color="gray" title="test" />);

    const button = screen.getByRole('button', { name: 'test' });

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyleRule('background-color', '#CCCCCC');
  });

  it('should render the button in yellow color', () => {
    renderTheme(<DownloadButton color="yellow" title="test" />);

    const button = screen.getByRole('button', { name: 'test' });

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyleRule('background-color', '#FFFF99');
  });

  it('should render the button in green color', () => {
    renderTheme(<DownloadButton color="green" title="test" />);

    const button = screen.getByRole('button', { name: 'test' });

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyleRule('background-color', '#66FF99');
  });
});
