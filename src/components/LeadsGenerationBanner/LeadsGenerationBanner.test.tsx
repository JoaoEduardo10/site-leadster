import { renderTheme } from '@/utils/render-theme';
import { LeadsGenerationBanner } from '.';
import { screen } from '@testing-library/react';

describe('<LeadsGenerationBanner />', () => {
  it('should render a LeadsGenerationBanner component', () => {
    renderTheme(<LeadsGenerationBanner />);

    const imageGraphic = screen.getByRole('img', { name: 'grafico' });
    const titleOne = screen.getByLabelText('texto 1');
    const titleTwo = screen.getByLabelText('texto 2');
    const imageSelo = screen.getByRole('img', { name: 'selo' });
    const imageCard = screen.getByRole('img', { name: 'cartão' });
    const imageRating = screen.getByRole('img', { name: 'estrelas' });

    expect(imageGraphic).toBeInTheDocument();
    expect(titleOne).toBeInTheDocument();
    expect(titleTwo).toBeInTheDocument();
    expect(imageSelo).toBeInTheDocument();
    expect(imageCard).toBeInTheDocument();
    expect(imageRating).toBeInTheDocument();
  });
});
