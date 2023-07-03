import { renderTheme } from '../../utils/render-theme';
import { HeaderCaption } from '.';
import { screen } from '@testing-library/react';

describe('<Logo />', () => {
  it('should render the HeaderCaption component', () => {
    renderTheme(<HeaderCaption />);

    const subtitle = screen.getByLabelText('subtitle');
    const title = screen.getByLabelText('title');
    const mainTitle = screen.getByLabelText('main title');
    const paragraph = screen.getByLabelText('paragraph');

    expect(subtitle).toHaveTextContent('webinars exclusivos');
    expect(title).toHaveTextContent('Menos Conversinha');
    expect(mainTitle).toHaveTextContent('Mais Conversão');
    expect(paragraph).toHaveTextContent(
      'Conheça as estratégias que mudaram o jogo e como aplicá-las no seu negócio',
    );
  });
});
