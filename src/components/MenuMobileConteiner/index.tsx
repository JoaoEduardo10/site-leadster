import * as Styled from './styles';
import { useState } from 'react';
import { mockMenu } from '../Menu/mock';
import { MenuMobile } from '../MenuMobile';
import { AiOutlineMenu } from 'react-icons/ai';

export const MenuMobileConteiner = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClickMenu = () => {
    setShowMenu(true);
  };

  return (
    <Styled.MenuMobileConteiner $show={showMenu}>
      <AiOutlineMenu
        onClick={handleClickMenu}
        className="open"
        aria-label="Open Menu"
      />
      {showMenu && (
        <MenuMobile links={mockMenu} title="Menu" setShow={setShowMenu} />
      )}
    </Styled.MenuMobileConteiner>
  );
};
