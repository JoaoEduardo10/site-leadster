import { renderTheme } from '../../utils/render-theme';
import { Logo } from '.';
import { screen } from '@testing-library/react';

describe('<Logo />', () => {
  it('should render the Logo component', () => {
    renderTheme(<Logo img="/test.png" />);

    const logo = screen.getByRole('img');

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('alt', '/test.png');
  });
});
