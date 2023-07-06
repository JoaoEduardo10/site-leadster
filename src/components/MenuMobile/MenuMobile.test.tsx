import { renderTheme } from '@/utils/render-theme';
import { MenuMobile } from '.';
import { mockMenu } from '../Menu/mock';
import { fireEvent, screen } from '@testing-library/react';

describe('<MenuMobile />', () => {
  it('shpuld render a MenuMobile', () => {
    const setShow = jest.fn();

    renderTheme(<MenuMobile links={mockMenu} setShow={setShow} title="test" />);

    const menuConteiner = screen.getByRole('menubar');
    const menu = screen.getByRole('menu');
    const heading = screen.getByRole('heading', { name: 'test' });
    const iconClose = screen.getByLabelText('Close Menu');

    expect(menuConteiner).toBeInTheDocument();
    expect(menu).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(iconClose).toBeInTheDocument();
  });

  it('should return false when clicking on the Icon', () => {
    const setShow = jest.fn();

    renderTheme(<MenuMobile links={mockMenu} setShow={setShow} title="test" />);

    const iconClose = screen.getByLabelText('Close Menu');

    expect(iconClose).toBeInTheDocument();

    fireEvent.click(iconClose);

    expect(setShow).toHaveBeenCalledWith(false);
  });
});
