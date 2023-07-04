import { Menu } from '../Menu';
import { mockMenu } from '../Menu/mock';
import { Select } from '../Select';
import { mockSelect } from '../Select/mock';
import * as Styled from './styles';

export const NavLink = () => {
  return (
    <Styled.NavLink role="menubar">
      <Menu links={mockMenu} />
      <Styled.SelectConteiner>
        <h2>Ordenar por</h2>
        <Select options={mockSelect} />
      </Styled.SelectConteiner>
    </Styled.NavLink>
  );
};
