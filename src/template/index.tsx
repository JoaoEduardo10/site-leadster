import { NavLink } from '../components/NavLinks';
import { Footer } from '../components/Footer';
import { Header } from '../components/header';
import { MainConteiner } from '../components/MainConteiner';

type TemplateLeadsterProps = {
  children: React.ReactNode;
};

export const TemplateLeadster = ({ children }: TemplateLeadsterProps) => {
  return (
    <>
      <Header />
      <NavLink />
      <MainConteiner>{children}</MainConteiner>
      <Footer />
    </>
  );
};
