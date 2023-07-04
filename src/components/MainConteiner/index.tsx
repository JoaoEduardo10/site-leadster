import * as Styled from './styles';

export type MainConteinerProps = {
  children: React.ReactNode;
};

export const MainConteiner = ({ children }: MainConteinerProps) => {
  return <Styled.Main>{children}</Styled.Main>;
};
