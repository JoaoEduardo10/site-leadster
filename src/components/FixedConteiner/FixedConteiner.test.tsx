import { renderTheme } from '@/utils/render-theme';
import { FixedConteiner } from '.';
import { screen } from '@testing-library/react';

describe('<FixedConteiner />', () => {
  it('Should render a FixedConteiner component with animation', () => {
    renderTheme(
      <FixedConteiner rendered={true} show={true}>
        Children
      </FixedConteiner>,
    );

    const conteiner = screen.getByText('Children');

    expect(conteiner).toBeInTheDocument();
    expect(conteiner).toHaveStyleRule(
      'animation',
      'openShow 300ms ease-in-out',
    );
  });

  it('should render a FixedConteiner component without animation', () => {
    renderTheme(
      <FixedConteiner rendered={true} show={false}>
        Children
      </FixedConteiner>,
    );

    const conteiner = screen.getByText('Children');

    expect(conteiner).toBeInTheDocument();
    expect(conteiner).toHaveStyleRule(
      'animation',
      'closeShow 0.5s ease-in-out',
    );
  });

  it('should render a FixedConteiner component without animation and without rendering', () => {
    renderTheme(
      <FixedConteiner rendered={false} show={false}>
        Children
      </FixedConteiner>,
    );

    const conteiner = screen.getByText('Children');

    expect(conteiner).toBeInTheDocument();
    expect(conteiner).toHaveStyleRule(
      'animation',
      'closeShow 0.5s ease-in-out',
    );
  });
});
