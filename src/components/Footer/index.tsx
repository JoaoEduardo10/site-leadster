import * as Styled from './styles';
import { Logo } from '../Logo';
import logo from '../../images/logo.png';
import { FooterTopics } from '../FooterTopics';
import { mockFooterTopics } from '../FooterTopics/mock';
import { mockSocialLinksContainer } from '../SocialLinksContainer/mock';
import { Copyrigth } from '../Copyright';
import { SocialLinksContainer } from '../SocialLinksContainer';

export const Footer = () => {
  return (
    <Styled.Footer>
      <Logo img={logo} />
      <Styled.Paragraph>Transformando visitantes em clientes</Styled.Paragraph>
      <Styled.ConteinerFooterTopics>
        <FooterTopics title="Links principais" links={mockFooterTopics} />
        <FooterTopics title="Cases" links={mockFooterTopics} />
        <FooterTopics title="Materiais" links={mockFooterTopics} />
        <SocialLinksContainer {...mockSocialLinksContainer} />
      </Styled.ConteinerFooterTopics>
      <Styled.Line></Styled.Line>
      <Copyrigth />
    </Styled.Footer>
  );
};
