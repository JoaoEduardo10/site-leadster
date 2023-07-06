import { renderTheme } from '@/utils/render-theme';
import { VideoCards } from '.';
import { act, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

jest.useFakeTimers();

describe('<VideoCards />', () => {
  it('should render the component', () => {
    renderTheme(
      <VideoCards
        description="test"
        video="https://test"
        img={'http://image.png'}
        title="test"
      />,
    );

    const videoCardsConteiner = screen.getByLabelText('card');
    const image = screen.getByRole('img');
    const header = screen.getByLabelText('title card');

    expect(videoCardsConteiner).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(header).toBeInTheDocument();
  });

  it('should activate the animation when hovering over the component', () => {
    renderTheme(
      <VideoCards
        description="test"
        video="https://test"
        img={'http://image.png'}
        title="test"
      />,
    );

    const videoCardsConteiner = screen.getByLabelText('card');
    const animation_video = screen.getByLabelText('animation video');

    expect(videoCardsConteiner).toBeInTheDocument();

    fireEvent.mouseEnter(videoCardsConteiner);

    expect(animation_video).toHaveStyle({
      display: 'block',
    });
  });

  it('should show the ExpandableCard component on click', () => {
    renderTheme(
      <VideoCards
        description="test"
        video="https://test"
        img={'http://image.png'}
        title="test"
      />,
    );

    const videoCardsConteiner = screen.getByLabelText('card');

    act(() => {
      jest.advanceTimersByTime(500);
    });

    fireEvent.click(videoCardsConteiner);

    const expandableCard = screen.getByLabelText('conteiner fixed');

    expect(expandableCard).toBeInTheDocument();
  });
});
