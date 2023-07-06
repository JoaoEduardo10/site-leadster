import { renderTheme } from '@/utils/render-theme';
import { ExpandableCard } from '.';
import { fireEvent, screen } from '@testing-library/react';

const mock = {
  description: 'test',
  title: 'title test',
  video: '<h1>test </h1>',
};

describe('<ExpandableCard />', () => {
  it('should render a ExpandableCard component', () => {
    const fn = jest.fn();

    renderTheme(
      <ExpandableCard {...mock} rendered={true} setShow={fn} show={true} />,
    );

    const expandCard = screen.getByLabelText('expand card');
    const heading = screen.getByLabelText('heading');
    const conteinerVideo = screen.getByLabelText('video');
    const description = screen.getByLabelText('descrição');
    const downloads = screen.getByLabelText('downloads');
    const downloadsCards = screen.getByRole('list');

    expect(expandCard).toBeInTheDocument();

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Webinar: title test');

    expect(conteinerVideo).toBeInTheDocument();
    expect(conteinerVideo.firstChild).toBeInTheDocument();

    expect(description).toBeInTheDocument();
    expect(description.firstChild).toHaveTextContent('Descrição');
    expect(description.lastElementChild).toHaveTextContent('test');

    expect(downloads).toBeInTheDocument();
    expect(downloads.firstChild).toHaveTextContent('Downloads');

    expect(downloadsCards).toBeInTheDocument();
  });

  it('should close when click on the icon', () => {
    const fn = jest.fn();

    renderTheme(
      <ExpandableCard {...mock} rendered={true} setShow={fn} show={true} />,
    );

    const iconClose = screen.getByLabelText('close');

    fireEvent.click(iconClose);

    expect(fn).toHaveBeenLastCalledWith(false);
  });
});
