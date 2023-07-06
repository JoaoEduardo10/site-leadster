import { renderTheme } from '@/utils/render-theme';
import { MenuMobileConteiner } from '.';
import { fireEvent, screen } from '@testing-library/react';

describe('<MenuMobilerConteiner />', () => {
  it('should not render the menu', () => {
    renderTheme(<MenuMobileConteiner />);

    const openMenu = screen.getByLabelText('Open Menu');
    const menu = screen.queryByRole('menubar');

    expect(openMenu).toBeInTheDocument();
    expect(menu).not.toBeInTheDocument();
  });

  it('should open the menu', () => {
    renderTheme(<MenuMobileConteiner />);

    const openMenu = screen.getByLabelText('Open Menu');

    expect(openMenu).toBeInTheDocument();

    fireEvent.click(openMenu);

    const menu = screen.getByRole('menubar');
    expect(menu).toBeInTheDocument();
  });

  it('should close the menu', () => {
    renderTheme(<MenuMobileConteiner />);

    const openMenu = screen.getByLabelText('Open Menu');

    expect(openMenu).toBeInTheDocument();

    fireEvent.click(openMenu);

    const menu = screen.getByRole('menubar');
    expect(menu).toBeInTheDocument();

    const closeMenu = screen.getByLabelText('Close Menu');

    fireEvent.click(closeMenu);

    expect(screen.queryByRole('menubar')).not.toBeInTheDocument();
  });
});
