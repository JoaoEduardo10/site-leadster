import * as Styled from './styles';

export type FixedConteinerProps = {
  children: React.ReactNode;
  show: boolean;
  rendered: boolean;
};

export const FixedConteiner = ({
  children,
  rendered,
  show,
}: FixedConteinerProps) => {
  return (
    <Styled.FixedConteiner
      showtoggle={String(show)}
      renderedtoggle={String(rendered)}
      aria-label="conteiner fixed"
    >
      {children}
    </Styled.FixedConteiner>
  );
};
