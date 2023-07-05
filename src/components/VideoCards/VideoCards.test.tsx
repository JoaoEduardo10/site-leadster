import { renderTheme } from '@/utils/render-theme';
import { VideoCards } from '.';
import { screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';

describe('<VideoCards />', () => {
  it('should render the component', () => {
    renderTheme(<VideoCards img={'http://image.png'} title="test" />);

    const videoCardsConteiner = screen.getByRole('article');
    const image = screen.getByRole('img');
    const header = screen.getByRole('heading');

    expect(videoCardsConteiner).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(header).toBeInTheDocument();
  });

  it('should activate the animation when hovering over the component', () => {
    renderTheme(<VideoCards img={'http://image.png'} title="test" />);

    const videoCardsConteiner = screen.getByRole('article');
    const animation_video = screen.getByLabelText('animation video');

    expect(videoCardsConteiner).toBeInTheDocument();

    fireEvent.mouseEnter(videoCardsConteiner);

    expect(animation_video).toHaveStyle({
      display: 'block',
    });
  });
});
