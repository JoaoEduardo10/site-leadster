import { renderTheme } from '@/utils/render-theme';
import { Copyrigth } from '.';
import { screen } from '@testing-library/react';

describe('<Copyright />', () => {
  it('should render the copyright component', () => {
    renderTheme(<Copyrigth />);

    const copyrigth = screen.getByLabelText('copyrigth');

    expect(copyrigth).toBeInTheDocument();
  });
});
