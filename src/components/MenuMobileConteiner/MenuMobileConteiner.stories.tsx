import { Meta } from '@storybook/react';
import { MenuMobileConteiner } from '.';
import { mockMenu } from '../Menu/mock';

export default {
  title: 'MenuMobileConteiner',
  component: MenuMobileConteiner,
} as Meta;

export const StoryMenuMobileConteiner = () => {
  return <MenuMobileConteiner />;
};
