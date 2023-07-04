import { renderTheme } from '@/utils/render-theme';
import { Footer } from '.';
import { screen } from '@testing-library/react';

describe('<Footer />', () => {
  it('should render the footer', () => {
    renderTheme(<Footer />);

    const footerTopics = screen.getAllByLabelText('footertopics');
    const logo = screen.getByLabelText('logo');
    const copyrigth = screen.getByLabelText('copyrigth');
    const socialLinksconteiner = screen.getByLabelText('socialLinksconteiner');

    expect(footerTopics.length).toBe(3);
    expect(logo).toBeInTheDocument();
    expect(copyrigth).toBeInTheDocument();
    expect(socialLinksconteiner).toBeInTheDocument();
  });
});
