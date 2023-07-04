import { Meta } from '@storybook/react';
import { MainConteiner } from '.';
import { NavLink } from '../NavLinks';

export default {
  title: 'MainConteiner',
  component: MainConteiner,
} as Meta;

export const StoryMainConteiner = () => {
  return (
    <MainConteiner>
      <NavLink />
    </MainConteiner>
  );
};
