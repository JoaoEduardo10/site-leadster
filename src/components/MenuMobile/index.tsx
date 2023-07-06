import { Menu } from '../Menu';
import * as Styled from './styles';
import { MenuProps } from '../Menu';
import { AiOutlineClose } from 'react-icons/ai';

export type MenuMobileProps = {
  title: string;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  links: MenuProps['links'];
};

export const MenuMobile = ({ title, setShow, links }: MenuMobileProps) => {
  const handleClick = () => {
    setShow(false);
  };

  return (
    <Styled.MenuMobileConteiner role="menubar">
      <Styled.MenuMobile>
        <AiOutlineClose onClick={handleClick} aria-label="Close Menu" />
        <Styled.Heading>{title}</Styled.Heading>
        <Menu links={links} />
      </Styled.MenuMobile>
    </Styled.MenuMobileConteiner>
  );
};
