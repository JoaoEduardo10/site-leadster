import { renderTheme } from '@/utils/render-theme';
import { FixedConteiner } from '.';
import { screen } from '@testing-library/react';

describe('<FixedConteiner />', () => {
  it('Should render a FixedConteiner component', () => {
    renderTheme(<FixedConteiner>Children</FixedConteiner>);

    const conteiner = screen.getByText('Children');

    expect(conteiner).toBeInTheDocument();
  });
});
