import { renderTheme } from '@/utils/render-theme';
import { MainConteiner } from '.';
import { screen } from '@testing-library/react';

describe('<MainConteiner /> ', () => {
  it('Should render MainConteiner component', () => {
    renderTheme(<MainConteiner>children</MainConteiner>);

    const main = screen.getByText('children');

    expect(main).toBeInTheDocument();
  });
});
