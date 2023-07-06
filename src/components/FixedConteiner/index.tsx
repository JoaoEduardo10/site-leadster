import * as Styled from './styles';

export type FixedConteinerProps = {
  children: React.ReactNode;
};

export const FixedConteiner = ({ children }: FixedConteinerProps) => {
  return <Styled.FixedConteiner>{children}</Styled.FixedConteiner>;
};
