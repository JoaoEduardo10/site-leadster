import * as Styled from './styles';
import Link from 'next/link';

type LinksProps = {
  link: string;
  title: string;
};

export type MenuProps = {
  links: LinksProps[];
};

export const Menu = ({ links }: MenuProps) => {
  const pathname = window.location.pathname;

  return (
    <Styled.Menu role="menu">
      {links.map(({ link, title }, index) => (
        <Styled.Links
          className={pathname == link ? 'active' : ''}
          key={`${index}=${link}`}
          role="menuitem"
        >
          <Link href={link}>{title}</Link>
        </Styled.Links>
      ))}
    </Styled.Menu>
  );
};
