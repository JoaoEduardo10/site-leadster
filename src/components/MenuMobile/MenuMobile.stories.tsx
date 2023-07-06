import { Meta } from '@storybook/react';
import { MenuMobile, MenuMobileProps } from '.';
import { mockMenu } from '../Menu/mock';

export default {
  title: 'MenuMobile',
  component: MenuMobile,
  args: {
    title: 'Menu',
    links: mockMenu,
  } as MenuMobileProps,
} as Meta;

export const StoryMenuMobile = (agrs: MenuMobileProps) => {
  return <MenuMobile {...agrs} />;
};
