import * as Styled from './styles';

type LinksProps = {
  link: string;
  title: string;
};

export type FooterTopicsProps = {
  title: string;
  links: LinksProps[];
};

export const FooterTopics = ({ links, title }: FooterTopicsProps) => {
  return (
    <Styled.FooterTopics aria-label="footertopics">
      <Styled.Title>{title}</Styled.Title>
      <Styled.List>
        {links.map((link, index) => (
          <Styled.Topics key={`${link}=${index}`}>
            <a href={`${link.link}`}>{link.title}</a>
          </Styled.Topics>
        ))}
      </Styled.List>
    </Styled.FooterTopics>
  );
};
