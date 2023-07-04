import { renderTheme } from '../../utils/render-theme';
import { SocialLinksContainer } from '.';
import { mockSocialLinksContainer } from './mock';
import { screen } from '@testing-library/react';

describe('<SocialLinksContainer />', () => {
  it('should render the social networks with the links', () => {
    renderTheme(<SocialLinksContainer {...mockSocialLinksContainer} />);

    const linkedin = screen.getByLabelText('linkedin');
    const facebook = screen.getByLabelText('facebook');
    const instagram = screen.getByLabelText('instagram');

    expect(linkedin).toBeInTheDocument();
    expect(linkedin).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/jo%C3%A3o-eduardo-657887231/',
    );

    expect(facebook).toBeInTheDocument();
    expect(facebook).toHaveAttribute('href', '#facebook');

    expect(instagram).toBeInTheDocument();
    expect(instagram).toHaveAttribute('href', '#instagram');
  });

  it('should render the contact media', () => {
    renderTheme(<SocialLinksContainer {...mockSocialLinksContainer} />);

    const email = screen.getByLabelText('email');
    const phone = screen.getByLabelText('phone');

    expect(email).toBeInTheDocument();
    expect(email).toHaveTextContent('E-mail: contato@leadster.com.br');

    expect(phone).toBeInTheDocument();
    expect(phone).toHaveTextContent('telefone: (42) 9 8828-9851');
  });
});
