import { renderTheme } from '@/utils/render-theme';
import { VideoGallery } from '.';
import { fireEvent, screen } from '@testing-library/react';

describe('<VideoGallery />', () => {
  it('should render the component', () => {
    renderTheme(<VideoGallery />);

    const videoCards = screen.getAllByRole('article');
    const conteinerPagination = screen.getByLabelText('conteiner paginate');

    expect(videoCards).toHaveLength(9);
    expect(conteinerPagination).toBeInTheDocument();
  });

  it('should change the page on clickt', () => {
    renderTheme(<VideoGallery />);

    const pagination = document.querySelector(
      '.pagination > :nth-child(5) > a',
    );

    expect(pagination).toBeInTheDocument();

    fireEvent.click(pagination as Element);
    const videoCards = screen.getAllByRole('article');

    expect(videoCards).toHaveLength(3);
  });
});
