import { renderTheme } from '@/utils/render-theme';
import { Menu } from '.';
import { mockMenu } from './mock';
import { screen } from '@testing-library/react';

describe('<Menu />', () => {
  it('should render the menu with all the links', () => {
    renderTheme(<Menu links={mockMenu} />);

    const menu = screen.getByRole('menu');
    const item = screen.getAllByRole('menuitem');
    const link = screen.getAllByRole('link');

    expect(menu).toBeInTheDocument();
    expect(item.length).toBe(5);
    expect(link.length).toBe(5);
  });
});
