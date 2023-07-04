import { screen } from '@testing-library/react';
import { FooterTopics } from '.';
import { renderTheme } from '../../utils/render-theme';
import { mockFooterTopics } from './mock';

describe('<FooterTopics />', () => {
  it('should render FooterTopicsProps with titles and all links', () => {
    renderTheme(<FooterTopics title="test" links={mockFooterTopics} />);

    const links = screen.getAllByRole('link');
    const title = screen.getByRole('heading');

    expect(links.length).toBe(3);
    expect(title).toHaveTextContent('test');
  });
});
