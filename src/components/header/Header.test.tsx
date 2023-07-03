import { renderTheme } from '../../utils/render-theme';
import { Header } from '.';
import { screen } from '@testing-library/react';

describe('<Header />', () => {
  it('should render the Header component', () => {
    renderTheme(<Header />);

    const logo = screen.getByLabelText('logo');
    const headerCaption = screen.getByLabelText('headerCaption');

    expect(logo).toBeInTheDocument();
    expect(headerCaption).toBeInTheDocument();
  });
});
