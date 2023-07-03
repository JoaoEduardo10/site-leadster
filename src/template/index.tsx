import { Header } from '../components/header';

type TemplateLeadsterProps = {
  children: React.ReactNode;
};

export const TemplateLeadster = ({ children }: TemplateLeadsterProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
};
