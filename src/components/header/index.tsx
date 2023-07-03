import { Logo } from '../Logo';
import * as Styled from './styles';
import logo from '../../images/logo.png';
import { HeaderCaption } from '../HeaderCaption';

export const Header = () => {
  return (
    <Styled.Header>
      <Logo img={logo} />
      <HeaderCaption />
    </Styled.Header>
  );
};
