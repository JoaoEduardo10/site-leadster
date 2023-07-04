import * as Styled from './styles';
import { AiFillLinkedin } from 'react-icons/ai';
import { BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi';

export type SocialLinksContainerProps = {
  title: string;
  email: string;
  phone_number: string;
  linkLinkedin: string;
  linkFacebook: string;
  linkInstagram: string;
};

export const SocialLinksContainer = ({
  email,
  title,
  linkFacebook,
  linkInstagram,
  linkLinkedin,
  phone_number,
}: SocialLinksContainerProps) => {
  return (
    <Styled.FooterTopics aria-label="socialLinksconteiner">
      <Styled.Title>{title}</Styled.Title>
      <Styled.List>
        <Styled.Topics>
          <Styled.Icon>
            <a href={linkLinkedin} target="_blank" aria-label="linkedin">
              <AiFillLinkedin />
            </a>
          </Styled.Icon>
          <Styled.Icon>
            <a href={linkFacebook} target="_blank" aria-label="facebook">
              <BiLogoFacebook />
            </a>
          </Styled.Icon>
          <Styled.Icon>
            <a href={linkInstagram} target="_blank" aria-label="instagram">
              <BiLogoInstagram />
            </a>
          </Styled.Icon>
        </Styled.Topics>
        <Styled.Topics aria-label="email">
          <p>
            E-mail: <Styled.Contact>{email}</Styled.Contact>
          </p>
        </Styled.Topics>
        <Styled.Topics aria-label="phone">
          <p>
            telefone: <Styled.Contact>{phone_number}</Styled.Contact>
          </p>
        </Styled.Topics>
      </Styled.List>
    </Styled.FooterTopics>
  );
};
