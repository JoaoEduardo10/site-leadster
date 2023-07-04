import { renderTheme } from '@/utils/render-theme';
import { NavLink } from '.';
import { screen } from '@testing-library/react';

describe('<NavLinks />', () => {
  it('should render the menu and the select', () => {
    renderTheme(<NavLink />);

    const menu = screen.getByRole('menu');
    const select = screen.getByLabelText('Select');

    expect(menu).toBeInTheDocument();
    expect(select).toBeInTheDocument();
  });
});
